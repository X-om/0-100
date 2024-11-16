console.log("Hello World");

const a = 10
console.log(a); 




const fName = "Om";
const lName = "Argade";

let gender = "Male"


if(gender == "Male"){
    console.log("Hello Mr",fName,lName,"! Nice to meet you");
}
else if(gender == "Female"){ 
    console.log("Hello Mrs",fName,lName,"! Nice to meet you");
}


// program that counts from 0 to 1000
console.log("\n\n\n")

let ans = 0
for(let count = 1; count <= 100; count++){
    ans += count;
}
console.log("ans is "+ans)


// Variables

var b = 10;
console.log(b)

b = 20

console.log(b)


const c = 100
console.log(c)

 // c = 200 -- > throws an error
console.log(c)


// Data Types

let Name = "Om";
let age = 22;
let isMarried = false;
let weight = 62.12;

console.log("The Name is " + Name);
console.log("The Age is " + age);
console.log("The weight is " + weight);

if(isMarried == true){
    console.log(Name + " is Married");
} else { 
    console.log(Name + " is not Married");
}


// Arrays in javascript

let names = ["Om","swapnil","pooja","Yudha","basri","Asmita"];

console.log("The first persion is at index 0 =>")
console.log(names[0]);


console.log("\n\n\n\n");


for(let i = 0; i < names.length; i++){
    console.log(names[i]);
}
