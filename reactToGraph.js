const fs = require('fs');
const path = require('path');
const traverse = require('@babel/traverse').default;
const {addExtensions, runPassedChecks, parseAst} = require('./utils')
const getAllComponents = require('./getAllComponents')
const entryPoint = process.argv[2];
const resolvedEntryPoint = path.resolve(entryPoint);
// const componentTree = {}
const importVarNameToSourceMap = {}
const componentsWithFile = getAllComponents(resolvedEntryPoint)

function processModule(filename, processedFiles = new Set()) {
  // const extname = path.extname(filename);
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
        componentsWithFile[incomingPath.node.source.value] && componentsWithFile[incomingPath.node.source.value].children.forEach(node => {
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
        processModule(dependencyFilename, processedFiles);
      } else {
        // Resolve the absolute path of the Node module
        const dependencyFilename = require.resolve(dependencyPath);
        processModule(dependencyFilename, processedFiles);
      }
    },
    ExportDefaultDeclaration(path) {
      const defaultDeclaration = path.node.declaration;
      componentsWithFile[filename].children.forEach(node => {
        if (node.name === defaultDeclaration.name) {
          node.isDefaultExport = true
        }
      })
      // if (defaultDeclaration.type === 'Identifier') {
      //   // Default export is referencing a previously declared variable
      //   // Here, we can assume that the variable name is the same as the file name
      //   var defaultExportSource = './' + path.hub.file.opts.filename;
      // } else if (defaultDeclaration.type === 'FunctionDeclaration' ||
      //            defaultDeclaration.type === 'ClassDeclaration') {
      //   // Default export is a function or a class
      //   var defaultExportSource = path.hub.file.opts.filename;
      // } else {
      //   // Default export is an expression or an object
      //   // Here, we can assume that the default export is defined in the same file as the export statement
      //   var defaultExportSource = './' + path.hub.file.opts.filename;
      // }
    },

  });

  // Traverse the AST and find all the JSX elements
  // const fileName = path.basename(filename, path.extname(filename))
  // traverse(ast, {
  //   JSXElement(nodePath) {
  //     if (isReactComponent(nodePath.node)) {
  //       const name = nodePath.node.openingElement.name.name
  //       const varSource = importVarNameToSourceMap[name]
  //       let originalName = name
  //       if (varSource.isDefaultExport) {
  //         componentsWithFile[varSource.source].children.forEach(node => {
  //           if (node.isDefaultExport) {
  //             originalName = node.name
  //           }
  //         })
  //       }
  //       if (!componentTree.Root) {
  //         componentTree.Root = { children: [], props: [] }
  //         componentTree.Root.source = filename
  //       }
  //       if (filename === resolvedEntryPoint) {
  //         componentTree.Root.children.push(originalName)
  //         componentTree.Root.props = nodePath.node.openingElement.attributes.reduce((propsObj, attr) => {
  //           const propName = attr.name.name;
  //           const propValue = attr.value.expression ? attr.value.expression.value : attr.value.value;
  //           propsObj[propName] = propValue;
  //           return propsObj;
  //         }, []);
  //       } else {
  //         const key = originalName || fileName
  //         if (!componentTree[fileName]) {
  //           componentTree[fileName] = { children: [], props: [] }
  //         }
  //         componentTree[fileName].source = filename
  //         componentTree[fileName].children.push(key)
  //         // componentTree[fileName].props = nodePath.node.openingElement.attributes.reduce((propsObj, attr) => {
  //         //   const propName = attr.name.name;
  //         //   const propValue = attr.value.expression ? attr.value.expression.value : attr.value.value;
  //         //   propsObj[propName] = propValue;
  //         //   return propsObj;
  //         // }, []);
  //       }
  //       // const key = originalName || fileName
  //       //   if (!componentTree[fileName]) {
  //       //     componentTree[fileName] = { children: [], props: [] }
  //       //   }
  //       //   componentTree[fileName].source = filename
  //       //   componentTree[fileName].children.push(originalName)
  //       // console.log("**************")
  //       // console.log(`Found JSX element: ${name}`);
  //       // // console.log(`File name: ${filename}`);
  //       // //  findParentComponent(path)
  //       // console.log("**************")
  //       // if (filename === resolvedEntryPoint) {
  //       //   currentNode.children.push({ name, children: [], props: [] })
  //       //   console.log(currentNode)
  //       // } else {
  //       //   const current = currentNode.children.find(child => child.name === path.basename(filename, path.extname(filename)))
  //       //   console.log("CURRENT", current)
  //       // }



  //     }

  //   },
  // });

}

// Get the entry point filename from the command-line arguments


// Resolve the entry point filename to an absolute path

// Process the entire component tree starting from the entry point file
processModule(resolvedEntryPoint);
console.log("Imported var name to filename")
console.log(importVarNameToSourceMap)

console.log("Original components to filename")
console.log(componentsWithFile)

// fs.writeFileSync("file.json", JSON.stringify(componentsWithFile))
















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
