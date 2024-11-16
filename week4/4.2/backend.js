const express = require("express");
const cors = require("cors");

const app = express();
const port = 3000;

app.use(cors());

let state;


function generateTodos(req,res,next){
    const numOfTodos = Math.floor(Math.random() * 10);
    let todos = [];

    for(let i = 0; i < numOfTodos; i++){
        todos.push(
            {
                "id" : i,
                "note" : `note ${i}`,
            }
        )
    }

    state = { todos };
    next();
}
app.use(generateTodos);

app.get("/todos",function(req,res){
    res.json(state);    
});


app.listen(port);