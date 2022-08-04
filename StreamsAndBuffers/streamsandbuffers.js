//Streams and Buffers 

//start using data before it is loaded completely 
const fs = require("fs");

const readStream = fs.createReadStream('./assets/block.txt',{encoding:'utf-8'} );

const writeStream = fs.createWriteStream('./assets/block1.txt');

//readstream.on is an event listener chunk == chunk/portion of data
readStream.on("data" , (chunk)=>{
    console.log("\n------NEW CHUNK------\n");
    console.log(chunk.toString());
    writeStream.write("\n---New Chunk----\n");
    writeStream.write(chunk);


})


