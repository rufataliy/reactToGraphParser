const traverse = require('@babel/traverse').default;
const { getJsxTreeForFromDeclaration, getJsxTreeForFromFunctionDeclaration, parseAst } = require('./utils')
const fs = require("fs")

function getReactComponentTree(ast, tree = {}, varBindings) {
    traverse(ast, {
        FunctionDeclaration(path) {
            if (path.node.id && path.node.id.name[0] === path.node.id.name[0].toUpperCase()) {
                const componentTree = getJsxTreeForFromFunctionDeclaration(path.node, varBindings)
                tree = { ...tree, ...componentTree }

            }
        },
        VariableDeclaration(path) {
            path.node.declarations.forEach(declaration => {
                const componentTree = getJsxTreeForFromDeclaration(declaration, varBindings)
                tree = { ...tree, ...componentTree }
            });
        },
    })
    return tree
}

function getVarBindings(ast) {
    const varBindings = {}
    traverse(ast, {
        ImportSpecifier(path) {
            importedAs = path.node.local.name;
            importName = path.node.imported.name;
            varBindings[importedAs] = importName
        },
    })
    return varBindings
}
module.exports.getReactComponentTree = getReactComponentTree
const ast = parseAst('C:/Users/RUALI/projects/react-to-graph/out.jsx')

const varBindings = getVarBindings(ast)
const tree = getReactComponentTree(ast, {}, varBindings)
// console.log(tree)
fs.writeFileSync('./tree.json', JSON.stringify(tree))
