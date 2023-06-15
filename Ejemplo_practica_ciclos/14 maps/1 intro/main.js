let mapas = new Map([
    ["computadora" ,20],
    ["television",15],
    ["celulares",10],
])

mapas.set("Kindler",50)
console.log(mapas)
mapas.set("auriculares",40)
console.log(mapas)

let pregunta1 = mapas.size//dato NO lleva ()
console.log(pregunta1)

mapas.delete("auriculares");
let pregunta2 = mapas.size;
console.log(mapas);
console.log(pregunta2);
let pregunta3 = mapas.has("Kindler");
console.log(pregunta3);