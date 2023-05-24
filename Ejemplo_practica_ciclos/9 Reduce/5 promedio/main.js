// calcular el promedio de un arr
//             0 1 2  3  4  5
let numers = [ 1,3,6,22,98,34];

const average = numers.reduce((acc,value, indice ,numers)=>{
    acc +=value;
    if(indice===numers.length-1){
        return acc/numers.length
    }return acc ;
}); 
console.log(average);


