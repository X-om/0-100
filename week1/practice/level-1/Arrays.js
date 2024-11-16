const arr = [1,2,3,4,5];

console.log(arr);

arr.push(6);
console.log(arr);

arr.unshift(0);
console.log(arr);

arr.pop()
arr.shift();
console.log(arr)


// iterate on array

for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    console.log(element);   
}


function logit(str){
    console.log(str + " is a string");
}
arr.forEach(logit)


// merge to arrays
let arr2 = [6,7,8,9,0];
let arr3 = arr.concat(arr2);
console.log(arr3);
