// A website which has 2 endpoints -

// 1
// POST /signin
// Body - {
// username: string
// password: string
// }
// Returns a json web token with username encrypted

// 2
// GET /users
// Headers -
// Authorization header
// Returns an array of all users if user is signed in (token is correct)
// Returns 403 status code if not

const express = require("express");
const jwt = require("jsonwebtoken");
const jwtPassword = "Om@asmita2208/2506";   // secret key this should be stored securly in secret management service or enviroment variable

const port = 3000;
const app = express();
app.use(express.json());


const ALL_USERS = [
    {
        username : "omargade1234@gmail.com",
        password : "Om@1032230472",
        name : "OM ARGADE"
    },
    {
        username : "asmitadeore25@gmail.com",
        password : "#omista2208",
        name : "Asmita Deore"
    },
    {
        username : "sunitaargade@gmail.com",
        password : "mahakal@11",
        name : "Sunita Argade"
    },
    {
        username : "vikasargade7@gmail.com",
        password : "shivay@11",
        name : "Vikas Argade"
    },
    {
        username : "shitalargade19@gmail.com", 
        password : "jayhanuman",
        name : "Shital Argade"
    }
];

function validateUser(username,password){
    const user = ALL_USERS.find(user => user.username === username && user.password === password);
    return user;
}


app.post("/signup",function(req,res,next){
    const username = req.body.username;
    const password = req.body.password;

    const user = validateUser(username, password);
    if(!user){
        return res.status(411).json({
            "error" : "user does not exist !"
        });
    } 
    const token = jwt.sign({username : username},jwtPassword);
    return res.json({
        token
    })
});

app.get("/users",function(req,res){
    try{
        const token = req.headers.authorization;
        const decoded = jwt.verify(token,jwtPassword);
        const username = decoded.username;
        res.json({
            users : ALL_USERS.filter(function(value){
                if(value.username == username){
                    return false;
                } else{
                    return true;
                }
            })
        })
    } catch(err){
        res.json({
            "error" : "Invalid token"
        })
    } 
});

app.listen(port);


