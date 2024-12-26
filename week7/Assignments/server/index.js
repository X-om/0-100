const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const req = require('express/lib/request');

mongoose.connect('mongodb+srv://om:Om%401032230472@cluster0.dwoqx.mongodb.net/week7').then(()=>{
        console.log('connection successfull');
    }).catch((err)=>{
        console.log(`connection faild ${err}`);
});

const todoSchema = new mongoose.Schema({
    title : {
        type : String,
        required : true
    },
    description : {
        type : String,
        required : true
    }
});

const Todo = mongoose.model('Todo',todoSchema);

const app = express();
const port = 3000;


app.use(express.json());
app.use(cors());

app.post('/savetodos',async (req,res)=>{
    console.log('req recieveed');
    const {title, description} = req.body;

    const newTodo = new Todo({
        title,
        description
    })
    
    try{
        await newTodo.save();
        res.json("todo saved successfully !");
    }catch(err){
        res.status(500).json('there is a error while saving todos');
    }
})


app.get('/gettodos',async (req,res)=>{
    try{
        const todos = await Todo.find();
        res.json(todos);
    }catch(error){
        res.status(500).json({"error" : `error while getting todos ${error}`});
    }    
});


function notificationsGenerator(req,res,next){
    const networkCount = Math.floor(Math.random() * 201)
    const jobsCount = Math.floor(Math.random() * 101)
    const messagingCount = Math.floor(Math.random() * 201)
    const notificationCount = Math.floor(Math.random() * 201)

    const allNotification = {
        networkCount,
        jobsCount,
        messagingCount,
        notificationCount
    }

    req.Notifications = allNotification;

    next();

}


app.get('/notifications',notificationsGenerator,(req,res)=>{
    const allNotification = req.Notifications;
    console.log(allNotification);
    res.json(allNotification);
})

app.listen(port,()=>{
    console.log(`listening on port number ${port}`);
})