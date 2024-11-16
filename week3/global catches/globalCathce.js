const express = require("express");
const port = 3000;
const app = express();

app.use(express.json());

app.post("/",function(req,res){
    const kidney = req.body.kidney;
    const kidneyLength = kidney.length;
    res.send(`you have ${kidneyLength} kidney`);
})
app.use(function(err,req,res,next){
    res.json({
        "msg" : "something is up with the server !"
    });
})
app.listen(port);