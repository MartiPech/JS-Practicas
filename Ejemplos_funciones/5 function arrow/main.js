
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