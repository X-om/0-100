const express = require("express");
const port = 3002;

function calculateFactorial(n){
    let ans = 0;
    for(let i = 1; i <= n; i++){
        ans += i;
    }
    return ans;
}

const app = express();

app.get("/",(req,res)=>{
    const n = req.query.n;
    const ans = calculateFactorial(n);
    res.send(ans.toString());
})


app.listen(port);