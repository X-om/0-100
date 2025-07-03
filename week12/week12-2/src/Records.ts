type Killer = {
    name : string,
    id : number,
    kill_count : number,
    kd : number
};



type Killers = Record<string,Killer>



const players: Killers = {
    '1' : {name:'om' , id : 2, kill_count : 21, kd:32.1},
    '2' : {name : 'aditya', id : 3, kill_count : 11, kd:6.11}
}




console.log(players['1'].kill_count = 22)