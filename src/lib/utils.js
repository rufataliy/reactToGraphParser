const traverse = require('@babel/traverse').default;
const resolve = require("resolve");
const path = require("path");
const fs = require('fs');
const { parse } = require('@babel/parser')

function addExtensions(ast, file) {
    if (runPassedChecks(file)) {
        traverse(ast, {
            ImportDeclaration(importPath) {
                const { value } = importPath.node.source;
                const resolvedPath = resolve.sync(value, {
                    basedir: path.dirname(file),
                    moduleDirectory: ['node_modules', '@types'],
                    extensions: ['.ts', '.tsx', '.js', '.jsx', ".d.ts"],
                });
                importPath.node.source.value = resolvedPath;
            }
        })
    }
}

function runPassedChecks(filename) {
    const extname = path.extname(filename);

    const hasFailed = filename.includes("node_modules") ||
        !['.jsx', '.tsx'].includes(path.extname(filename)) ||
        extname === '.css' || extname === '.svg'

    return !hasFailed

}

function parseAst(filename) {
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

    return ast
}

function getDefaultExportImportBindings(ast, componentsWithFile, importVarNameToSourceMap, processedFiles) {
    traverse(ast, {
        ImportDeclaration(incomingPath) {
            const defaultSpecifier = incomingPath.node.specifiers.find(
                (specifier) => ["ImportDefaultSpecifier", "ImportNamespaceSpecifier"].includes(specifier.type)
            );

            const namedSpecifier = incomingPath.node.specifiers.find(
                (specifier) => ["ImportSpecifier"].includes(specifier.type)
            );

            if (defaultSpecifier) {
                let originalName = null;
                const varName = defaultSpecifier.local.name;
                componentsWithFile[incomingPath.node.source.value] && componentsWithFile[incomingPath.node.source.value].children.forEach(node => {
                    if (node.isDefaultExport) {
                        originalName = node.name
                    }
                })
                importVarNameToSourceMap[varName] = { source: incomingPath.node.source.value, isDefaultExport: true, pointsTo: originalName }
            }
            if (namedSpecifier) {
                const varName = namedSpecifier.local.name;
                importVarNameToSourceMap[varName] = { source: incomingPath.node.source.value, isDefaultExport: false }
            }

            const dependencyPath = incomingPath.node.source.value;
            if (dependencyPath.startsWith('.')) {
                // Resolve the relative path of the dependency
                const dependencyFilename = path.resolve(path.dirname(filename), `${dependencyPath}`);
                !processedFiles.has(dependencyFilename) && processedFiles.add(dependencyFilename)
                // processModule(dependencyFilename, processedFiles, components);
            } else {
                // Resolve the absolute path of the Node module
                const dependencyFilename = require.resolve(dependencyPath);
                !processedFiles.has(dependencyFilename) && processedFiles.add(dependencyFilename)
                // processModule(dependencyFilename, processedFiles, components);
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
}

function getJsxTreeForFromDeclaration(declaration) {
    const tree = {}
    if (declaration.init && declaration.init.type === 'ArrowFunctionExpression' && declaration.id.name[0] === declaration.id.name[0].toUpperCase()) {
        const componentName = declaration.id.name
        const rootJsx = getReturnedJSX(declaration)
        tree[componentName] = { children: [] }

        if (rootJsx) {

            if (rootJsx.type === "JSXFragment") {
                rootJsx.children.forEach(child => {
                    if (child.type === "JSXElement" && child.openingElement) {
                        tree[componentName].children.push(getJSXElements(child))
                    }
                })
            }
            if (rootJsx.type === 'JSXElement') {
                tree[componentName].children.push(getJSXElements(rootJsx))
            }
        }
    }
    return tree
}


function getJsxTreeForFromFunctionDeclaration(node, importVarNameToSourceMap) {
    const tree = {}
    const componentName = node.id.name
    const rootJsx = getReturnedJSXFromBlockBody(node)

    tree[componentName] = { children: [] }
    if (rootJsx) {

        if (rootJsx.type === "JSXFragment") {
            rootJsx.children.forEach(child => {
                if (child.type === "JSXElement" && child.openingElement) {
                    tree[componentName].children.push(getJSXElements(child, importVarNameToSourceMap))
                }
            })
        }
        if (rootJsx.type === 'JSXElement') {
            tree[componentName].children.push(getJSXElements(rootJsx, importVarNameToSourceMap))
        }
    }

    return tree
}

function getJSXElements(node) {
    let jsxElement = {}
    const nodeName = node.openingElement.name.name
    jsxElement = { name: nodeName, children: [] };
    node.children.forEach(node => {
        if (node.type === "JSXElement" && node.openingElement) {
            jsxElement.children.push(getJSXElements(node))
        }
    })

    return jsxElement;
}

function getReturnedJSX(declaration) {
    const isSingleExpresssion = declaration.init.body.type !== "BlockStatement"
    if (isSingleExpresssion) {
        return declaration.init.body
    } else {
        // let node = null
        // declaration.init.body.body.forEach(statement => {
        //     if (statement.type === "ReturnStatement") {
        //         statement.argument.type.includes('JSX') && (node = statement.argument)
        //     }
        // })
        // return node
        return getReturnedJSXFromBlockBody(declaration.init)
    }
}

function getReturnedJSXFromBlockBody(node) {
    let jsxRoot = null
    node.body.body.forEach(statement => {
        if (statement.type === "ReturnStatement") {
            statement.argument.type.includes('JSX') && (jsxRoot = statement.argument)
        }
    })
    return jsxRoot
}

function mergeReactComponentChidren(tree){
    const rootFile = "C:\\Users\\RUALI\\projects\\react-to-graph\\src\\simpleReactComponents\\FunctionDeclaration\\Component.tsx"
    for(const component in tree[rootFile].components){
        tree[rootFile].components[component].children.forEach((child)=>{
            const childSource = tree[rootFile].imports[child.name]?.source
            const childSourceComponentName = tree[rootFile].imports[child.name]?.pointsTo
            const children = tree[childSource] && tree[childSource].components[childSourceComponentName].children
            children && child.children.push(...children)
        })
    }
    // tree[root].components?.children.forEach(child=>{

    // })
}

module.exports = {
    parseAst,
    getDefaultExportImportBindings,
    getJsxTreeForFromDeclaration,
    getJsxTreeForFromFunctionDeclaration,
    addExtensions,
    runPassedChecks,
    mergeReactComponentChidren
}