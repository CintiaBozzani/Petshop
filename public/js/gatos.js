const inputSearch = document.querySelector('#inputSearch')

const productosGatos = []
function getData() {

    for (i = 0; i < dataProducts.length; i++)
        if (dataProducts[i].segmento == "gatos") {
            productosGatos.push(dataProducts[i])
        }
    console.log(productosGatos)
    display(productosGatos)
}
getData()

inputSearch.addEventListener('keyup', (event) => {
    let input = event.target.value
    let filterResult = productosGatos.filter(producto =>
        producto.nombre.toLowerCase().includes(input.trim().toLowerCase()))
    console.log(filterResult)
    display(filterResult)
})

function display(productosGatos) {
    let html = ""
    for (i = 0; i < productosGatos.length; i++) {
        html += `
        <div class="productItem">   
                    <img class="imgProductos" src="../imagenes/gatos/${productosGatos[i].imagen}" alt="producto royal canin">
                    <div class="descripcionProducto">
                        <h3>${productosGatos[i].marca}</h3>
                        <h3>${productosGatos[i].nombre}</h3>
                        <h3>${productosGatos[i].peso}Kg</h3>
                        <h3>Precio: $${productosGatos[i].precio}</h3>
                    </div>
                </div>
        `
    }
    document.getElementById("productosGatos").innerHTML = html
}
