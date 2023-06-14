// sumar los valores de un objeto utilizando el metodo reduce 

const ficha = {
    numer:12,
    numer1:34,
    numer2:44,
}
const valores = Object.values(ficha);
console.log(valores);

const metodo = valores.reduce((acc,actual)=>acc += actual);
console.log(metodo)