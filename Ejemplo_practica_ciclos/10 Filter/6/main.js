//Filtrar strings que contienen una subcadena:  

const words = ["apple", "banana", "orange", "grapefruit", "kiwi"];

const limpio = words.filter(word => word.includes("an"));
console.log(limpio);