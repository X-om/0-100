// given an array , return me back an new array in with every value is multiplied by 2 
const arr = [1,2,3,4,5];

// userDefine solution
const newArr = [];
for(let i = 0; i < arr.length; i++){
    newArr.push(arr[i] * 2);
}
console.log(newArr);

// preDefine solutions 

function transform(i){
    return i*3;
}


const newArr2 = arr.map(transform);
console.log(newArr2);



// Assignment create 