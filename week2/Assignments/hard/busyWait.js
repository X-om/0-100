function busyWait(miliseconds){
    const start = Date.now();

    while(Date.now() - start < miliseconds){

    }
}


busyWait(5000);

console.log("Hello World");