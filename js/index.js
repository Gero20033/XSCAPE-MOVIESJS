let categories=document.querySelector(".peliculas23.popu");
    categories.style.display="flex";
    categories.style.flexWrap="wrap";

let info = ''

//let categories=""

fetch("https://api.themoviedb.org/3/movie/popular?api_key=5f0f24101490e6eaa3bbc2c5c64c7369")
.then(function(response){
    return response.json()
})
.then(function(data){
    console.log(data);
    for(let i=0; i < data.results.length; i++){
        info +=`
        <article>
        <img src= 'https://image.tmdb.org/t/p/w500/${data.results[i].poster_path}' alt=''/>
        <p>Name: ${data.results[i].original_title}</p>
        </article>`
    }
    categories.innerHTML= info
})
.catch(function(error){
    console.log("Error: " + error);
})