let contenedorGeneros = document.querySelector(".contenedorGeneros");
let infoContenedorGeneros = ""

fetch(
  "https://api.themoviedb.org/3/genre/movie/list?api_key=5f0f24101490e6eaa3bbc2c5c64c7369"
)
  .then(function (res) {
    return res.json();
  })
  .then(function (data) {
    console.log(data);

    for(let i=0; i<data.genres.length; i++) {
        infoContenedorGeneros += `
            <h3>${data.genres[i].name}</h3>
        `
    }

    contenedorGeneros.innerHTML = infoContenedorGeneros
  });
