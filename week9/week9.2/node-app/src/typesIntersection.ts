type Employee = {
    name : string,
    startDate : Date
}
type Manager = {
    name : string,
    department : string
}

type TeamLead = Employee & Manager;

const teamLead : TeamLead = {
    name : "OM",
    startDate : new Date() ,
    department : "Computer science"
}


console.log(teamLead);