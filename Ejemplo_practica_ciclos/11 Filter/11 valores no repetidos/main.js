let numers = [ 1,2,3,1,3,5,6,8,22,4,6,12]

const numerosNoRepetidos = numers.filter((valor,index,array)=>{
    return array.indexOf(valor)  == array.lastIndexOf(valor) ;
})

console.log(numerosNoRepetidos)

// valor       1 , 2 , 3 , 5 ...
// indexof     0 , 1 , 2 , 5 ...
// lastindex   4 , 1 , 4 , 5 ...
//Yes o No     N , Y , N , Y ...   mini tablita 