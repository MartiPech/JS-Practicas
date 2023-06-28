let array = ["manzana", "pera", "mandarina", "kiwi" ,"ciruela"]
//si solo pongo el inicio , lo demas lo toma
let resultado = array.slice(2)
console.log(resultado)


let array2 = ["manzana", "pera", "mandarina", "kiwi" ,"ciruela"]
//star , end ... se para en el star y el end inclusivo no lo toma . entre el rango
let resultado2 = array2.slice(2,4)
console.log(resultado2)
