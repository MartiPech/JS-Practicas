for(i=0; i<100; i++){
    let name= prompt("Ingrese nombre")
    if(name==="exit"){
        break
        
    }
    console.log(name)
};
console.log("Fin del ciclo")// DATO a pensar , esto lo coloco afuera del bloque de la iteracion , por que cuando se da la condicion , hace el break y sale del bloque 
