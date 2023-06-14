//Iterar sobre propiedades de un objeto

let  obj = {
    name : "Oscar",
    age :34,
    adress:"tamborini" + " "+ 2598,

}


let objSum = []
/*
for(arr of obj){
    objSum += arr;
} 
console.log(objSum);
sobre el objeto obj. En JavaScript, no puedes iterar directamente sobre un objeto con un bucle for...of como lo estás intentando hacer.

El bucle for...of se utiliza para iterar sobre elementos iterables, como matrices (arrays) o cadenas de texto. Sin embargo, los objetos en JavaScript no son iterables de forma predeterminada. */

for(nim in obj){
    objSum+=obj[nim]+" ";
}
console.log(objSum);


