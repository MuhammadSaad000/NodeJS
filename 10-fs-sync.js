//array destructuring --> getting only those methods which are required
const {readFileSync,writeFileSync} = require('fs');


//reading file 

const first = readFileSync('./content.txt','utf-8');
const second = readFileSync('./generic/test.txt','utf-8');

console.log(first, second);


writeFileSync(
    './generic/newfile.txt', 
    `This is written to the file : ${first} , ${second} `,
    {flag:'a'}
)