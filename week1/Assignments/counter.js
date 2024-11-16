
let count = 0;

const counter  = setInterval(() => {
    console.log(count);
    count++;

    if(count > 5)
            clearInterval(counter);
}, 1000);