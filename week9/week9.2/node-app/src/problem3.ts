function checkAdult(age : number) : boolean{
    if(age >= 18) { 
        return true;
    }
    return false;
}


const ageStatus : boolean = checkAdult(22);
console.log(`i am ${ageStatus ? "Adult" : "Minor"}`); 