//Elevar al cuadrado los elementos de un array numérico.

let numers = [2,4,6,7,8,9,23];

function AlCuadrado(arr){
    return numers.map(e => Math.pow(e ,2));
}
    console.log(AlCuadrado(numers));

//Opcion 2 

const AlCuadrado2 = numers.map(r => r**2);
console.log(AlCuadrado2);