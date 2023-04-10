const fs = require('fs');
const path = require('path');
const { parse } = require('@babel/parser');
const traverse = require('@babel/traverse').default;
const resolve = require("resolve");

// Gets list of all react components mapped to their source file names
const tree = {}
// TODO: assept ast as paramenter instead of parsing file with babel.
function processModule(filename, processedFiles = new Set(), componentsWithFile = {}) {
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
        FunctionDeclaration(path) {
            if (path.node.id && path.node.id.name[0] === path.node.id.name[0].toUpperCase()) {
                console.log(path.node.id.name)
                if (path.node.id.name === 'Name') {
                    // fs.writeFileSync('ReactComponentDeclaration.json', JSON.stringify(path.node))
                }
                if (!componentsWithFile[filename]) {
                    componentsWithFile[filename] = { children: [] }
                }
                // path.node.body.body.forEach(statement => {
                //     // console.log(statement)
                //     // components = components.concat(traverse(statement, path.node))
                //   })
                componentsWithFile[filename].children.push({ name: path.node.id.name })
            }
        },
        VariableDeclaration(path) {
            path.node.declarations.forEach(declaration => {
                if (declaration.init && declaration.init.type === 'ArrowFunctionExpression' && declaration.id.name[0] === declaration.id.name[0].toUpperCase()) {
                    // const componentName = declaration.id.name
                    // tree[componentName] = { children: [] } 
                    // if (declaration.id.name === 'Name') {
                    //     declaration.init.body.body[0].argument.children.forEach(node => {
                    //         if (node.type === "JSXElement") {
                    //             const child = { name: node.openingElement.name.name, children:[] }
                    //             if (node.children) {
                    //                 child.children = node.children.map(child => {
                    //                     if(child.type === "JSXElement"){
                    //                         return getJSXElements(child)
                    //                     }
                    //                 })
                    //             }

                    //             tree[componentName].children.push(child)
                    //         }
                    //     })
                    //     // fs.writeFileSync('children.json', JSON.stringify(tree))
                    //     // fs.writeFileSync('ReactComponentDeclaration.json', JSON.stringify())
                    // }
                    if (!componentsWithFile[filename]) {
                        componentsWithFile[filename] = { children: [] }
                    }
                    componentsWithFile[filename].children.push({ name: declaration.id.name })
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
                processModule(dependencyFilename, processedFiles, componentsWithFile);
            } else {
                // Resolve the absolute path of the Node module
                const dependencyFilename = require.resolve(dependencyPath);
                processModule(dependencyFilename, processedFiles, componentsWithFile);
            }
        },
        ExportDefaultDeclaration(path) {
            const defaultDeclaration = path.node.declaration;
            componentsWithFile[filename].children.forEach(node => {
                if (node.name === defaultDeclaration.name) {
                    node.isDefaultExport = true
                }
            })

        },
    });
    return componentsWithFile
}

module.exports = processModule

function getJSXElements(node, jsxElements = {}) {
    if (node.type !== 'JSXElement') {
        return
    }
    const nodeName = node.openingElement.name.name
   
    jsxElements[nodeName] = { name: nodeName, children: [] };
    node.children.forEach(node => {

        if(node.type === "JSXElement"){
            jsxElements[nodeName].children.push(getJSXElements(node))
        }
    })

    return jsxElements[nodeName];
}

function isReactComponent(node) {
    const { openingElement } = node;
    if (!openingElement) return
    const { name } = openingElement.name;
    if (typeof name === 'string' && /^[a-z]/.test(name) || name === undefined) {
        // This is a built-in HTML element, skip it
        return false
    }
    return true
}
