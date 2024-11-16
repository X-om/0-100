const startTime = performance.now();

setTimeout(() => {
    const endTime = performance.now();
    let timeTaken = endTime - startTime;
    console.log("The total time taken is " + timeTaken);
}, 3000);