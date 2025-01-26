interface User {
    firstName : string ,
    lastName : string,
    age : number
};


function isLeagal(user : User) : boolean {
    if(user.age > 18){
        return true;
    }
    return false;
}

const user1 : User  = {
    firstName : "om",
    lastName : "Argade",
    age : 21
}


console.log(isLeagal(user1)) ;