const express = require("express");
const cors = require("cors");


const app = express();
const port = 3000;

app.use(cors());
app.get("/sum" ,function(req,res){
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);

    const ans = a + b;
    res.send(ans.toString());
});

app.get("/intrest",function(req,res){
    const princinpal = parseFloat(req.query.princinpal);
    const rate = parseFloat(req.query.rate);
    const time = parseFloat(req.query.time);

    const simpleIntrest = (princinpal * rate * time)/100;

    res.send(simpleIntrest.toString());
});

app.listen(port , ()=>{
    console.log(`Server running on port ${port}`);
});