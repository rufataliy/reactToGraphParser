const fs = require('fs');
const path = require('path');
const { parse } = require('@babel/parser');
const traverse = require('@babel/traverse').default;
const resolve = require("resolve");
const { getJsxTreeForFromDeclaration, getJsxTreeForFromFunctionDeclaration } = require('./utils')
// Gets list of all react components mapped to their source file names
// TODO: assept ast as paramenter instead of parsing file with babel.
export function getReactComponentTree(filename, processedFiles = new Set(), importVarNameToSourceMap, tree = {}) {
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
        FunctionDeclaration(path) {
            if (path.node.id && path.node.id.name[0] === path.node.id.name[0].toUpperCase()) {
                const componentTree = getJsxTreeForFromFunctionDeclaration(path.node, importVarNameToSourceMap)
                tree = { ...tree, ...componentTree }
                
            }
        },
        VariableDeclaration(path) {
            path.node.declarations.forEach(declaration => {
                const componentTree = getJsxTreeForFromDeclaration(declaration, importVarNameToSourceMap)
                tree = { ...tree, ...componentTree }
            });
        },
    })

    // Recursively process all the dependencies of the module
    traverse(ast, {
        // ImportDeclaration(incomingPath) {
        //     const dependencyPath = incomingPath.node.source.value;
        //     if (dependencyPath.startsWith('.')) {
        //         // Resolve the relative path of the dependency
        //         const dependencyFilename = path.resolve(path.dirname(filename), `${dependencyPath}`);
        //         getReactComponentTree(dependencyFilename, processedFiles, importVarNameToSourceMap, tree);
        //     } else {
        //         // Resolve the absolute path of the Node module
        //         const dependencyFilename = require.resolve(dependencyPath);
        //         getReactComponentTree(dependencyFilename, processedFiles, importVarNameToSourceMap, tree);
        //     }
        // },
    });
    return tree
}

module.exports.getReactComponentTree = getReactComponentTree

