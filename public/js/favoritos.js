let arrayFavoritos = []

function getData(){

let dataLocalSt=JSON.parse(localStorage.getItem("favoritos"))


dataLocalSt.map(favorito =>{
arrayFavoritos.push( ...dataProducts.filter(product=>product.id === favorito))
})
document.getElementById("QFavoritos").innerHTML=dataLocalSt.length

if(window.location.pathname === "/public/paginas/Favoritos.html"){
diplayFavoritos()
}
}
getData()

function diplayFavoritos(){
    let html=""
    arrayFavoritos.map(favorito =>{
        console.log(favorito)
      return  html += 
       `
       <li>${favorito.nombre}</li>
       ` 
    })

        document.getElementById("listFavoritos").innerHTML=html
}


