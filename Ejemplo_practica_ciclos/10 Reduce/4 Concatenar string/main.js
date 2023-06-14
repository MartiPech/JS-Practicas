//Concatenar todos los elementos de un array de strings

let strings = ["hola mundo " , "good morning vietnam"];

const arr = strings.reduce((acc, value)=> acc+value);
console.log(arr)