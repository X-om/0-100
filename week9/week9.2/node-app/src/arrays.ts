function maxNumber( arr : number[]): number {
    let maxNum : number = 0;
    for(let i : number = 0; i < arr.length; i++){
        if(arr[i] > maxNum){
            maxNum = arr[i];
        }
    } 
    return maxNum;
}


const arr : number[] = [1,2,3,14,1,122,3,1,2,1002];
const result = maxNumber(arr);
console.log(result);
