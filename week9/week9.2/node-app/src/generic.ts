function identity<T>(arg : T) : T {
    return arg;
}

const Name = identity<string>("Om");
const sal = identity<number>(122);




function getFirstElm<T>(arr : T[]) : T {
    return arr[0];
}


const fn = getFirstElm<string>(["Om","Asmita"]);

console.log(fn.toUpperCase());