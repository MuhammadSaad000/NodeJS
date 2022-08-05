//creating server 


const http = require('http');
const fs = require("fs");

//code running in server not in browser
const server = http.createServer((req,res)=>{
    //Response Header 
    //set header content type
    res.setHeader("Content-Type", 'text/html');
   
    let path = "./assets/";
    switch(req.url){
        case '/':
            path+="index.html";
            break;
        case "/home":
            path+="home.html";
            break;
        case "/about":
            path+="about.html";
            break;
        default:
            path+="404.html";
            break;
    }


    //sending html file 
    fs.readFile(path ,(err,data)=>{
        if(err)
            console.log(err);
        else 
            //res.write(data)
        res.end(data);
    })
    
});

server.listen(5000, "localhost", ()=>{
    console.log("S");
});