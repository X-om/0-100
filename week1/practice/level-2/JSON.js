//creating an object
const obj = {
    name : "Om Vikas Argade",
    age : 22,
    kill : 1323,
    saves : 122,
    longShots : 873,
    role : "Front Assult / snipper",
    squad : "Alpha div A",
    command : "Leader",
    members : 8,
    ranked : 1
}

console.log(obj);
console.log("\n\n\n\n");

// accessing obj values by keys
console.log("officer name : " +obj.name);
console.log("age : " + obj.age);
console.log("Total kills : " + obj.kill);
console.log("total saves : " + obj.saves);
console.log("long shot kills : " + obj.longShots);
console.log("Roling as : " + obj.role);
console.log("squad : " + obj.squad);
console.log("commanding as : " + obj.command);
console.log("members in squad : " + obj.members);
console.log("squad is ranked at no " + obj.ranked + " world !");


//converting this object to JSON = ( javascript Object Notaion )

const newObj = JSON.stringify(obj);
console.log("\n\n\n");
console.log(newObj); // now you can not access values by keys

console.log(newObj["name"]) // undefined

// to conver an JSON obj to normal obj

const obj3 = JSON.parse(newObj);
console.log("\n\n\n\n");
console.log(obj3);

