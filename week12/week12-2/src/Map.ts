type Car = {
    name : string,
    power : string,
    cartype : carType,
    speed : number,
    wheels : number 
}
enum carType {
    SIDAN,
    SUV
}
const showRoom = new Map<string,Car>()



showRoom.set("1",{
    name : 'BMW',
    power : "650hp",
    cartype: carType.SIDAN,
    speed : 280,
    wheels : 4
});

showRoom.set("2",{
    name : 'Mercedis',
    power : "650hp",
    cartype: carType.SIDAN,
    speed : 220,
    wheels : 4
});


console.log(showRoom.size)
console.log(showRoom.has('1'))
console.log(showRoom.entries())
console.log(showRoom.delete('2'))
console.log(showRoom.entries())