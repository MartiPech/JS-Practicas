const objArr = [
    {nombre:"sofia", apellido:"Gonzalez"},
    {nombre:"Macarena", apellido:"Gonzalez"},
    {nombre:"Lucia", apellido:"Gonzalez"},
    {nombre:"Flor", apellido:"Alvarez"},
    {nombre:"Olga", apellido:"Martinez"},

];

const lastName = objArr.filter(e => e.apellido =="Gonzalez");
//console.log(lastName);

for (let index = 0; index < lastName.length; index++) {
    const element = lastName[index];
    console.log(element.nombre);
    
}

/*
primero lo filtro , busco lo que quiero. creo un for para que lo recorra el array de obj. guardo ese recorrido e imprimo el guardado con el punto name 
*/




