//creating server 

//returning HTML Page to client browser 
const http = require('http');
const fs = require("fs");

//code running in server not in browser
const server = http.createServer((req,res)=>{
    //Response Header 
    //set header content type
    console.log(req.url + req.method);
    
    res.setHeader("Content-Type", 'text/html');
   
    //sending html file 
    fs.readFile("./assets/index.html" ,(err,data)=>{
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