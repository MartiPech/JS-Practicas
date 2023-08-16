let ApiKey = 'c5d3f02cd0bc260506d4355066d90f33';
let DifKelvin = 273.15;
let urlBase = 'https://api.openweathermap.org/data/2.5/weather';

document.getElementById("botonBusqueda").addEventListener('click', ()=>{
    const ciudad = document.getElementById("ciudadEntrada").value ;
    if(ciudad){
        fetchDatosClima(ciudad)
    }else{
        alert("Por favor introduzca una ciudad");
    }
});

function fetchDatosClima(ciudad){
    fetch(`${urlBase}?q=${ciudad}&appid=${ApiKey}`)
        .then(response => response.json())
        .then(response => mostrarDatosClima(response))
};

function mostrarDatosClima(response){
    console.log(response);
    const divDatosClima = document.getElementById("datosClima");
    divDatosClima.innerHTML="";

    const ciudadNombre = response.name;
    const temperatura = response.main.temp;
    const descripcion = response.weather[0].description;

    const ciudadTitulo = document.createElement('h2');
    const ciudadTemperatura = document.createElement('p');
    const ciudadDescripcion = document.createElement('p');

    ciudadTitulo.textContent = ciudadNombre ;
    ciudadTemperatura.textContent = `La temperatura es de : ${Math.floor(temperatura - DifKelvin)}°C` ;
    ciudadDescripcion.textContent = `El cielo se encuentra : ${descripcion}`;

    divDatosClima.appendChild(ciudadTitulo);
    divDatosClima.appendChild(ciudadTemperatura);
    divDatosClima.appendChild(ciudadDescripcion);
};
