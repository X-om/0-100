interface User {
    name : string,
    age : number,
    email : string,
    password : string,
    isMarried : boolean
}


type updateInfo = Pick<User, 'name' | 'age' | 'password' | 'isMarried'>;


function updateInfofunc(updatepayload : updateInfo) : updateInfo{
    updatepayload.name = 'Om'
    updatepayload.age = 22
    updatepayload.isMarried = false
    updatepayload.password='1234'

    return {
        name : 'Om',
        age : 22,
        isMarried : false,
        password : '1234'
    }

}



console.log(updateInfofunc({
    name:'asmita',
    age : 21,
    password : '123',
    isMarried : true
}));
