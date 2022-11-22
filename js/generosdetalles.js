let generosDetalles = document.querySelector(".recomendacion")
let parametros = new URLSearchParams(window.location.search);
let id = parametros.get("id");


let infoDetailgenre = ''

fetch(`https://api.themoviedb.org/3/discover/movie?api_key=5f0f24101490e6eaa3bbc2c5c64c7369&with_genres=${id}`)

.then(function(response){
    return response.json()
})
.then(function(data){
    console.log(data);
    for(let i=0; i < data.results.length; i++){
        infoDetailgenre +=`
        <a href="movie-detail2.html?id=${data.results[i].id}">
        <article>
        <img src= 'https://image.tmdb.org/t/p/w500/${data.results[i].poster_path}' alt='${data.results[i].original_title}'/>
        <h4> ${data.results[i].original_title}</h4>
        <h4> ${data.results[i].release_date}</h4>
        </article>
        </a>
        `
    }
    generosDetalles.innerHTML= infoDetailgenre
})
.catch(function(error){
    console.log("Error: " + error);
})

