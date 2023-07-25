let arr = "curso y diseño por el autor Christian code 7";
let busq = arr.search(/christian/);
console.log(busq);//va a salir apartir de que caracter sale ejm 28 , si sale -1 es porque no existe.

//Modificadores 
//i: ignora las minisculas y las mayusculas 
//g: busca en todo el texto , no solo con la primer encontrada 
//m: busqueda multilinea   
//s: permite usar "."
// \d: busca por digito "numero seria el digito"

// Otra forma de buscar 

let pattern = /christian/i
let resul = pattern.test(arr);
console.log(resul);// tira true 


let resul_2= pattern.exec(arr);// me arroja otros datos , si no existe arroja null .
console.log(resul_2);

//Forma que buscar numero
let pattern2 = /[0-9]/;
let resul_3 = pattern2.test(arr);
console.log(resul_3);

//Forma para pedir y obtener lo que queres 
let emailCheck = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
console.log(emailCheck.test('christiancode@gmail.com'));


