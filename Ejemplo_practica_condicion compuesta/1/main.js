let nombre = prompt("ingrese su nombre: ");
let edad = parseInt (prompt("ingrese su edad "));  

if((nombre !="") && (edad !="")){
    alert(
        "Nombre: "+ nombre + " Edad: "+ edad);
}else{
    alert("ingrese los datos de los campos");
}
