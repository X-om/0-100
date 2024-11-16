const express = require("express");
const port = 3000;
const app = express();

let totalProcessingTime = 0;
let requestCount = 0;

function requestTime(req,res,next){
    const requestTime = Date.now();
    req.requestTime = requestTime;
    console.log(`request came !`);
    next();
}
function actualLogic(req,res,next){
    setTimeout(function(){
        req.n = 100;
        next();
    },3000);
}
app.get("/" , requestTime , actualLogic,function(req, res){
    const requestTime = req.requestTime;
    const processingTime = Date.now() - requestTime; 
    totalProcessingTime += processingTime;
    requestCount++;
    const Average  = ((totalProcessingTime/requestCount)/1000).toFixed(2);

    res.send(`Average time taken to respond is ${Average} Seconds`)
});


app.listen(port);
