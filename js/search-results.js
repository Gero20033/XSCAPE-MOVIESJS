let apiKey = `5f0f24101490e6eaa3bbc2c5c64c7369`

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
        movies += `
        <a href="movie-detail2.html?id=${data.results[i].id}">
        <article>
        <img src= 'https://image.tmdb.org/t/p/w500/${data.results[i].poster_path}'/>
        <h4> ${data.results[i].original_title}</h4>
        <h4> ${data.results[i].release_date}</h4>
        </article>
        </a>
        `
} else {
    series += `
    <a href="series-detail2.html?id=${data.results[i].id}">
    <article>
    <img src= 'https://image.tmdb.org/t/p/w500/${data.results[i].poster_path}'/>
    <h4> ${data.results[i].name}</h4>
    <h4> ${data.results[i].first_air_date}</h4>
    </article>
    </a>
    `
    console.log(data)
}}
    container.innerHTML = movies
    container2.innerHTML = series
})
.then(function(error){
    console.log(error)
})
})
