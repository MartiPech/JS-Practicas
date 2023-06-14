//Concatenar elementos de un array en un string
let arr1 = [ "hola" , "como estas?"];
let arrCompl = [];
for(arr of arr1){
    arrCompl+= arr+" ";
}
console.log(arrCompl.trim());