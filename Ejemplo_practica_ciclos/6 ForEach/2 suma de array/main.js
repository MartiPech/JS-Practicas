//Suma de elementos: Escribe una función que tome un array de números como parámetro y utilice forEach para calcular la suma de todos los elementos. Devuelve el resultado.

let arrays = [2,3,4 ,6,54,64,23];

function sumadelementos(arr){
    let resultado = 0;
    arrays.forEach( (elem) => {
        resultado+=elem;
    })
    return resultado
}
console.log(sumadelementos(arrays))