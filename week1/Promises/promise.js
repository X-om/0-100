const fs = require("fs");

function asyncFunc(){
    return new Promise(function(resolve){
        fs.readFile("week1/a.txt", "utf-8", function(err,data){
            resolve(data);
        });
    }) 
}
let a = asyncFunc();

console.log(a);

a.then(function(value){
    console.log(value);
    console.log(a);
}); 

console.log("Hello world");
console.log("Hello world");
console.log("Hello world");
console.log("Hello world");



