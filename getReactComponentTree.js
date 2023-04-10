const fs = require('fs');
const path = require('path');
const { parse } = require('@babel/parser');
const traverse = require('@babel/traverse').default;
const resolve = require("resolve");

// Gets list of all react components mapped to their source file names
const tree = {}
// TODO: assept ast as paramenter instead of parsing file with babel.
function processModule(filename, processedFiles = new Set(), importVarNameToSourceMap) {
    const extname = path.extname(filename);
    // console.log("fileName", filename)
    if (filename.includes("node_modules")) return
    if (!['.jsx', '.tsx'].includes(path.extname(filename))) return
    if (extname === '.css' || extname === '.svg') {
        return;
    }
    // Prevent processing the same file twice
    if (processedFiles.has(filename)) {
        return;
    }
    processedFiles.add(filename);

    // Check if the file is a CSS or SVG file and skip it if it is

    // Read the file and parse it as a TypeScript React module
    const code = fs.readFileSync(filename, 'utf8');

    const ast = parse(code, {
        sourceType: 'module',
        plugins: ['typescript',
            'jsx',
            ["@babel/plugin-transform-modules-commonjs", {
                "allowTopLevelThis": true
            }]
        ],
        presets: [
            '@babel/preset-env',
            '@babel/preset-typescript',
            '@babel/preset-react',
        ]
    });

    traverse(ast, {
        ImportDeclaration(importPath) {
            const { value } = importPath.node.source;
            const resolvedPath = resolve.sync(value, {
                basedir: path.dirname(filename),
                moduleDirectory: ['node_modules', '@types'],
                extensions: ['.ts', '.tsx', '.js', '.jsx', ".d.ts"],
            });
            importPath.node.source.value = resolvedPath;
        }
    });


    traverse(ast, {
        // FunctionDeclaration(path) {
        //     if (path.node.id && path.node.id.name[0] === path.node.id.name[0].toUpperCase()) {
        //         if (!componentsWithFile[filename]) {
        //             componentsWithFile[filename] = { components: [] }
        //         }
        //         componentsWithFile[filename].components.push({ name: path.node.id.name })
        //     }
        // },
        VariableDeclaration(path) {
            path.node.declarations.forEach(declaration => {
                if (declaration.init && declaration.init.type === 'ArrowFunctionExpression' && declaration.id.name[0] === declaration.id.name[0].toUpperCase()) {
                    const componentName = declaration.id.name
                    tree[componentName] = { children: [] } 
                        declaration.init.body.body[0].argument.children.forEach(node => {
                            if (node.type === "JSXElement") {
                                console.log(importVarNameToSourceMap)
                                const child = { name: importVarNameToSourceMap[node.openingElement.name.name].pointsTo, children:[] }
                                if (node.children) {
                                    child.children = node.children.map(child => {
                                        if(child.type === "JSXElement"){
                                            return getJSXElements(child,{},importVarNameToSourceMap)
                                        }
                                    })
                                }

                                tree[componentName].children.push(child)
                            }
                        })
                        // fs.writeFileSync('children.json', JSON.stringify(tree))
                        // fs.writeFileSync('ReactComponentDeclaration.json', JSON.stringify())
                    // if (!componentsWithFile[filename]) {
                    //     componentsWithFile[filename] = { components: [] }
                    // }
                    // componentsWithFile[filename].components.push({ name: declaration.id.name })
                }
            });
        },
    })

    // Recursively process all the dependencies of the module
    traverse(ast, {
        ImportDeclaration(incomingPath) {
            const dependencyPath = incomingPath.node.source.value;
            if (dependencyPath.startsWith('.')) {
                // Resolve the relative path of the dependency
                const dependencyFilename = path.resolve(path.dirname(filename), `${dependencyPath}`);
                processModule(dependencyFilename, processedFiles, importVarNameToSourceMap);
            } else {
                // Resolve the absolute path of the Node module
                const dependencyFilename = require.resolve(dependencyPath);
                processModule(dependencyFilename, processedFiles, importVarNameToSourceMap);
            }
        },
    });
    return tree
}

module.exports = processModule

function getJSXElements(node, jsxElements = {}, importVarNameToSourceMap) {
    if (node.type !== 'JSXElement') {
        return
    }
    const nodeName = importVarNameToSourceMap[node.openingElement.name.name].pointsTo
   
    jsxElements[nodeName] = { name: nodeName, children: [] };
    node.children.forEach(node => {
        if(node.type === "JSXElement"){
            jsxElements[nodeName].children.push(getJSXElements(node), {}, importVarNameToSourceMap)
        }
    })

    return jsxElements[nodeName];
}
