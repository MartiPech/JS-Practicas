// Filtrar números pares: Escribe una función que tome un array de números como parámetro y utilice forEach para filtrar y devolver un nuevo array que contenga únicamente los números pares.
let arrays = [2,3,4 ,6,54,64,23];

function numerosPares (arr){
    let par = [];
    arrays.forEach((elem)=>{
        if(elem % 2=== 0){
            par.push(elem);
        }
    })
    return par;
}

console.log(numerosPares(arrays));