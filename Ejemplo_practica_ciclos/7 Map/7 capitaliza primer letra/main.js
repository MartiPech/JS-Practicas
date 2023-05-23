//Capitalizar la primera letra de cada palabra en un array de strings.

let string = ["maria", "meme" , "lele" , "oscar"];

const capitalizar = string.map(e => e.charAt(0).toUpperCase()+e.slice(1));
console.log(capitalizar);