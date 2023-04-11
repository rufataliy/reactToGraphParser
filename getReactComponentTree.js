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
        ranges: false,
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
                    const rootJsx = getReturnedJSX(declaration)
                    tree[componentName] = { children: [] }

                    
                    if (rootJsx.type === "JSXFragment") {
                        rootJsx.children.forEach(child => {
                            if(child.type === "JSXElement" && child.openingElement){
                                tree[componentName].children.push(getJSXElements(child, importVarNameToSourceMap))
                            }
                        })
                    }
                    if (rootJsx.type === 'JSXElement') {
                        tree[componentName].children.push(getJSXElements(rootJsx, importVarNameToSourceMap))
                    }
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

function getJSXElements(node, importVarNameToSourceMap) {
    let jsxElement = {}
    const nodeName = importVarNameToSourceMap[node.openingElement.name.name].pointsTo
    jsxElement = { name: nodeName, children: [] };
    node.children.forEach(node => {
        if (node.type === "JSXElement" && node.openingElement) {
            jsxElement.children.push(getJSXElements(node, importVarNameToSourceMap))
        }
    })

    return jsxElement;
}

function getReturnedJSX(declaration) {
    const isSingleExpresssion = declaration.init.body.type !== "BlockStatement"
    if (isSingleExpresssion) {
        return declaration.init.body
    } else {
        let node = null
        declaration.init.body.body.forEach(statement => {
            if (statement.type === "ReturnStatement") {
                statement.argument.type.includes('JSX') && (node = statement.argument)
            }
        })
        return node
    }
}