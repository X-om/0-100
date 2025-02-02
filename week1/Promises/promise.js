import fs from "fs";

function asyncFunc() {
    return new Promise((resolve) => {
        fs.readFile("../a.txt", "utf-8", (err, data) => {
            resolve(data);
        });
    })
}

let a = asyncFunc();

console.log(a);

a.then((value) => {
    console.log(value);
    console.log(a);
})

console.log("Hello world");
console.log("Hello world");
console.log("Hello world");
console.log("Hello world");



