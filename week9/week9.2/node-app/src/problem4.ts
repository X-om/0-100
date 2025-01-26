function delayFunction(callback : () => string) {
    setTimeout(()=>{
        const value : string = callback();
        console.log(value);
    },3000)
}


delayFunction(()=>{
    console.log("Hello there");
    return "Hello Guyes";
})