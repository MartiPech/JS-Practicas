//Convertir un array de objetos con propiedades nombre y edad a un array de strings con el formato "Nombre: Edad".

let ArrObj=[
    {name:"jorge", edad :34},
    {name:"gonzalez", edad:23},
    {name:"alvaro",edad:66},

]

const ArrString = ArrObj.map(e => [e.name , e.edad]);
console.log(ArrString);

// Lo que pide en el formato "Nombre: Edad"

const ArrString2= ArrObj.map(e => `${e.name}, ${e.edad}`);
console.log(ArrString2);

