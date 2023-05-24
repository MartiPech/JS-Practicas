//Sumar todos los elementos de un array

let numers = [1,2,3,4,5,6,7,7,8,88];

const suma = numers.reduce((acc,value)=>acc+=value);
console.log(suma);