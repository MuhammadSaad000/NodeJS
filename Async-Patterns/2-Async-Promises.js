const {readFile, read} = require('fs');

const getText = (path) =>{
    return new Promise((resolve,reject)=>{
        readFile(path,'utf-8',(error,data)=>{
            if(error)
            {
                reject(error);
            }else{
                resolve(data);
            }
        })
    })
}

getText("./generic/newfile.txt").then((result)=>console.log(result)).catch((err)=>{console.log(err);})