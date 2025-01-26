interface User2 {
    name : string,
    age : number,
    salary : number
};

function lgalUsers(users : User2[]) : User2[] {
    const legalUsersList : User2[] = [];
    users.map((user : User2)=>{
        if(user.age >= 18)
            legalUsersList.push(user);
    })

    return legalUsersList;
}



const users : User2 [] = [
    {
        name : "Om",
        age : 21,
        salary : 20000
    },
    {
        name : "asmita",
        age : 21,
        salary : 20000
    },
    {
        name : "pooja",
        age : 18,
        salary : 30000
    },
    {
        name: "Aditya",
        age: 12,
        salary: 0,
    }
]

const filteredList = lgalUsers(users);

console.log(filteredList); 