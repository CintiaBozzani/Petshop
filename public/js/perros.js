const inputSearch = document.querySelector('#inputSearch')
const productosPerros = []
let favoritosPerros = []
let todosFavoritos = []

function getData() {

if(localStorage.getItem("favoritosPerros")!== null){
    favoritosPerros.push(...JSON.parse(localStorage.getItem("favoritosPerros")))
    todosFavoritos.push(...JSON.parse(localStorage.getItem("favoritosPerros")))
}
if(localStorage.getItem("favoritosGatos")!==null){
    todosFavoritos.push(...JSON.parse(localStorage.getItem("favoritosGatos"))) 
}

    //Recorro el array mediante un bucle for y con un condicional separo los productos cuyo segmento sea perros, mediante metodo push los guardo en al array productosPerros
    for (i = 0; i < dataProducts.length; i++) {
        if (dataProducts[i].segmento == "perros") {
            productosPerros.push(dataProducts[i])
        }
    }
    display(productosPerros)
}

getData()

inputSearch.addEventListener('keyup', (event) => {
    let input = event.target.value
    let filterResult = productosPerros.filter(producto =>
        producto.nombre.toLowerCase().includes(input.trim().toLowerCase()))
    
    display(filterResult)
})

function getFavorito(idFromButton){
    if(favoritosPerros.indexOf(idFromButton)<0){
        favoritosPerros.push(idFromButton)
        todosFavoritos.push(idFromButton)
        let corazon = document.getElementById("corazon"+idFromButton)
        corazon.textContent="favorite"
        
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Has agregado el producto a tus favoritos',
            showConfirmButton: false,
            timer: 1500
          })


    }else{
        favoritosPerros = favoritosPerros.filter(favorito => favorito !==idFromButton)
        todosFavoritos = todosFavoritos.filter(favorito => favorito !==idFromButton)
        let corazon = document.getElementById("corazon"+idFromButton)
        corazon.textContent="favorite_border"
     
        Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'Has quitado el producto a tus favoritos',
            showConfirmButton: false,
            timer: 1500
          })
    }
    
    localStorage.setItem("favoritosPerros", JSON.stringify(favoritosPerros))
    localStorage.setItem("favoritos", JSON.stringify(todosFavoritos))
    document.getElementById("QFavoritos").innerHTML=todosFavoritos.length
}
//Recorro el array productosPerros y por cada objeto en este creo un TemplateString que lo guardo en la variable html
function display(productosPerros) {
   
    let html = ""
    if (productosPerros.length > 0) {
        for (i = 0; i < productosPerros.length; i++) {
            html += `
                <div class="productItem">
                    <img class="imgProductos" src="../imagenes/perros/${productosPerros[i].imagen}" alt="producto royal canin">
                    <div class="descripcionProducto">
                        <h3>${productosPerros[i].marca}</h3>
                        <h3>${productosPerros[i].nombre}</h3>
                        <h3>${productosPerros[i].peso}Kg</h3>
                        <h3>Precio: ${productosPerros[i].precio}</h3>
                        <button id=${productosPerros[i].id} onClick={getFavorito(${productosPerros[i].id})}>
                            <span id='corazon${productosPerros[i].id}'class="material-icons">
                                favorite_border
                        </span>
                    </div>
                </div>
               `
        }
    } else { html = `<h1 class="notResult">No se encontraron productos con esa busqueda</h1>` }
    //busco en el html de perros el elemento cuyo id es productosPerros y mediante el atributo innerHtml le guardo el TemplateString creado en la variable html
    document.getElementById("productosPerros").innerHTML = html

    favoritosPerros.map(id=>{
        let corazonInit = document.getElementById("corazon"+id)
        corazonInit.textContent="favorite"
       

    })
    localStorage.setItem("favoritos", JSON.stringify(todosFavoritos))
    document.getElementById("QFavoritos").innerHTML=todosFavoritos.length
}