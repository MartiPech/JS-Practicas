let ApiKey = 'c5d3f02cd0bc260506d4355066d90f33';
let DifKelvin = 273.15;
let urlBase = 'https://api.openweathermap.org/data/2.5/weather';

document.getElementById("botonBusqueda").addEventListener(click, ()=>{
    const ciudad = document.getElementById("ciudadEntrada").value ;
    if(ciudad){
        fetchDatosClima(ciudad)
    }
});

function fetchDatosClima(ciudad){
    fetch(`${urlBase}?q=${ciudad}&appid=${ApiKey}`)
        .then(response => response.json())
        .then(response => mostrarDatosClima(response))
};

function mostrarDatosClima(response){
    
};
