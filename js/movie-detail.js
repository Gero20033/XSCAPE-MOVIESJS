let pelicula = document.querySelector(".pelicula");

let infoPelicula = "";

let parametros = new URLSearchParams(window.location.search);
let id = parametros.get("id");

fetch(
  `https://api.themoviedb.org/3/movie/${id}?api_key=5f0f24101490e6eaa3bbc2c5c64c7369`
)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);

    infoPelicula += `

    <div class="pelicula-principal">
                <div class="contenedor">
                    <h3 class="titulo"> ${data.original_title}</h3>
                    <p class="descripcion"> ${data.overview}</p>
                    <p>Estreno: ${data.release_date} </p>
                    <p>Calificacion: ${data.vote_average} </p>
                    <p>Duracion ${data.runtime} </p>

                    <div class="generos">
                    </div>
                </div>
            </div>
    `
    pelicula.innerHTML = infoPelicula;
    pelicula.style.backgroundImage = `url(https://image.tmdb.org/t/p/w500${data.backdrop_path})`

    let contendorGeneros = document.querySelector(".generos");
    let infoGeneros = "Generos: "
    for(let i = 0; i < data.genres.length; i++) {
      infoGeneros += `
        <a href="/generos.html?id=${data.genres[i].id}">${data.genres[i].name}</a>
      `
    }
    contendorGeneros.innerHTML = infoGeneros

  });




