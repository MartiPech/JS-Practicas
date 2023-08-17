let apiKey = "c5d3f02cd0bc260506d4355066d90f33";
let url = `https://api.openweathermap.org/data/2.5/weather`
let kelvin = 273.15;


document.getElementById("botonBusqueda").addEventListener('click', ()=>{
    let ciudad = document.getElementById("ciudadEntrada").value;
    if(ciudad){
        fetchdata(ciudad);
    }else{
        alert("Por favor ponga una ciudad");
    }
});



function fetchdata(ciudad){
    fetch(`${url}?q=${ciudad}&appid=${apiKey}`)
    .then(response => response.json())
    .then(response => monstrarclima(response));
};

function monstrarclima(response){
    console.log(response);
    const divDatosClima = document.getElementById("datosClima");
        divDatosClima.innerHTML= "";
    const ciudadaTitulo = response.name
    const ciudadaTemperatura = response.main.temp;
    const ciudadaDescription = response.weather[0].description
    const ciudadHumedad = response.main.humidity;


    const titulo = document.createElement('h2');
    const temperatura = document.createElement('p');
    const descripcion = document.createElement('p');
    const humedad = document.createElement('p');

    titulo.textContent = ciudadaTitulo;
    temperatura.textContent = `La temperatura es de : ${Math.floor(ciudadaTemperatura-kelvin)}°C`;
    descripcion.textContent = `El cielo se encuentra : ${ciudadaDescription}`;
    humedad.textContent = `Con una humedad de: ${ciudadHumedad}%`

    
    divDatosClima.appendChild(titulo)
    divDatosClima.appendChild(temperatura)
    divDatosClima.appendChild(descripcion)  
    divDatosClima.appendChild(humedad) 
    
    
}

