/*escribe un prog que analize las calificaciones de una alumn@ 
A) si las dos notas son 8 o mas promociona la materia 
B) si saca entre 4 y 7 va para el parcial 
C) si tiene menos de 4 debe recuperar*/
let a = parseInt(prompt("primer nota"));
let b = parseInt(prompt("segunda nota"));

if(a>7 && b>7){
    alert("FELICITACIONES PROMOCIONASTE")
}else if(a<8 || b<8){
    alert("Tienes fecha para parcial")
}else if(a<4 || b<4){
    alert("debes recuperar")
}