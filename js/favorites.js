if(localStorage.getItem("favorites-peliculas") == null) {
    localStorage.setItem("favorites-peliculas", JSON.stringify([]))
  }

let listaIdPeliculas = JSON.parse(localStorage.getItem("favorites-peliculas"))

let contenedor = document.querySelector(".contenedor-peliculas-favoritas")

for(id of listaIdPeliculas) {
  fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=5f0f24101490e6eaa3bbc2c5c64c7369`)
    .then(function(res) {
        return res.json()
      })
    .then(function(data) {
      let pelicula = `
        <a href="movie-detail2.html?id=${data.id}">
        <article>
        <img src= 'https://image.tmdb.org/t/p/w500/${data.poster_path}' alt='${data.original_title}'/>
        <h4> ${data.original_title}</h4>
        <h4> ${data.release_date}</h4>
        </article>
        </a>`
        contenedor.innerHTML += pelicula
    })
}