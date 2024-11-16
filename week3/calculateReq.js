const express = require("express");
const port = 3000;
const app = express();

let reqNumber = 0;

function counterMiddleware(req,res,next){
        reqNumber++;
        req.no = reqNumber;
        next();
}

app.use(counterMiddleware);

app.get("/" , function(req,res){
    // do something 
    res.send(`Request Number ${req.no} is  Responded !`);
})

app.listen(port);
