//ejercicio quiero hacer una compra , pero que solo sea con elementos unicos asi no me cobran dos veces lo mismo 

let array = ["cama","escritorio", "silla", "sillon","tv","cama","silla"];

function comprarporunidad(muebles){
    let unidadesMuebles = new Set(muebles);//dato muebles va con "muebles del parametro de la funcion"
    console.log(unidadesMuebles);
}
comprarporunidad(array);

//con esto le doy un uso practico al set 