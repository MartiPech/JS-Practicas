// filtrar palabras que tengan mas de 5 caracteres 

let words = ["maria", "jose", "alberto", "spinetta", "gonzalo"];

let longitudDeCinco = words.filter(e => (e.length>5) )

console.log(longitudDeCinco)