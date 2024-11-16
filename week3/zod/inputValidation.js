const express = require("express");
const zod = require("zod");

const app = express();
const port = 3000;



// exprexted input of array of numbers , max size of array 2
const schema = zod.array(zod.number()).max(2);

app.use(express.json());
app.post("/",function(req,res){
    const kidney = req.body.kidney;
    const response  = schema.safeParse(kidney);
    if(!response.success){
        res.send(response);
    }   
    else{
        res.send({
            data : response
        })
    }
});

app.listen(port);