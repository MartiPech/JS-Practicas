//Obtener solo los nombres de un array de objetos que contienen propiedades nombre y edad.

let obj = [
    {name:"marisol",edad:43,},
    {name:"alberto",edad:55,},
    {name:"nicolas",edad:23,},
]

const obj_name = obj.map(e=>e.name);
console.log(obj_name);
    