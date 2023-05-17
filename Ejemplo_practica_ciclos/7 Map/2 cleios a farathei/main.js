//Convertir un array de temperaturas en grados Celsius a grados Fahrenheit.

let temp = [32,45,60,180];

const ConvertFahrenheit = temp.map(t => (t*1.8)+32)
console.log(ConvertFahrenheit)