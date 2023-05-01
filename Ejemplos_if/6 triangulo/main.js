/* ingresa la medida de los lados de un triangulo , y el programa te dice si es equilatero o isosele o escaleno o dos los lados sin distinto */

let a = parseInt(prompt("ingrese lado del triangulo n°1"))
let b = parseInt(prompt("ingrese lado del triangulo n°2"))
let c = parseInt(prompt("ingrese lado del triangulo n°3"))

if(a==b && b==c){
    alert("triangulo equilatero");
}else if(a!=b && b!=c && c!=a){
    alert("triangulo escaleno")
}else{
    alert("triangulo isoseles")
}