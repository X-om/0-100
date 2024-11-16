

function printKeys(obj){
    const keys = Object.keys(obj);
    console.log(keys);

    const values = Object.values(obj);
    console.log(values);

    const keyVal = Object.entries(obj);
    console.log(keyVal);

    const status = Object.hasOwnProperty("kills");
    console.log(status);

    const newObj = Object.assign({},obj, {kills : 122 , role : "sniper"});
    return newObj;
}




const obj = { 
    name : "om",
    age : 22,
    gender : "male"
}

const newObj = printKeys(obj);
console.log(newObj);

