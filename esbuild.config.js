const esbuild = require('esbuild')
const [exe, script, ...rest] = process.argv
const fs = require('fs')
const { parse } = require('@babel/parser');

const [entry] = rest.map(arg=>{
  if(arg.includes("--entry")){
    return arg.replace("--entry=","")
  }
})

const pluginDedupeImports = () => ({
  name: "dedupe-imports",
  setup(build) {
    const importMap = new Map();
    build.onLoad({ filter: /\.(js|jsx|ts|tsx)$/ }, async (args) => {
      const source =  fs.readFile(args.path, "utf8", ()=>{});
      const { ast } = parse(source, {
        sourceType: "module",
        plugins: ["jsx", "typescript"],
      });
      traverse(ast, {
        ImportDeclaration(path) {
          const importPath = path.node.source.value;
          if (importMap.has(importPath)) {
            importMap.get(importPath).push(path.node);
          } else {
            importMap.set(importPath, [path.node]);
          }
        },
      });
      return { contents: source };
    });
    build.onEnd(() => {
      for (const [importPath, importNodes] of importMap.entries()) {
        if (importNodes.length > 1) {
          console.log(`Duplicated import of module '${importPath}':`);
          for (const importNode of importNodes) {
            console.log(` - ${importNode.loc.start.line}:${importNode.loc.start.column}`);
          }
        }
      }
    });
  },
});

esbuild.build({
  entryPoints: [entry],
  bundle: true,
  target:'esnext',
  outfile: 'out.jsx',
  format: "esm",
  external: [
    'node_modules/*',
    '*.scss',
    '*.css',
    '*.png',
    '*.svg'
  ],
  jsx: "preserve",
  minifySyntax: false,
  packages: 'external',
  keepNames: true,
  plugins:[pluginDedupeImports()]
  
})