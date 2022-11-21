let recomendacion = document.querySelector(".recomendacion");

let infoRecomendacion = "";

let parametros = new URLSearchParams(window.location.search);
let id = parametros.get("id");

fetch(
  `https://api.themoviedb.org/3/movie/27/recommendations?api_key=5f0f24101490e6eaa3bbc2c5c64c7369`
)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);

    infoRecomendacion += `
    <a href="movie-detail2.html?id=${data.results[i].id}">
        <article>
        <img src= 'https://image.tmdb.org/t/p/w500/${data.results[i].poster_path}' alt='${data.results[i].original_title}'/>
        <h4> ${data.results[i].original_title}</h4>
        <h4> ${data.results[i].release_date}</h4>
        </article>
        </a>

    `

  });


