// learning express.js lib which is used for HTTP request 

const express = require("express");

// we use body parser to read the body from the request
const bodyParser = require("body-parser");

// epress() function return object of express class
const app = express();

// --- 
app.use(bodyParser.json());


// this is the port number we provide if i change it to 5000 i have to check response on localhost:5500
// some of the port numbers are already in use
const port = 3001;

// first this request get response
app.get('/',function(req,res){

    // this is the response being send in just a string format
    res.send("Hello world !");

});


// second this request get response
app.get("/dev.porn-hub",function(req,res){
    
    console.log(req.headers);

    // this is the respose being send as ab JSON file by using .json method on res 
    res.json({
        "name" : "Om Argde",
        "Age" : "22",
        "Learning" : "Full Stack dev"
    });
})



// Handling post request
app.post("/conversations",function(req,res){
    console.log("Body : ");
    const data = req.body;
    console.log(data); 
    res.send({
        msg : "2 + 2 = 4"
    });
});


// this function actualy sends all the resposes and receives all the requests 
app.listen(port,function(){
    console.log(`The response is running on port localhost:${port}`)
});


