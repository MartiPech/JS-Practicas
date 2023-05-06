//Function declaradas vs expresadas 

//function declarada 
/** Aca podemos ver que invoco la function antes de crear la function e igual funciona aunque si nos ponemos estrictos no deberia pasa eso pero con ES6 se puede */

modelo_4();
function modelo_4(){
    console.log(`Esto es una function declarada`)
}

modelo_4();


////////////////////////////////////////////////////////////////////////
//Function expresadas O Anonima 

//caught ReferenceError: Cannot access 'func_modelo5' before initialization SI LA PONGO ANTES DE CREARLA 

const func_modelo5 = function(){
    console.log(`Esto es una Function expresada/ Anonima `)
}

func_modelo5();

console.log(func_modelo5);// tene en cuenta que por consola sale el contenido de la funcion