const express = require('express');
const cors = require('cors');
const app = express();
const port = 8000;

app.use(express.json());
app.use(cors());


const titles = [
    "Exploring the Universe: A Journey Through Space",
    "Mastering JavaScript: Tips and Tricks",
    "The Art of Minimalist Living",
    "Understanding Artificial Intelligence",
    "The Ultimate Guide to Healthy Eating",
    "Top Travel Destinations of 2024",
    "Beginner's Guide to Photography",
    "Financial Freedom: How to Invest Wisely",
    "Secrets of Successful Entrepreneurs",
    "Learning Python: From Basics to Advanced"
];

const descriptions = [
    "Discover the vastness of space and the mysteries of the universe in this captivating journey through the stars.",
    "A comprehensive guide to mastering JavaScript, covering essential tips, tricks, and best practices.",
    "Learn how to live a fulfilling life with less through the principles of minimalism and simplicity.",
    "An insightful introduction to artificial intelligence, its applications, and its impact on the future.",
    "Explore the essentials of a balanced diet and how to create a sustainable and healthy eating plan.",
    "Uncover the top travel destinations for 2024, from exotic beaches to cultural cityscapes.",
    "A beginner-friendly guide to photography, covering camera basics, techniques, and creative tips.",
    "Your path to financial freedom starts here—learn about investment strategies for long-term wealth.",
    "Discover the habits and strategies of successful entrepreneurs and how to apply them to your life.",
    "Start your coding journey with Python, with clear explanations from beginner to advanced concepts."
];

function generateTodos(){
    let n = Math.floor(Math.random() * 10);  
    let todos = [];

    for(let i = 0; i < n; i++){
        
        let obj = { 
            id : i,
            title : titles[i],
            description : descriptions[i]
        };

        todos.push(obj);
    }

    return todos;
}


app.get('/todos',(req,res)=>{
    const todo = generateTodos();
    res.json(todo);
})


app.get('/income',(req,res)=>{
    console.log('request came');
    const obj = {
        income : '10,00,000'
    };
    res.json(obj);
});

app.listen(port,function(){
    console.log(`server is running on port ${port}`);
})