//View Engines are used for showing dynamic data in webpages

const express = require('express');
const morgan = require('morgan');

//morgan==3rd party middleware


//setting an express app
const app = express();

app.set("view engine","ejs");


//listen for requests 
app.listen(3000);

//static files 
//public images 
///access files from browser
//express.static("folder name ")
//anything inside the folder name public will be accessible from browser
app.use(express.static("public"))

//using 3rd party middleware 
app.use(morgan('dev'));



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

 