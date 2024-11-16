function pad(number){
    return number.toString().padStart(2,'0');
}

function displayClock(){
    const now = new Date();
    const hours = pad(now.getHours());
    const minuts = pad(now.getMinutes());
    const seconds = pad(now.getSeconds());

    const timeString = hours.toString() + ":" + minuts.toString() + ":" + seconds.toString()  

    console.clear();
    console.log(timeString);
    
    setTimeout(displayClock,1000);
}   

displayClock();