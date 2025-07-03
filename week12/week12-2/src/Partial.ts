interface User {
    name : string,
    age : number,
    email : string,
    password : string,
    isMarried : boolean
}


type updateInfo2 = Pick<User, 'name' | 'age' | 'password' | 'isMarried'>;
type newUpdateInfo = Partial<updateInfo2>


function updateInfofunc2(updatepayload : newUpdateInfo) : newUpdateInfo{
    updatepayload.name = 'Om'
    updatepayload.age = 22

    return {
        name : 'Om',
        age : 22
    }

}



console.log(updateInfofunc2({
    name:'asmita',
    age : 21
}));
