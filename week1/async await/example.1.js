function omAsyncFunc(){
    const p = new Promise(function(resolve){
        setTimeout(function(){
            resolve("Hi my name is om");
        }, 3000);
    });
    return p;
}

async function main(){
    const value = await omAsyncFunc();
    console.log(value);
}

main();

console.log("something will print after 3 seconds ! ");