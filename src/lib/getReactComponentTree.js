const traverse = require('@babel/traverse').default;

const { getJsxTreeForFromDeclaration, getJsxTreeForFromFunctionDeclaration } = require('./utils')
// Gets list of all react components mapped to their source file names
// TODO: assept ast as paramenter instead of parsing file with babel.
function getReactComponentTree(ast, file) {
    let tree = {}
    traverse(ast, {
        FunctionDeclaration(path) {
            if (path.node.id && path.node.id.name[0] === path.node.id.name[0].toUpperCase()) {
                const componentTree = getJsxTreeForFromFunctionDeclaration(path.node)
                tree = { ...tree,...componentTree }
                
            }
        },
        VariableDeclaration(path) {
            path.node.declarations.forEach(declaration => {
                const componentTree = getJsxTreeForFromDeclaration(declaration)
                tree = { ...tree, ...componentTree }
            });
        },
    })

    return tree
}

module.exports.getReactComponentTree = getReactComponentTree

