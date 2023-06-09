//Imprimir las propiedades de un objeto

const card = {
    name:"Oscar",
    age: 44,
    client: true,

}

for(prop in card){//aca obtengo solo la  "key" 
    console.log(prop)
}



for(prop in card){// aca solo obtengo el "value"
    console.log(card[prop])
}

