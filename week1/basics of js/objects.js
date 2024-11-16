// create a object for a person

let person = {
    fName : "Om",
    lName : "Argade",
    gender : "Male",
    age : 22,
    educationInfo : {
        collageName : "MIT WPU",
        course : "BTech CSE",
        year : "Third year"
    },
    partner : "Amita"
};

// accessing a persons data from object 

console.log(person.fName);
console.log(person.lName);
console.log(person.gender);
console.log(person.age);
console.log(person.educationInfo.collageName);
console.log(person.educationInfo.course);
console.log(person.educationInfo.year);
console.log(person.partner);

console.log("\n\n\n\n\n");
console.log("Creating array of objects : ");
// creating an arrays of objects

let user1 = {
    firstName : "Om",
    lastName : "Argade",
    age : 22
}

let user2 = {
    firstName : "pooja",
    lastName : "Argade",
    age : 27
}

let user3 = {
    firstName : "Asmita",
    lastName : "Argade",
    age : 21
}


let allUsers = new Array();
allUsers.push(user1);
allUsers.push(user2);
allUsers.push(user3);

for(let i = 0; i < allUsers.length; i++){
    console.log("user "+ (i+1));
    for(let key in allUsers[i]){
        console.log(key + " : " + allUsers[i][key]);
    }
    console.log("\n\n");
    
}

console.log("\n\n\n");
// creating an empty object 
console.log("created empty object Car then assigned keys : values ! \n");
const car = new Object();
car.brand = "TATA";
car.modelName = "Harrier";
car.model = "Adventure Plus +Dark";
car.transmission = "Manual";
car.price = 2223999;

Object.keys(car).forEach(key => { 
    console.log(key + " : " + car[key]);
});

console.log("\n\n\n");
// object to JSON
console.log("coverting an car object to JSON object : \n");
let newCar = JSON.stringify(car);
console.log(newCar);



console.log("\n\n\n");
// JSON to objet
console.log("coverting an JSON object to object : \n");
let newCar2 = JSON.parse(newCar);
console.log(newCar2);