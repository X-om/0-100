const mongoose = require("mongoose");
const express = require("express");
const zod = require("zod");
const jwt = require("jsonwebtoken");
const jwtPassword = "Om@1032230472";

const app = express();
const port = 3000;
app.use(express.json());


const zSchema1 = zod.object({
    name : zod.string().min(2,"name is requerd !"),
    username : zod.string().min(2,"username is requred").regex(/^\S*$/ ,"username must not contain any space"),
    password : zod.string().min(8,"password must contain 8 characters !"),
    email : zod.string().email("Invalid email address")
})
const zSchema2 = zod.object({
    email : zod.string().email("Invalid email !"),
    password : zod.string().min(8,"password must be 8 characters !")
});



mongoose.connect("mongodb+srv://om:Om%401032230472@cluster0.dwoqx.mongodb.net/week3")
.then(()=>{
    console.log("connection successfull !");
}).catch((err)=>{
    console.log(err);
});

const schema = mongoose.Schema({
    name : String,
    username : String,
    password : String,
    email : String
});
const users = mongoose.model('users' , schema);

function inputValidateForCreateUser(req,res,next){
    const result = zSchema1.safeParse(req.body);
    if(!result.success){
        return res.status(411).send(result.error.errors.map(err => err.message));
    }
    next();
}
function inputValidateForSignIn(req,res,next){
    const result = zSchema2.safeParse(req.body);
    if(!result.success){
        return res.status(411).send(result.error.errors.map(err => err.message));
    }
    next();
}   

async function userExist(email){
    return await users.findOne({email:email});
}

app.post("/create-user", inputValidateForCreateUser, async function(req,res){
    const name = req.body.name;
    const username = req.body.username;
    const password = req.body.password;
    const email = req.body.email;
    
    if(await userExist(email)){
        return res.status(411).send("user already exist !");
    }

    const newUser = new users({
        name : name,
        username : username,
        password : password,
        email : email
    });

    newUser.save();
    res.send("user created successfully !");
});

app.post("/signin",inputValidateForSignIn,async function(req,res){
    const email = req.body.email;
    const password = req.body.password;

    if(!await userExist(email)){
        return res.status(411).send("user does not exist !"); 
    }
    const token = jwt.sign({email : email , password : password}, jwtPassword);
    res.json({
        token
    })
});


app.get("/users",async function(req,res){
    try{
        const token = req.headers.authorization;
        const data = jwt.verify(token, jwtPassword);
        const EMAIL = data.email;

        const userList = await users.find({email : {$ne : EMAIL }} , 'name');
        res.json(
            userList
        );
    } catch(error){
        res.status(500).send("Error retriving errors " + error.message);
    }
});
app.listen(port);