let categoriesPopulares=document.querySelector(".popu")
    categoriesPopulares.style.display="flex";
    categoriesPopulares.style.flexWrap="wrap";

let infoPopulares = ''

fetch("https://api.themoviedb.org/3/movie/popular?api_key=5f0f24101490e6eaa3bbc2c5c64c7369")
.then(function(response){
    return response.json()
})
.then(function(data){
    console.log(data);
    for(let i=12; i < data.results.length; i++){
        infoPopulares +=`
        <article>
        <img src= 'https://image.tmdb.org/t/p/w500/${data.results[i].poster_path}' alt='${data.results[i].original_title}'/>
        <p> ${data.results[i].original_title}</p>
        </article>`
    }
    categoriesPopulares.innerHTML= infoPopulares
})
.catch(function(error){
    console.log("Error: " + error);
})