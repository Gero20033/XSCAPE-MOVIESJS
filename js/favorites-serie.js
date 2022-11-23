if(localStorage.getItem("favorites-serie") == null) {
    localStorage.setItem("favorites-serie", JSON.stringify([]))
  }

let listaIdSeries = JSON.parse(localStorage.getItem("favorites-serie"))

let contenedor = document.querySelector(".contenedor-peliculas-favoritas")

for(id of listaIdSeries) {
  fetch(`https://api.themoviedb.org/3/tv/${id}?api_key=5f0f24101490e6eaa3bbc2c5c64c7369`)
    .then(function(res) {
        return res.json()
      })
    .then(function(data) {
      let pelicula = `
      <h2> Series favoritas </h2>
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