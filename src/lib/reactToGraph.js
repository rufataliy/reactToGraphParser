const fs = require('fs');
const path = require('path');
const traverse = require('@babel/traverse').default;
const { addExtensions, runPassedChecks, parseAst, mergeReactComponentChidren } = require('./utils')
const { getAllComponentsFromFile } = require('./getAllComponents')
const { getReactComponentTree } = require('./getReactComponentTree')
const files = require('../../.files.json')
const resolve = require('resolve')
// const entryPoint = process.argv[2];
// const resolvedEntryPoint = path.resolve(entryPoint);
// const componentTree = {}

// const componentsWithFile = getAllComponents(resolvedEntryPoint)

function getVarBindingToOriginalVarNames(ast, fileDetails) {
  // const extname = path.extname(filename);
  const importVarNameToSourceMap = {}
  // Recursively process all the dependencies of the module
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
        fileDetails[incomingPath.node.source.value] && fileDetails[incomingPath.node.source.value].exports.forEach(node => {
          if (node.default) {
            originalName = node.name
          }
        })
        importVarNameToSourceMap[varName] = { source: incomingPath.node.source.value, isDefaultExport: true, pointsTo: originalName }
      }
      if (namedSpecifier) {
        const localname = namedSpecifier.local.name;
        const importedname = namedSpecifier.imported.name
        importVarNameToSourceMap[importedname] = { source: incomingPath.node.source.value, isDefaultExport: false, importedAs: localname }
      }
    },
  });
  return importVarNameToSourceMap
}

let fileDetails = {}
files.forEach(file=>{
  const ast = parseAst(file)
  fileDetails = {...fileDetails, [file]: { exports:[...getAllComponentsFromFile(ast)]}}
  })

files.forEach(file => {
  if(runPassedChecks(file)){
    const ast = parseAst(file)
    addExtensions(ast, file)

    const imports = getVarBindingToOriginalVarNames(ast, fileDetails)
    const components = getReactComponentTree(ast)
    fileDetails[file] = {...fileDetails[file], imports, components }
  }
})

mergeReactComponentChidren(fileDetails)

// files.forEach(file => {
//   if(runPassedChecks(file)){
//     const ast = parseAst(file)
//     console.log(file)
//     addExtensions(ast, file)
//     runPassedChecks(file)
//     const exports = getAllComponentsFromFile(ast)
//     const imports = getVarBindingToOriginalVarNames(ast, exports)
//     const components = getReactComponentTree(ast)
//     fileDetails[file] = { exports, imports, components }
//   }
// })

fs.writeFileSync("fileDetails.json", JSON.stringify(fileDetails))
// Get the entry point filename from the command-line arguments


// Resolve the entry point filename to an absolute path

// Process the entire component tree starting from the entry point file
// const tree = getReactComponentTree(resolvedEntryPoint,new Set(), importVarNameToSourceMap )
// console.log("Component tree")
// console.log(tree)

// console.log("Imported var name to filename")
// console.log(importVarNameToSourceMap)

// console.log("Original components to filename")
// console.log(componentsWithFile)

// fs.writeFileSync("importVarNameToSourceMap.json", JSON.stringify(varBindings))
// fs.writeFileSync("componentsWithFile.json", JSON.stringify(fileExports))
// fs.writeFileSync("tree.json", JSON.stringify(tree))
















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
