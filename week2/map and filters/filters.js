// given an array return a new array with the names starting with s
const arr = ["om" , "asmita" , "shital" , "sunita" , "pooja" , "vikas" , "swapnil", "yudha"];

const newArr = arr.filter(logic =>{
    if(logic.startsWith("s"))
        return true;
    else
        return false;
})

console.log(newArr);

