// const Person = require("./person")

// const Person1 = new Person("Wood" ,32);
// Person1.sayHello();


//obtaining logger from reference folder 
// const Logger = require('./logger');

// const logger = new Logger();

// logger.on("message" , data =>{
//     console.log(`Called Listener `, data);
// });

// logger.log("HELLO World");


const http = require('http');
const path = require('path');
const fs = require('fs');

const server = http.createServer((req,res) => {
    console.log(req.url);
    if(req.url == '/')
    {
        fs.readFile(__dirname , "public", "index.html"), (err,content) =>{
            if(err) throw err;
            res.writeHead(200, {'Content-Type' : "text/html"});
            res.end(content);
        }

    }
});

const PORT = process.env.PORT || 4000;

server.listen(PORT, ()=>{
    console.log(`Server running on ${PORT} `);
})