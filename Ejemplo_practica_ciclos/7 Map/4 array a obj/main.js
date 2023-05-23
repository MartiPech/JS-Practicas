//Convertir un array de nombres en objetos con propiedades nombre y longitud.

let arr = ["marta", "eduardo" , "mabel"];
const ObjLongitud = arr.map(e=>({nombre:e, longitud:e.length}))
console.log(ObjLongitud)


