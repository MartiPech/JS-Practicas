//Contar la cantidad de elementos que cumplen cierta condición: que el resto de 0

let numers = [2,3,4,6,7,8,9,10];

const ElementosDCondicion = numers.reduce((acc,value)=>(value%2==0? acc+1 : acc),numers[0]);
console.log(ElementosDCondicion);

