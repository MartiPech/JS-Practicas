//Filtrar elementos de un array según una condición numero pares 

const arr = [ 22,33,44,55,23,45,56];
let npares= [];

for(numer of arr){
    if(numer%2===0){
        npares.push(numer);
    }
}
console.log(npares);
