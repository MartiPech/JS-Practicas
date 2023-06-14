//Filtrar elementos basado en su tipo de dato

const values = [1, "apple", true, 5, "orange", false];

const value = values.filter(e => typeof e == "number")
console.log(value);

/*ejemplos para otros tipos de datos 
e => typeof e == "string"
e => typeof e == "boolean"
e => typeof e == "funtion"
e => typeof e == "number"
e => typeof e == "object"





*/