const names = ["Om","Asmita","Swapnil","Pooja","Shital","Atul"];

for(let i = 0; i < names.length; i++){
    console.log(names[i]);
}


console.log("\n\n\n");

// printing odds from array

let ages = [11,12,22,33,21,23,54,34,67];

for(let i = 0; i < ages.length; i++){
    if(ages[i] % 2 != 0){
        console.log(ages[i]);
    }
}


// print biggest number in array

let max = Number.MIN_SAFE_INTEGER;
for(let i = 0; i < ages.length; i++){
    if(max < ages[i]){
        max = ages[i];
    }
}



console.log("The oldest person is : " + max);


for (let index = 0; index < ages.length; index++) {
    console.log(ages[index]);
}

console.log("\n\nReersing an array");

let n = ages.length / 2;
let i = 0;
let j = ages.length - 1;

while(i <= j){
    let temp = ages[i];
    ages[i] = ages[j];
    ages[j] = temp;

    i++;
    j--;
}

for (let index = 0; index < ages.length; index++) {
    console.log(ages[index]);
}