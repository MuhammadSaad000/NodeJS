const http = require("http");

//creating server
const server = http.createServer((request,response)=>{
    if(request.url==='/')
    {
        response.end("This is homepage");
    }
    if(request.url==='/about')
    {
        //blocking code example 
        //below is synchronus code which blocks due to loop 
        for(vari=0;i<1000;i++)
        {
            for(var j=0;j<1000 ;j++ )
            {
                console.log(`${i} ,  ${j}`);
            }
        }
        response.end("This is About page");
    }
    response.end("Error Page");

})

//first is port number,second is cl  
server.listen(5000,()=>{
    console.log("Server is listeningX on Port:5000....");
})


