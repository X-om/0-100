const express = require("express");
const cors = require("cors");

const app = express();
const port = 3000;

app.use(cors());


const titles = [
    "Organize Desk and Workspace",
    "Complete the React Project",
    "Plan Grocery Shopping List",
    "Update Personal Budget Spreadsheet",
    "Prepare for Team Meeting",
    "Schedule Doctor Appointment",
    "Clean Out Email Inbox",
    "Brainstorm Blog Post Ideas",
    "Fix Bugs in Todo Application",
    "Research Vacation Destinations"
];
const descriptions = [
    "Sort through papers, declutter the desk, and arrange stationery in the drawers.",
    "Finalize the components, fix state management issues, and deploy the app.",
    "List down essentials like vegetables, fruits, dairy, and cleaning supplies for the week.",
    "Add last month's expenses, categorize spending, and set savings goals.",
    "Draft the agenda, review progress on tasks, and prepare slides for presentation.",
    "Call the clinic and book a slot for next week’s check-up in the afternoon.",
    "Delete spam emails, respond to pending messages, and organize folders for work and personal mail.",
    "Think of creative topics related to tech, productivity, or lifestyle for the next blog post.",
    "Debug the filter function, resolve state update issues, and test for edge cases.",
    "Look up reviews, check accommodation options, and list down activities for a week-long trip."
];

let todos = [];


for(let i = 0; i < 10; i++){
    todos.push({
        id : i+1,
        title : titles[i],
        description : descriptions[i]
    });
}

// function generateTodos(req,res,next){
//     const numOfTodos = Math.floor(Math.random() * 10) + 1;
//     let todos = [];

//     for(let i = 0; i < numOfTodos; i++){
//         todos.push(
//             {
//                 "id" : i+1,
//                 "title" : titles[i],
//                 "description" : descriptions[i]
//             }
//         )
//     }

//     const state =  todos;
//     req.state = state;
//     next();
// }
// app.use(generateTodos);

function returnTodoForId(req,res,next){
    const id = req.query.id -1;
    if(!id && id != 0){
        return res.send("please send an id");
    }
    const todo = todos[id];
    req.todo = todo;
    next();
}

app.get("/todos",returnTodoForId,function(req,res){
    console.log('request came')
    const todo = req.todo;
    res.json(todo);    
});


app.listen(port);