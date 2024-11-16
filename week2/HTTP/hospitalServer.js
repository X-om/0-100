const express = require("express");
const port = 3000;
const app = express();
app.use(express.json());

class User{
    constructor(info){
        this.name = info.name;
        this.id = info.id;
        this.password = info.password;
        this.kidnies = info.kidnies;
    }

    checkKidneys(){
        let numOfKidnies = this.kidnies.length;
        let noOfHealthyKidnies = 0;

        for(let i = 0; i < numOfKidnies; i++){
            if(this.kidnies[i] == "healthy"){
                noOfHealthyKidnies++;
            }
        }
        let noOfUnhealthyKidnies = numOfKidnies - noOfHealthyKidnies;
        return {
            numOfKidnies,
            noOfHealthyKidnies,
            noOfUnhealthyKidnies
        }
    }
    addNewKidney(){
        if(this.kidnies.length < 2){
            let newKidney = "healthy";
            this.kidnies.push(newKidney);
            return "Done !";
        }
        return "you already have 2 kidnies !";
    }
    replaceKidney(){
        const kidneyInfo = this.checkKidneys();
        if(kidneyInfo.noOfUnhealthyKidnies > 0 || kidneyInfo.numOfKidnies == 0){
            const index = this.kidnies.indexOf("unhealthy");
            this.kidnies.splice(index,1);
            this.kidnies.push("healthy");
            return "Done !";
        }
        else{
            return "you have all healthy kidnies";
        }  
    }
    removeKidney(){
        const kidneyInfo = this.checkKidneys();
        if(kidneyInfo.noOfUnhealthyKidnies > 0){
            const index = this.kidnies.indexOf("unhealthy");
            this.kidnies.splice(index,1);
            return "Done !";
        }
        return "There is no unhealthy kidney to remove";
    }
    
}

const users = [];

app.get("/create-user",function(req,res){
    console.log("GET /create-user request came");
    const info = req.body;
    console.log(info);
    const userInstance = new User(info);
    users.push(userInstance);
    res.send("Created a user !");
})

app.get("/",function(req,res){
    console.log("GET / request came");
    const userId = req.body.id;
    const userPassword = req.body.password;
    const user = users.find(u => u.id === userId);
    if(user && user.password === userPassword){
        const result = user.checkKidneys();
        res.send(`  number of kidnies : ${result.numOfKidnies}  
                    number of healthy kidnies : ${result.noOfHealthyKidnies} 
                    number of unhealthy kidnies : ${result.noOfUnhealthyKidnies}`);
    } else{
        res.status(404).send("User is not found or password is incorrect");
    }
});

app.post("/",function(req,res){
    console.log("POST / request came");
    const userId = req.body.id;
    const userPassword = req.body.password;
    
    const user = users.find(u => u.id === userId);
    if(user && user.password === userPassword){
            const result = user.addNewKidney();
            res.send(result);
    } else{
        res.status(404).send("User is not found or password is incorrect");
    }
});

app.put("/",function(req,res){
    console.log("PUT / request came");
    const userId = req.body.id;
    const userPassword = req.body.password;
    const user = users.find(u => u.id === userId);
    if(user && user.password === userPassword){
        const result = user.replaceKidney();
        res.send(result);
    } else{
    res.status(404).send("User is not found or password is incorrect");
    }
});

app.delete("/",function(req,res){
    console.log("DELETE / request came");
    const userId = req.body.id;
    const userPassword = req.body.password;
    const user = users.find(u => u.id === userId);
    if(user && user.password === userPassword){
        const result = user.removeKidney();
        res.send(result);
    } else{
    res.status(404).send("User is not found or password is incorrect");
    }
})



app.get("/get-users" , function(req,res){
    const numOfUsers = users.length;
    let result = [];

    users.forEach(user =>{
        let ans = user.name + " " + user.id;
        result.push(ans);
    })
    
    res.send(result);
})


app.listen(port,()=>{
    console.log(`The server is listning to port no ${port}`);
});
