//Obtener el máximo valor de un array de números

const numers = [2,3,4,6,7,8,9,99];
let acc = 0;
for(num of numers){
    if(num >acc){
        acc = num;
    }
}
console.log(acc);