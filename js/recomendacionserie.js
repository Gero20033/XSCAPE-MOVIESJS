let recomendacion3 = document.querySelector(".recomendacionserie")
let parametros = new URLSearchParams(window.location.search);
let id = parametros.get("id");


let infoRecomendacionserie = ''

fetch(`https://api.themoviedb.org/3/tv/${id}/recommendations?api_key=5f0f24101490e6eaa3bbc2c5c64c7369`)

.then(function(response){
    return response.json()
})
.then(function(data){
  console.log(data);
  for(let i=0; i < data.results.length; i++){
    infoRecomendacionserie +=`
    <a href="series-detail2.html?id=${data.results[i].id}">
    <article>
    <img src= 'https://image.tmdb.org/t/p/w500/${data.results[i].poster_path}' alt='${data.results[i].name}'/>
    <h4> ${data.results[i].name}</h4>
    <h4> ${data.results[i].first_air_date}</h4>
    </article>
    </a>
    `
  }
  recomendacion3.innerHTML= infoRecomendacionserie
})
.catch(function(error){
  console.log("Error: " + error);
})


