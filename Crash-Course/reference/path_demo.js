//discussing Path module of node


const path = require('path');

//basename 
console.log( "File name : " + path.basename(__filename));

console.log("Directory name : " + path.dirname(__filename));

console.log("File Extension : " + path.extname(__filename));


//concatanate path -> creating path in current directory with folder test and file hello
console.log(path.join(__dirname, 'test' , 'hello'));