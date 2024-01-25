const array = [14,21,35,17,88,4];


function buble(array){
    let condicion;
    do{
        condicion = false;
        for(let i=0 ; i<array.length;i++){
            for(let j=i+1;j<array.length;j++){
                if(array[j]<array[i]){
                    let swap = array[i];
                    array[i] = array[j];
                    array[j] = swap ;
                    condicion = true;
                }
            }
        }

    }while(condicion == true);
}
buble(array)
console.log(array)

// Datos : modifica el array original .
// al final del ciclo condicion es true , while  lo compara y sigue dando vueltas . hasta que de false osea que este todo ordenado 

