let categories=document.querySelector(".categories.uno");
    categories.style.display="flex";
    categories.style.flexWrap="wrap";

let info = ''

//let categories=""

fetch("https://api.themoviedb.org/3/movie/popular?api_key=ba0b591fbb4dcbf21e7a279fceca5d5e")
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