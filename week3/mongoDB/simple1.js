const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://om:Om%401032230472@cluster0.dwoqx.mongodb.net/tests")
.then(function(){
    console.log("connection successfull")
}).catch((err)=>{
    console.log(err);
});

const schema = mongoose.Schema({
    name : String,
    username : String,
    password : String,
    email : String
});

const user = mongoose.model('users',schema);

const newUser = new user({
    name : "Om Argade",
    username : "the_om.argade",
    password : "12345678",
    email : "omargade1234@gmail.com"
});


newUser.save();




