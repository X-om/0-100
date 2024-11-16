// fnTocall is a call back function
function sum(num1 , num2 , fnTocall){
    let ans = num1 + num2;
    fnTocall(ans);
}

function displaySum(data){
    console.log("The sum is : "+ data);
}
function displaySum2(data){
    console.log(data+" is the sum");
}


sum(11,10,displaySum2);



// // here the constrsin was we can only call one fundtion out of the three 
// // and display result of sum in any one of the format
// // so passed the function we want to call for display to sum function
// // and this concept is known as callback funstion

// // example 2

function calculate(a , b , finalArithmatic){
    return finalArithmatic(a,b);
}

function sum(a,b){
    return a + b;
}
function sub(a,b){
    return a - b;
}


// let val = calculate(10,10,sub);
// console.log(val);



// // setTimeout and setInterval function also uses the callback function

// function greetMale(){
//     console.log("Hello sir");
// }
// function greetFemale(){
//     console.log("Hello ma'am");
// }


// setTimeout(greetMale,3000);

// setInterval(greetFemale,3000);