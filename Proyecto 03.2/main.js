import{libro,celulares} from "./Precios.js";



let tituloData = document.getElementById('titulo');
let precioData = document.getElementById('precio');
let cantidadData = document.getElementById('cantidad');

let enlaces = document.querySelectorAll('a');
console.log(enlaces);

enlaces.forEach(function(enlace){
    enlace.addEventListener('click',function(){
        enlaces.forEach(function(enlace){
            enlace.classList.remove('active');
        });
        enlace.classList.add('active');
        let dataContenido = obtenerData(enlace.textContent);
        
        tituloData.innerHTML= dataContenido.titulo;
        precioData.innerHTML= dataContenido.precio;
        cantidadData.innerHTML= dataContenido.cantidad;


    });
});

function obtenerData(enlace){
    let info = {
    'Kindler': libro,
    'Xiaomi': celulares
    };
    info[enlace];
};

