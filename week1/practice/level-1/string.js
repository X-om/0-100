// geting length
function getLength(str){
    console.log("The original string : " + str);
    console.log("length : " + str.length);
}

getLength("Hello World");

console.log("\n\n");

// get the index of word
function getIndex(str , target){
    console.log("original string : " + str);
    console.log("appeared at index : " + str.indexOf(target)); // str.lastIndexOf(target) -> to get the last word index if similar words appear
}

getIndex("Om Vikas Argade", "Vikas") // if not present -1

console.log("\n\n");
// slice the string
function getSlice(str,start,end){
    console.log("Original string : " + str);
    let sliced = str.slice(start,end);
    console.log(sliced)
}

getSlice("Om Asmita Argade", 3, 16)

console.log("\n\n");
// Replacing a string

function replaceString(str , target , newWord){
    console.log("Original String : " + str);
    console.log("Target is : " + target);
    console.log("Replace with : " + newWord);
    let ans = str.replace(target,newWord);
    console.log("New String is : " + ans);
}

replaceString("Hello World", "World", "Om");

console.log("\n\n");


// split string into an array according to delemeter

function spiltString(str,delimeter){
    console.log("Original string : " + str);
    const ans = str.split(delimeter);
    console.log(ans);
}

spiltString("Hi#My#Name#is#om", "#");

console.log("\n\n");

// trim the extra spaces from beginning and the end
function trimString(str){
    console.log("Original string is : " + str);
    console.log(str.trim());
}

trimString("    Om Argace   "); 


// toUpper and toLower
function toUpandLow(str){
    console.log("Original string : " + str);
    console.log("To Upper case : " + str.toUpperCase());
    console.log("To Lower case : " + str.toLowerCase());
}

toUpandLow("Hi my Name IS OM aRgade");