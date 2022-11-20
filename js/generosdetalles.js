let generosDetalles=document.querySelector(".detallegenero")
    generosDetalles.style.display="flex";
    generosDetalles.style.flexWrap="wrap";

let infoDetailgenre = ''

fetch("https://api.themoviedb.org/3/discover/movie?api_key=5f0f24101490e6eaa3bbc2c5c64c7369")
.then(function(response){
    return response.json()
})
.then(function(data){
    console.log(data);
    for(let i=0; i < data.results.length; i++){
        infoDetailgenre +=`
        
        `
    }
    generosDetalles.innerHTML= infoDetailgenre
})
.catch(function(error){
    console.log("Error: " + error);
})
