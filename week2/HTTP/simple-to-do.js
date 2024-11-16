const express = require("express");

const app = express();
const port = 3000

class history{
    constructor(msg,date,time){
        this.msg = msg;
        this.date = date;
        this.time = time;
    }
}

const database = [];
app.use(express.json());


app.get("/simple-to-do",(req,res)=>{
    const {msg,date,time} = req.body;

    if(!msg || !date || !time){
        return res.status(400).send("Invalid request ! missing msg , date , time");
    }
    console.log(date);
    const targetTime = new Date(`${date} ${time}`);
    console.log(targetTime);
    const now = new Date();
    console.log(now);
    const delay = targetTime - now;
    console.log(delay);
    if(delay > 0){
        setTimeout(() => {
            const data = new history(msg,date,time);

            database.push(data);
            res.send(`<h1>Reminder : </h1> ${msg}`);
        }, delay);
    }else{
        res.send("The time has already passed !");
    }
})

// this route shows the history of successfull to do registers whoch has been resolved
app.get("/get-history" , (req,res)=>{
    res.send(database);
})


app.listen(port,()=>{
    console.log(`The server is running on http://localhost:${port}`);
})


const date = new Date();

console.log(date.getHours() + " " + date.getMinutes()+ " " + date.getSeconds());