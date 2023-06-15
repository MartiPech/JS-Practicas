// sets

const conjunto = new Set(["pedro","sandra","Gonzalo", "pedro"]);
console.log(conjunto)
//dato en el console aparece una sola vez pedro ( caracteristica del SET)

//algunos metodos 

conjunto.add("luciana")
console.log(conjunto)
////////////////////////////////////////////////////////////////////////7

conjunto.delete("pedro");
console.log(conjunto)

//////////////////////////////////////////////////////////////////////

let pregunta = conjunto.has("luciana")
console.log(pregunta)
/////////////////////////////////////////////////////////////////////

let tamaño = conjunto.size
console.log(tamaño)
