//any code that runs between getting response and sending request

//get runs only for get request 



//use runs for every request

//View Engines are used for showing dynamic data in webpages

const express = require('express');

//morgan==3rd party middleware



//register view engine in app



//setting an express app
const app = express();

app.set("view engine","ejs");


//listen for requests 
app.listen(3000);


//
app.use((req,res, next)=>{
    console.log("New request made");
    console.log("host : ", req.hostname);
    console.log("path : ", req.path);
    console.log("method : ", req.method);
    next();
})

app.use((req,res, next)=>{
    console.log("In the next middleware....");
    next();
})


//sending get request 
app.get('/', (req,res)=>{ 
    //second parameter is data we are sending to view 
    
   //passing dummy data in form of JSON Array
   const blogs = [
    {title:"Blog 1 ", snippet : "Lorem Ipsum Dolor  sit"},
    {title:"Blog 2 ", snippet : "Lorem Ipsum Dolor  sit"},
    {title:"Blog 3 ", snippet : "Lorem Ipsum Dolor  sit"},
 ]
    
    res.render("index", {title:"Homepage", blogs  });

});

app.get('/about', (req,res)=>{
    res.render("about" , {title:"AboutUs"});
});

app.get("/blogs/create" , (req,res)=>{
    res.render("create", {title:"Create Blog"} );

})

//middleware function
//should be at bottom
app.use((req,res)=>{
    res.render("404",{title:"404"})
})

 