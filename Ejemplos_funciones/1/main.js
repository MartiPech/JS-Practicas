//parametro ingresados por el mismo dev 
/* 
function suma(a,b){
    let respuesta = a +b;
    return respuesta;
}

console.log (suma(3,6));

*/
//////////////////////////////////////////////////////////////////

function saludo(nombre, edad){
    console.log(`Hola mi nombre es  ${nombre} y tengo ${edad} de edad `)
    

}

saludo();//si no pongo nada sale undefined pero desde 2015 ecmascript 6 es posible asignarle valores por default

saludo("gonzalo",32);


////////////////////////////////////////////////////////
function saludo2(nombre="desconocido", edad= "ni idea" ){
    console.log(`Hola mi nombre es  ${nombre} y tengo ${edad} de edad `)
    

}
saludo2();