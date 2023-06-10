// Verificar si una propiedad existe en un objeto

const opp ={
    product: "rice",
    price:400,
    marca:"marolio",
}
const buscar = "rice";

for(prop in opp){
    if(opp[prop]===buscar){
        console.log("existe")
        
    }
}