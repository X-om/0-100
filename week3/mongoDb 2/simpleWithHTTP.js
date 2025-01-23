const mongoose = require("mongoose");
const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

mongoose.connect("mongodb+srv://om:Om%401032230472@cluster0.dwoqx.mongodb.net/tests")
.then(()=>{
    console.log("connection successfull !");
}).catch((err)=>{
    console.log(err);
});

const schema = mongoose.Schema({
    name: String,
    username: String,
    password: String,
    email: String
});

const user = mongoose.model('users', schema);

app.post("/signup", async function (req, res) {
    const name = req.body.name;
    const username = req.body.username;
    const password = req.body.password;
    const email = req.body.email;

    const emailExist = await user.findOne({ email: email });
    if (emailExist) {
        return res.status(411).json({
            "msg": "user already exist !"
        })
    }
    
    const newUser = new user({
        name: name,
        username: username,
        password: password,
        email: email
    });
    newUser.save();
    res.send("User created !");

});

app.listen(port);

