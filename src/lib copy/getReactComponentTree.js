const traverse = require('@babel/traverse').default;
const { getJsxTreeForFromDeclaration, getJsxTreeForFromFunctionDeclaration } = require('./utils')

export function getReactComponentTree(ast, tree = {}) {
    traverse(ast, {
        FunctionDeclaration(path) {
            if (path.node.id && path.node.id.name[0] === path.node.id.name[0].toUpperCase()) {
                const componentTree = getJsxTreeForFromFunctionDeclaration(path.node)
                tree = { ...tree, ...componentTree }

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

