let apiKey = "ba0b591fbb4dcbf21e7a279fceca5d5e"

window.addEventListener('load',function(){

let container = document.querySelector(".BusquedaPeliculas")
let movies = ' '
let movie =location.search
console.log(location)
let objMovie = new URLSearchParams(movie)
let keyword = objMovie.get('name')
let series = ' '
let container2 = document.querySelector(".BusquedaSeries")


fetch(`https://api.themoviedb.org/3/search/multi?api_key=${apiKey}&query=${keyword}`)
.then(function(resp){
    return resp.json()
})
.then(function(data){
    for (i=0; i< 5;i++){
        if (data.results[i].media_type === 'movie'){
        movies += `<section class="caja1">
    <img class="imagen" src="https://image.tmdb.org/t/p/w500/${data.results[i].poster_path}" alt='${data.results[i].title}' />
     <h2 class="tituloresultados"> ${data.results[i].title} </h2>
    </section>`
} else {
    series += `<section class="caja1">
    <img class="imagen" src="https://image.tmdb.org/t/p/w500/${data.results[i].poster_path}" alt='${data.results[i].original_name}' />
    <h2 class="tituloresultados"> ${data.results[i].original_name} </h2>
    </section>`
    console.log(data)
}}
    container.innerHTML = movies
    container2.innerHTML = series
})
.then(function(error){
    console.log(error)
})
})
