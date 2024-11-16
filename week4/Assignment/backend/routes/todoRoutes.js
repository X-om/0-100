const express = require("express");
const router =  express.Router();
const Todo = require("/Users/om/Desktop/Desktop Files/0-100/week4/Assignment/backend/models/todoModel.js");
const { authMiddleware } = require("/Users/om/Desktop/Desktop Files/0-100/week4/Assignment/backend/middleware/authMiddleware.js");

router.use(express.json());

router.get("/getdata",authMiddleware, async function(req,res){
    try{
        const todos = await Todo.find({userId : req.user._id});
        res.json(todos)
    }catch(error){
        res.status(500).json({error : "Failed to fetch todos"});
    }
});

router.post("/add" , authMiddleware , async function(req,res){
    const task  = req.body;
    try{
        const newTodo = new Todo({
            userId : req.user._id,
            title : task.title,
            note : task.note,
            reminder : task.reminder
        });

        await newTodo.save();
        res.json(newTodo);

    } catch(error){
        res.status(500).json({error : "Failed To Create To Do "});
    }
});



// const express = require('express');
// const router = express.Router();
// const Todo = require('/Users/om/Desktop/Desktop Files/0-100/week4/Assignment/backend/models/todoModel.js');
// const { authMiddleware } = require('/Users/om/Desktop/Desktop Files/0-100/week4/Assignment/backend/middleware/authMiddleware.js');

// router.get('/', authMiddleware, async (req, res) => {
//     try {
//       const todos = await Todo.find({ userId: req.user._id });
//       res.json(todos);
//     } catch (err) {
//       res.status(500).json({ error: "Failed to fetch todos" });
//     }
// });

// router.post('/', authMiddleware, async (req, res) => {
//     const { task } = req.body;
//     try {
//       const newTodo = new Todo({
//         userId: req.user._id,
//         task,
//         completed: false
//       });
//       await newTodo.save();
//       res.json(newTodo);
//     } catch (err) {
//       res.status(500).json({ error: "Failed to create todo" });
//     }
// });

// router.put('/:id', authMiddleware, async (req, res) => {
//     const { id } = req.params;
//     const { task, completed } = req.body;
//     try {
//       const updatedTodo = await Todo.findByIdAndUpdate(id, { task, completed }, { new: true });
//       res.json(updatedTodo);
//     } catch (err) {
//       res.status(500).json({ error: "Failed to update todo" });
//     }
// });

// router.delete('/:id', authMiddleware, async (req, res) => {
//     const { id } = req.params;
//     try {
//       await Todo.findByIdAndDelete(id);
//       res.json({ msg: "Todo deleted" });
//     } catch (err) {
//       res.status(500).json({ error: "Failed to delete todo" });
//     }
// });

module.exports = router;

