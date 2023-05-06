
function valores_console(){
    console.log ("N°1");
    console.log ("N°2");
    console.log ("N°3");
    return "Esto es un string retornado"
}

valores_console();
/*
En su función valores_console(), está utilizando tanto console.log() como return.

console.log() es una función que muestra mensajes en la consola del navegador o la consola de la terminal, dependiendo de dónde esté ejecutando su código. Al llamar a la función valores_console(), verá los mensajes "N°1", "N°2" y "N°3" en la consola, ya que los está mostrando usando console.log().

Por otro lado, return es una declaración que finaliza la ejecución de la función y devuelve un valor al código que llamó a la función. En su función, está devolviendo el string "Esto es un string retornado" usando return.
*/

let val= valores_console();
console.log(val)
// guardando la funcion en una variable . almaceno su resultado el "retorn"

/////////////////////////////////////////////////////////////////////////

function valores_console2(){
    console.log ("1");
    return 10;
    console.log ("2");
    console.log ("3");
    return "Esto es un string retornado"
}

let val_2 = valores_console2();
console.log(val_2);

// ojo ahora no imprime hasta el final . sino cuando el copilador lee return . lo devuelve y todo lo que esta por debajo lo ignora.

const suma = function suma(a,b){
    return a + b;
}
console.log(suma(4,3));