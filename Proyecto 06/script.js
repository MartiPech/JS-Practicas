let clave_api = '637751041a6e3e5274738b2d0b6fbb84';
let url = 'https://api.themoviedb.org/3/search/movie?query=Jack+Reacher&api_key=API_KEY'
let urlBase = 'https://api.themoviedb.org/3/search/movie'
let imgUrl = 'https://image.tmdb.org/t/p/w200'

document.getElementById("searchButton").addEventListener('click',SearchMovie)
let resultadoDiv = document.getElementById("results")

function SearchMovie(){
    let serchinput = document.getElementById("searchInput").value
    resultadoDiv.innerHTML = "Cargando ..."

    fetch(`${urlBase}?query=${serchinput}&api_key=${clave_api}`) 
    .then(response => response.json())
    .then(response => displayMovies(response.results))
};

function displayMovies(movies){
    resultadoDiv.innerHTML = "";

    if(movies.length ===0 ){
        resultadoDiv.innerHTML = '<p>Por favor ingrese un titulo </p>'
        return
    }

    movies.forEach(movie =>{
        let movieDiv = document.createElement('div')
        movieDiv.classList.add('movie')

        let title = document.createElement('h2')
        title.textContent = movie.title

        let realeaseDate = document.createElement('p')
        realeaseDate.textContent = 'La fecha de lanzamiento fue : '+movie.release_date

        let overview = document.createElement('p')
        overview.textContent = movie.overview

        let posterPath = imgUrl + movie.poster_path
        let poster = document.createElement('img')
        poster.src = posterPath

        movieDiv.appendChild(poster)
        movieDiv.appendChild(title)
        movieDiv.appendChild(realeaseDate)
        movieDiv.appendChild(overview)
        resultadoDiv.appendChild(movieDiv)


    })
}