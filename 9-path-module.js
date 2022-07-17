const path = require("path");

//path.sep path separator
console.log(path.sep);

const filePath = path.join('/tutorial','/generic' ,'test.txt');

console.log(filePath);

const base = path.basename(filePath);
console.log(base);

const absolute = path.resolve(__dirname);
console.log(absolute);

const absoluteX = path.resolve(__filename)
console.log(absoluteX);