/* dato con el dom no es lo mejor opcion. por que en el DOM necesita una referencia , ahi entra l "THIS" e iria una funcion declarada  */


//funcion declarada
const modelo_1 = function(){
    console.log("modelo 1");
}

modelo_1();
/////////////////////////////////////////////////////////////////////
// para las function arrow , solo hay q sacar la palabra function ... () y agregar el signo de flecha y colocar los "{}". 
//cuando no lleva parametros. 
const modelo_2 = () => {
    console.log("modelo 2 ")
}
modelo_2();

//////////////////////////////////////////////////////////////////

//si un solo parametro puede ir sin parantesis
const modelo_3 = a => {
    console.log("modelo 3 ")
}
modelo_3();

/////////////////////////////////////////////

//si  pasamos dos parametros van con los dos parantesis 
const modelo_4 = (a,b) => {
    console.log("modelo 4 ")
}
modelo_4();

////////////////////////////////
//ejemplo 
const modelo5 = (nombre) =>{
    console.log(`Hola mi nombre es ${nombre}`);
}
modelo5(`Christopher`)


////////////////////////////
//VAMOS A VER COMO SE PUEDE IR ABRAVIANDO LAS FUNCTION ARROW
const mayuscula = (nombre2) =>{/*ACA CREO LA FUNCION MAYUSCULA NADA MAS */
    nombre2 = nombre2.toUpperCase()
    return nombre2
}
let nombre2 = mayuscula(`lucifer`)/*ACA SOLO GUARDO LA FUNCION DE LO QUE RETORMA*/
console.log(nombre2);

// MISMO CODIGO VERSION MAS CORTO 
/*podemos ver lo siguente lo returno sin ponder return , esta implicito el return en las arrow . es mas "(nombre3)" puede ir sin parentesis  */
const mayuscula3 = (nombre3) => nombre3.toUpperCase()
let nombre3 = mayuscula3(`caliban`);
console.log(nombre3)
/*una forma que puedo leer mayuscula3 es . el parametro que entra => HACELE ESTO Y POR DEFAULT ME LO RETURNA */ 