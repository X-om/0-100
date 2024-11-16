const { clearInterval } = require("timers");

function wait(n){
    return new Promise(function(resolve){
        setTimeout(()=>{
            resolve("Hello World");
        },n);
    })
}


wait(5000).then((value)=>{
    console.log(value);
});


let i  = 1;
setInterval(()=>{
    if(i <= 10){
        console.log(i);
        i++;
    } else{
        clearInterval;
    }
},1000);