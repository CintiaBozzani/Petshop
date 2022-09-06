
let arrayFavoritos = []
const dataProducts =[]
async function getData(){

let dataLocalSt=JSON.parse(localStorage.getItem("favoritos"))

await fetch("../js/dataProducts.json")
.then(response=>response.json())
.then(json=>dataProducts.push(...json))


dataLocalSt.map(favorito =>{
arrayFavoritos.push( ...dataProducts.filter(product=>product.id === favorito))
})
//document.getElementById("QFavoritos").innerHTML=dataLocalSt.length

if(window.location.pathname === "/public/paginas/Favoritos.html"){
diplayFavoritos()
}
}
getData()

function diplayFavoritos(){
    let html=""
    arrayFavoritos.map(favorito =>{
        console.log(favorito)
      return  html += `
        <div class="productItem">   
                    <img class="imgProductos" src="../imagenes/${favorito.segmento}/${favorito.imagen}" alt="producto royal canin">
                    <div class="descripcionProducto">
                        <h3>${favorito.marca}</h3>
                        <h3>${favorito.nombre}</h3>
                        <h3>${favorito.peso}Kg</h3>
                        <h3>Precio: $${favorito.precio}</h3>
                         
                    </div>
                </div>
        `
     
    })

        document.getElementById("listFavoritos").innerHTML=html
}


