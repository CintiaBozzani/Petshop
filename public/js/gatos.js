const inputSearch = document.querySelector('#inputSearch')
const productosGatos = []
let favoritosGatos=[]
let todosFavoritos=[]


function getData() {

    if(localStorage.getItem("favoritosGatos")!==null){
        todosFavoritos.push(...JSON.parse(localStorage.getItem("favoritosPerros"))) 
    }
    if(localStorage.getItem("favoritosGatos")!== null){
        favoritosGatos.push(...JSON.parse(localStorage.getItem("favoritosGatos"))) 
        todosFavoritos.push(...JSON.parse(localStorage.getItem("favoritosGatos"))) 
    }
    
    localStorage.setItem("favoritos", JSON.stringify(todosFavoritos))

    for (i = 0; i < dataProducts.length; i++)
        if (dataProducts[i].segmento == "gatos") {
            productosGatos.push(dataProducts[i])
        }

    display(productosGatos)
}
getData()

inputSearch.addEventListener('keyup', (event) => {
    let input = event.target.value
    let filterResult = productosGatos.filter(producto =>
        producto.nombre.toLowerCase().includes(input.trim().toLowerCase()))
    display(filterResult)
})

function getFavorito(idFromButton){


    if(favoritosGatos.indexOf(idFromButton)<0){
        favoritosGatos.push(idFromButton)
        todosFavoritos.push(idFromButton)
        let corazon = document.getElementById("corazon"+idFromButton)
        corazon.textContent="favorite"
        
    }
    
    else{
        favoritosGatos = favoritosGatos.filter(favorito => favorito !==idFromButton)
        todosFavoritos = todosFavoritos.filter(favorito => favorito !==idFromButton)
        let corazon = document.getElementById("corazon"+idFromButton)
        corazon.textContent="favorite_border"
     
    }
    localStorage.setItem("favoritosGatos", JSON.stringify(favoritosGatos))
   localStorage.setItem("favoritos", JSON.stringify(todosFavoritos))
    document.getElementById("QFavoritos").innerHTML=todosFavoritos.length
 
 
}

function display(productosGatos) {
    let html = ""
    if (productosGatos.length > 0) {
        for (i = 0; i < productosGatos.length; i++) {
            html += `
        <div class="productItem">   
                    <img class="imgProductos" src="../imagenes/gatos/${productosGatos[i].imagen}" alt="producto royal canin">
                    <div class="descripcionProducto">
                        <h3>${productosGatos[i].marca}</h3>
                        <h3>${productosGatos[i].nombre}</h3>
                        <h3>${productosGatos[i].peso}Kg</h3>
                        <h3>Precio: $${productosGatos[i].precio}</h3>
                        <button id=${productosGatos[i].id} onClick={getFavorito(${productosGatos[i].id})}>
                            <span id='corazon${productosGatos[i].id}'class="material-icons">
                                favorite_border
                        </span>
                        </button> 
                    </div>
                </div>
        `
        }
    } else { html = `<h1 class="notResult">No se encontraron productos con esa busqueda</h1>` }
   
    document.getElementById("productosGatos").innerHTML = html

    favoritosGatos.map(id=>{
        let corazonInit = document.getElementById("corazon"+id)
        corazonInit.textContent="favorite"
       

    })
    localStorage.setItem("favoritos", JSON.stringify(todosFavoritos))
    document.getElementById("QFavoritos").innerHTML=todosFavoritos.length
}
