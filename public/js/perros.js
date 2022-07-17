
function getData() {
    const productosPerros = []

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
//Recorro el array productosPerros y por cada objeto en este creo un TemplateString que lo guardo en la variable html
function display(productosPerros) {
    let html = ""
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
    console.log(html)
    //busco en el html de perros el elemento cuyo id es productosPerros y mediante el atributo innerHtml le guardo el TemplateString creado en la variable html
    document.getElementById("productosPerros").innerHTML = html
}