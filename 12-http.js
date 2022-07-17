const http = require('http')

const server = http.createServer((request,response)=>{

    if(request.url === '/')
    {
        response.end("Hello ye hamari node app ka homepage h g");
    }
    if (request.url === '/about')
    {
        response.end("Hello this is about page of our application ")
    }
    
       
    response.end();
})

server.listen(5000);