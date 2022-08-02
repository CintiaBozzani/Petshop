const inputSearch = document.querySelector('#inputSearch')
const productosPerros = []

function getData() {

    console.log(dataProducts) //LLamo a la constante dataProductos del archivo dataProducts.js que incorpore en el script de perros.html

    //Recorro el array mediante un bucle for y con un condicional separo los productos cuyo segmento sea perros, mediante metodo push los guardo en al array productosPerros
    for (i = 0; i < dataProducts.length; i++) {
        if (dataProducts[i].segmento == "perros") {
            productosPerros.push(dataProducts[i])
        }
    }
    console.log(productosPerros)
    display(productosPerros)
}
getData()

inputSearch.addEventListener('keyup', (event) => {
    let input = event.target.value
    let filterResult = productosPerros.filter(producto =>
        producto.nombre.toLowerCase().includes(input.trim().toLowerCase()))
    console.log(filterResult)
    display(filterResult)
})
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
                    </div>
                </div>
               `
        }
    } else { html = `<h1 class="notResult">No se encontraron productos con esa busqueda</h1>` }
    //busco en el html de perros el elemento cuyo id es productosPerros y mediante el atributo innerHtml le guardo el TemplateString creado en la variable html
    document.getElementById("productosPerros").innerHTML = html
}