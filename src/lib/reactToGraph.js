const fs = require('fs');
const path = require('path');
const traverse = require('@babel/traverse').default;
const {addExtensions, runPassedChecks, parseAst} = require('./utils')
// const getAllComponents = require('./getAllComponents')
const getReactComponentTree = require('./getReactComponentTree')

// const entryPoint = process.argv[2];
// const resolvedEntryPoint = path.resolve(entryPoint);
// const componentTree = {}

// const componentsWithFile = getAllComponents(resolvedEntryPoint)

export function getVarBindingToOriginalVarNames(filename, processedFiles = new Set(), componentsWithFile) {
  // const extname = path.extname(filename);
  const importVarNameToSourceMap = {}
  if(!runPassedChecks(filename, processedFiles)){
    return
  }

  processedFiles.add(filename);

  // Check if the file is a CSS or SVG file and skip it if it is

  // Read the file and parse it as a TypeScript React module
  const ast = parseAst(filename)

  addExtensions(ast, filename)


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
        componentsWithFile[incomingPath.node.source.value] && componentsWithFile[incomingPath.node.source.value].components.forEach(node => {
          if (node.isDefaultExport) {
            originalName = node.name
          }
        })
        importVarNameToSourceMap[varName] = { source: incomingPath.node.source.value, isDefaultExport: true, pointsTo:originalName }
      }
      if (namedSpecifier) {
        const varName = namedSpecifier.local.name;
        importVarNameToSourceMap[varName] = { source: incomingPath.node.source.value, isDefaultExport: false }
      }

      const dependencyPath = incomingPath.node.source.value;
      if (dependencyPath.startsWith('.')) {
        // Resolve the relative path of the dependency
        const dependencyFilename = path.resolve(path.dirname(filename), `${dependencyPath}`);
        getVarBindingToOriginalVarNames(dependencyFilename, processedFiles, importVarNameToSourceMap);
      } else {
        // Resolve the absolute path of the Node module
        const dependencyFilename = require.resolve(dependencyPath);
        getVarBindingToOriginalVarNames(dependencyFilename, processedFiles, importVarNameToSourceMap);
      }
    },
    ExportDefaultDeclaration(path) {
      const defaultDeclaration = path.node.declaration;
      if(componentsWithFile[filename]){
        componentsWithFile[filename].components.forEach(node => {
          if (node.name === defaultDeclaration.name) {
            node.isDefaultExport = true
          }
        })
      }
    },

  });

  return importVarNameToSourceMap
}

// Get the entry point filename from the command-line arguments


// Resolve the entry point filename to an absolute path

// Process the entire component tree starting from the entry point file
// processModule(resolvedEntryPoint);
// const tree = getReactComponentTree(resolvedEntryPoint,new Set(), importVarNameToSourceMap )
// console.log("Component tree")
// console.log(tree)

// console.log("Imported var name to filename")
// console.log(importVarNameToSourceMap)

// console.log("Original components to filename")
// console.log(componentsWithFile)

// fs.writeFileSync("importVarNameToSourceMap.json", JSON.stringify(importVarNameToSourceMap))
// fs.writeFileSync("componentsWithFile.json", JSON.stringify(componentsWithFile))
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
