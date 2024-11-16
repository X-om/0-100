const fs = require("fs");

function readFile1(){
    fs.readFile("/Users/om/Desktop/Desktop Files/0-100/week1/a.txt", "utf-8", (err,data)=>{
        console.log(data);
    })
}

function writeFile1(){
    fs.writeFile("/Users/om/Desktop/Desktop Files/0-100/week1/a.txt", "Hello Bhai",(err)=>{
        console.log("File has been written");
    })
}


readFile1();
readFile1();



let a = 0;
for(let i = 0; a < 100000000; i++){
    a += 1000;
    console.log(a);
}

readFile1();

a = 0;
for(let i = 0; a < 100000000; i++){
    a += 1000;
    console.log(a);
}
a = 0;
for(let i = 0; a < 100000000; i++){
    a += 1000;
    console.log(a);
}
writeFile1();
readFile1();



