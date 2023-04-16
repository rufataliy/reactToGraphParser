const fs = require('fs');
const path = require('path');

const [_exe, _script, ...rest] = process.argv

const [entryDir] = rest.map(arg=>{
  if(arg.includes("--dir")){
    return arg.replace("--dir=","")
  }
}).filter(item=>!!item)

function getFilesWithExtension(ext, dir = entryDir, files = []) {
  const directory = path.resolve(dir)
  const filesInDir = fs.readdirSync(directory);
  filesInDir.forEach(file => {
    const filePath = path.join(dir, file);
    const fieExt = path.extname(file)
    const fileName = filePath.replace(ext, "")
    if (fs.statSync(filePath).isDirectory()) {
      getFilesWithExtension(ext, filePath, files);
    } else if (ext.includes(fieExt) && !fileName.includes('.test')) {
      files.push(path.resolve(filePath));
    }
  });
  return files;
}

const files = getFilesWithExtension(['.jsx', '.tsx']);
console.log(files)
fs.writeFileSync('.files.json', JSON.stringify(files))
