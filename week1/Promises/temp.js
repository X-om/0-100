class Promise{
    constructor(callback){
        callback()
    }
};



const promiseExample = new Promise(()=>{
    console.log("hello world");
})