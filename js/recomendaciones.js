let recomendacion = document.querySelector(".recomendacion");

let infoRecomendacion = "";

let parametros = new URLSearchParams(window.location.search);
let id = parametros.get("id");

fetch(
  `https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=5f0f24101490e6eaa3bbc2c5c64c7369`
)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);

    infoRecomendacion += `
    
    `

  });


