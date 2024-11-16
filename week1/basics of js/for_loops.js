// factorial

let n = 100;

let fact = 0;
for(let i = 0; i <= n; i++){
    fact += i;
}

console.log(n + " Factorial is = " + fact);

console.log("\n\n\n\n");

// even nums
for(let i = 1; i <= n; i++){
    if(i % 2 == 0)
        console.log(i);
}