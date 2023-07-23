import {barcelona,roma,paris,londres} from "./ciudades.js";

let tituloElemento = document.getElementById("titulo");
let subtituloElemento = document.getElementById("subtitulo");
let parradoElemento = document.getElementById("parrafo");

//Obtener los elementos del html "a"
let enlaces = document.querySelectorAll('a');
console.log(enlaces);

// Hacer una recorrida por los enlaces
enlaces.forEach(function(enlace){
    enlace.addEventListener('click',function(){
        enlaces.forEach(function(enlace){
                enlace.classList.remove('active');
            });
        enlace.classList.add('active');
        //acceder a la info 
        let contenidos = obtenerDatos(enlace.textContent);
        //imprimir la data 
        tituloElemento.innerHTML = contenidos.titulo;
        subtituloElemento.innerHTML = contenidos.subtitulo;
        parradoElemento.innerHTML = contenidos.parrafo;
    });
});



//acceder al import
function obtenerDatos(enlace){
    let contenido = {
        'Barcelona':barcelona,
        'Roma':roma,
        'París':paris,
        'Londres':londres
    };
    return contenido[enlace];
};