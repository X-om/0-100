function printName10(name){
    for(let i = 0; i < 10; i++){
        console.log(name);
    }
}

setTimeout(printName10,3*1000,"om");    // predefine async function
console.log("Hello world , this is my name 10 times after 3 sec : ");
