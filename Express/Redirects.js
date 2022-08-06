const express = require('express');

//setting an express app
const app = express();



//listen for requests 
app.listen(3000);


//sending get request 
app.get('/', (req,res)=>{
    
    //res.send('<h1>First Express App </h1>');
    //pass absolute path of file else there will be error. second arg if relative pathh
    res.sendFile("./assets/index.html",{root:__dirname})

});

app.get('/about', (req,res)=>{
    res.sendFile("./assets/about.html" , {root:__dirname})
});

app.get('/home' ,(req,res)=>{
    res.sendFile("./assets/home.html", {root:__dirname});
})


app.get('/about-us', (req,res)=>{
    res.redirect('/about');
});

//Redirects to about page
app.get('/about',(req,res)=>{
    res.sendFile("./assets/about.html" , {root:__dirname});
})

//sending to errror page if url not matches
//Using Use Middleware function
app.use((req,res)=>{
    res.sendFile("./assets/404.html" , {root:__dirname});
})
