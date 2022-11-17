let categories=document.querySelector(".peliculas23.toprated");
    categories.style.display="flex";
    categories.style.flexWrap="wrap";

let info = ''

fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=5f0f24101490e6eaa3bbc2c5c64c7369")
.then(function(response){
    return response.json()
})
.then(function(data){
    console.log(data);
    for(let i=12; i < data.results.length; i++){
        info +=`
        <article>
        <img src= 'https://image.tmdb.org/t/p/w500/${data.results[i].poster_path}' alt='${data.results[i].original_title}'/>
        <p> ${data.results[i].original_title}</p>
        </article>`
    }
    categories.innerHTML= info
})
.catch(function(error){
    console.log("Error: " + error);
})

