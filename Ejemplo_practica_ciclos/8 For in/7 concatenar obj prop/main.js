//Concatenar las propiedades de un objeto

const fichas = {
    name:"osvaldo",
    age:43,
    estado_civil:"soltero",
}

let lista =[];
for(prop in fichas){
    lista.push(prop);
}
console.log(lista);

let lista_2 = "";
for(prop in fichas){
    lista_2 += fichas[prop]+" ";
}
console.log(lista_2.trim());//The trim() method removes whitespace from both ends of a string and returns a new string, without modifying the original string