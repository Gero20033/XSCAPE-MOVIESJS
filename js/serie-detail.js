let pelicula = document.querySelector(".pelicula");

let infoPelicula = "";

let parametros = new URLSearchParams(window.location.search);
let id = parametros.get("id");

fetch(
  `https://api.themoviedb.org/3/tv/${id}?api_key=5f0f24101490e6eaa3bbc2c5c64c7369`
)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);

    infoPelicula += `

    <div class="pelicula-principal">
                <div class="contenedor">
                    <h3 class="titulo"> ${data.original_name}</h3>
                    <p class="descripcion"> ${data.overview}</p>
                    <p>Estreno: ${data.first_air_date} </p>
                    <p>Calificacion: ${data.vote_average} </p>
                    <div class="generos">
                    </div>
                    <div class="Reproductores">
                    </div>
                    <br></br>
                    <a href="recomendacionserie.html?id=${data.id}" class="boton">Recomendaciones</a>
                    <button id="boton-favoritos" class="boton" onClick=handleClickFavorites() >Agregar a Favoritos</button>
                </div>
            </div>
    `
    pelicula.innerHTML = infoPelicula;
    pelicula.style.backgroundImage = `url(https://image.tmdb.org/t/p/original${data.backdrop_path})`

    let contendorGeneros = document.querySelector(".generos");
    let infoGeneros = "Generos: "
    for(let i = 0; i < data.genres.length; i++) {
      infoGeneros += `
        <a href="/generos.html?id=${data.genres[i].id}" class="generos-peliculas">${data.genres[i].name}</a>
      `
    }
    contendorGeneros.innerHTML = infoGeneros

    let contendorReproductores = document.querySelector(".Reproductores");
    let infoReproductores = "Reproductores: "
    for(let i = 0; i < data.production_companies.length; i++) {
      infoReproductores += 
      `
      <a id= ${data.production_companies[i].id} class="generos-peliculas">${data.production_companies[i].name}</a>

      `
    }
    contendorReproductores.innerHTML = infoReproductores

  });

  // Boton de Favoritos

function handleClickFavorites() {
  if (localStorage.getItem("favorites-serie") == null) {
    localStorage.setItem("favorites-serie", JSON.stringify([]));
  }

  let listaIdSeries = JSON.parse(
    localStorage.getItem("favorites-series")
  );

  if (listaIdSeries.includes(id)) {
    listaIdSeries = listaIdSeries.filter(function(item) {
      return item != id;
    });
  } else {
    listaIdSeries.push(id);
  }

  localStorage.setItem("favorites-series", JSON.stringify(listaIdSeries));
}