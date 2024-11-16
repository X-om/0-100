const express = require("express");
const zod = require("zod");

const app = express();
app.use(express.json());
const port = 3000;

const schema = zod.object({ 
    email : zod.string(),
    password : zod.string(),
    country : zod.literal("IN").or(zod.literal("US")),
    kidney : zod.array(zod.number()).max(2)
})


app.get("/",function(req,res){
    const response = schema.safeParse(req.body);
    if(!response.success){
        res.send(response);
    }
    else{
        res.send(`Every thing was good ${response}`)
    }
})

app.listen(port);