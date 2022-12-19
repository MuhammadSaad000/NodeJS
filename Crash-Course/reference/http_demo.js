const http = require('http');

const myServer = http.createServer((req,res)=>{
    res.write("Hello world ");
    res.end();
});

myServer.listen(4000 ,()=> console.log("Server running on Port 4000 "));
