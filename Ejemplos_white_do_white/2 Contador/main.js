//hacer un programa debe pedir edades hasta que se ingrese una edad menor a 18
//cuando se ingresa el menor , que el programa te diga cuantos mayores de edad 
//ingresaron en el programa

var edad = parseInt(prompt("ingresar edad"))
var cont = 0
while(edad>18){
     edad = parseInt(prompt("ingresar edad"))
    
    cont++

}
console.log(cont)