
//Status Codes 
//100 -- Informational resources
//200 -- Everything is OK with req
//301 -- Resources were relocated
//404 -- Not Found
//500 -- server error code

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
            res.statusCode = 200
            break;
        case "/home":
            path+="home.html";
            res.statusCode = 200
            break;
        case "/about":
            path+="about.html";
            res.statusCode = 200;
            res.end();
            break;
        case "/about-me":
            res.statusCode = 301
            res.setHeader("Location" , "/about");
            res.end();
            break;
        default:
            path+="404.html";
            res.statusCode = 400
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
