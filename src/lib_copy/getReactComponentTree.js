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
    const varBindings = {source:{}}
    traverse(ast, {
        ImportNamespaceSpecifier(path) {
            const importedName = path.node.local.name
            const source = path.parent.source.value
            if(!varBindings.source[source]){
                varBindings.source[source] = [importedName]
                console.log(source)
            } else {
                varBindings.source[source].push(importedName)
                // varBindings[importedName] = v
            }
        },
        ImportSpecifier(path) {
            const importedAs = path.node.local.name;
            const importName = path.node.imported.name;
            varBindings[importedAs] = importName
        }
    })
    
    for(const key in varBindings.source){
        varBindings.source[key].sort((a,b)=>a.length -b.length)
        varBindings.source[key].forEach(name => {
            varBindings[name] = varBindings.source[key][0]
        })
    }
    return varBindings
}

module.exports.getReactComponentTree = getReactComponentTree
const ast = parseAst('C:/Users/RUALI/projects/react-to-graph/out.tsx')
// const ast = parseAst('C:/Users/RUALI/projects/react-to-graph/src/index.tsx')

const varBindings = getVarBindings(ast)
const tree = getReactComponentTree(ast, {}, varBindings)
// console.log(tree)
fs.writeFileSync('./tree.json', JSON.stringify(tree))
fs.writeFileSync('./varBindings.json', JSON.stringify(varBindings))
fs.writeFileSync('./ast.json', JSON.stringify(ast))
