// get current date
const currentDate = new Date();
console.log(currentDate);


const day = currentDate.getDay();
const month = currentDate.getMonth();
const Year = currentDate.getFullYear();
const hour = currentDate.getHours();
const minuts = currentDate.getMinutes();
const seconds = currentDate.getSeconds();

console.log(day);
console.log(month);
console.log(Year);
console.log(hour);
console.log(minuts);
console.log(seconds);

// creating a clock

function clock(){
    const now = new Date();
    const hour = now.getHours();
    const minuts = now.getMinutes();
    const seconds = now.getSeconds();
    console.clear();
    console.log(hour + "-" + minuts + "-" + seconds);
    setTimeout(clock,1000);
}



clock();