//Kivabe object er bitor property kuje ber korbe
const person = [
    {id:22, Name:'Mouri Selim', Phone:34854594},
    {id:33, Name:'Risha Selim', Phone:76576575},
    {id:44, Name:'Nisha Selim', Phone:56546565},
    {id:55, Name:'Manna Selim', Phone:54654667}
];

//Object er bitor fixed value pawar jonne 
const names = person.map(s => s.Name); 

//Object er bitor fixed value pawar jonne 
const id = person.map(s => s.id);

//Object er bitor 40 er tekhe boro id number gulo kujar jonne
const filter = person.filter(s => s.id > 40);

//Object er bitor 40 er pore kon value ache ta pawar jonne 
const find = person.find(s => s.id > 40);

console.log(names)
console.log(id)
console.log(filter)
console.log(find)