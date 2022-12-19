const fs = require('fs');
const path = require('path');

//create a folder 
// fs.mkdir(path.join(__dirname, "/test") , {} , (err) => {
//     if(err)
//     throw err;
//     console.log("Folder created ");
// });


//create and write to file 

// fs.writeFile(path.join(__dirname, "/test", "file.txt") , "Hello written to the file using node js " , (err) => {
//     if(err)
//     throw err;
//     console.log("written to file ");

//     //append is async
//     fs.appendFile(path.join(__dirname , "/test", "file.txt") , "New Text appended to file " , (err) => {
//         if (err)
//         throw err;
//         console.log("Appended to file successfully ");
//     });
// });



//read to file

fs.readFile(path.join(__dirname , "/test" ,"file.txt" ) ,  "utf-8" , (err,data)=>{
    if (err) throw err;
    console.log(data);
});


fs.rename(path.join(__dirname, "/test", "file.txt") , 
    path.join(__dirname, "/test", "newname.txt" ) , 
    (err) =>  {if (err) throw err} , 
    console.log("File renamed")
)


