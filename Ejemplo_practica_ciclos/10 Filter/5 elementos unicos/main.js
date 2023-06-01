//filtrar elementos unicos de la array 

let numers = [ 1,2,3,1,3,5,6,8,22,4,6,12]

const numerosUnicos = numers.filter((number,index,array)=>{
    
    return array.indexOf(number) == index
})

console.log(numerosUnicos);

// indexof itera y se queda con la primer ocurrencia . 
// si NO existe el valor arroja -1

// valor     1
// indexof   0
//index      0 LO AGREGA 

// valor     2
// indexof   1
//index      1 LO AGREGA 

// valor     3
// indexof   2
//index      2 LO AGREGA 

// valor     1
// indexof   0
//index      3 NO AGREGA

// valor     1
// indexof   0
//index      3 LO AGREGA 