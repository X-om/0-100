// counter without using setInterval



function printNumber(currentNumber){
    console.log(currentNumber);
    
    if(currentNumber < 30){
        setTimeout(()=>{
            printNumber(currentNumber+1);
        }, 1000);
    }
}

printNumber(0);
