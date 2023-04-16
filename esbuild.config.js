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
const myPlugin = {
  name: "test",
  setup(build) {
    // build.onResolve({ filter: modulePathFilter }, (args) => ({
    //   path: args.path,
    //   namespace: PLUGIN_NAME,
    // }));

    build.onLoad({ filter: /.*/, namespace: "react" }, (args) => {
      // eslint-disable-next-line total-functions/no-unsafe-type-assertion
      // const modulePath = args.path as T;
      // const moduleInfo = normalizeModuleInfo(getModuleInfo(modulePath));
      // return { contents: createContents(moduleInfo) };
      console.log(args)
    });
  },
};

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
    '*.svg',
    '*.ts',
    '*.js',
    '*.json',
    '*constants.tsx'
  ],
  jsx: "preserve",
  minifySyntax: false,
  packages: 'external',
})