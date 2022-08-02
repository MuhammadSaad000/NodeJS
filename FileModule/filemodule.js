const fs = require('fs');

// //reading files
// fs.readFile("./contents/file.txt" , (err,data) => {
//     if(err)
//     {
//         console.log(err);
//     }
//     else
//         //using toString to convert buffer to String
//         console.log(data.toString());
// })


// fs.writeFile('./contents/file.txt', "Hello World in File.txt" , ()=>{
//     console.log("written to file");
// })


//creating a directory
fs.mkdir("./assets" ,(err)=>{
    if(err){
        console.log(err)
    }
    else
        console.log("Folder created")
} )

//check if directory doesnt exists create it else delete it

// if(!fs.existsSync('./assets')){
//     fs.mkdir("./assets", (err)=>{
//         if(err)
//         {
//             console.log(err)
//         }
//         else 
//             console.log("Folder created")
//     })
// }else{
//     fs.rmdir('./assets', (err)=>{
//         if(err){
//             console.log(err)
//         }
//         else
//             console.log("folder deleted");
//     })
// }



//delete file in NODE
// if (fs.existsSync('./contents/file.txt')){  
//     fs.unlink('./contents/file.txt',(err)=>{
//         if(err)
//         {
//             console.log(err)
//         }
//         else 
//             console.log("File deleted ")
//     })

// }