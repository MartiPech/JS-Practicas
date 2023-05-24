//Encontrar el número más grande en un array opcion con if 

let numers=[32,34,44,75,233,46,22];
const valorMayor = numers.reduce((acc,value)=>{
    if(acc>value){
        return acc;
    }return value
})

console.log(valorMayor);

////////////////////////////////////////////////////////
//opcion con ternario

const valorMayor2 = numers.reduce((acc,value)=> (acc>value? acc: value) ,numers[0])
console.log(valorMayor2)