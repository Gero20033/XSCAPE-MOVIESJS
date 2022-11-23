if(localStorage.getItem("favorites-series") == null) {
    localStorage.setItem("favorites-series", JSON.stringify([]))
  }

let listaIdSeries = JSON.parse(localStorage.getItem("favorites-series"))

let contenedorserie = document.querySelector(".contenedor-series-favoritas")

for(id of listaIdSeries) {
  fetch(`https://api.themoviedb.org/3/tv/${id}?api_key=5f0f24101490e6eaa3bbc2c5c64c7369`)
    .then(function(res) {
        return res.json()
      })
    .then(function(data) {
      let serie = `
        <a href="series-detail2.html?id=${data.id}">
        <article>
        <img src= 'https://image.tmdb.org/t/p/w500/${data.poster_path}' alt='${data.original_name}'/>
        <h4> ${data.original_name}</h4>
        <h4> ${data.first_air_date}</h4>
        </article>
        </a>`
        contenedorserie.innerHTML += serie
    })
}