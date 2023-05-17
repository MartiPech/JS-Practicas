//Convertir a mayúsculas: Escribe una función que tome un array de palabras como parámetro y utilice forEach para convertir todas las palabras a mayúsculas. Devuelve el nuevo array de palabras en mayúsculas

let array = ["lunes", "martes", "miercoles", "jueves" , "viernes", "sabado","domingo"];

function mayusculas(arr){
    let newlist = [];
    array.forEach(elem =>{
        newlist.push(elem.toUpperCase())
    })
    return newlist
}

console.log(mayusculas(array))