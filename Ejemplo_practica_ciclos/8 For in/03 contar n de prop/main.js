//Contar el número de propiedades de un objeto

const ficha = {
    name:"christobal",
    age:32,
    adress:"miami 132"
}
let acc = 0
for(prop in ficha){
    acc ++
}
console.log(acc);