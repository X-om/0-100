const express = require("express");
const port = 3000;

const app = express();
app.use(express.json());


function calculateRequests(req,res,next){
    const n = req.query.n;
    let fact = 0;
    for(let i = 0; i <= n; i++){
        fact += i;
    }
    req.fact = fact;
    next();
}

function calculateSquare(req,res,next){
    const m = req.query.m;
    req.square = m * m;
    next();
}
app.get("/",calculateRequests,calculateSquare,function (req, res){
    const factorial = req.fact;
    const square = req.square;
    
    
    res.send(`The factorial is ${factorial} and the square is ${square}`); 
    
})


app.listen(port,function(){
    console.log(`Go to port number ${port}`);
})
