// Creamos el array donde se van a guardar los productos.
let arrayProductos = []

//Revisamos si habia algo cada que carga la pagina
const cargarPagina = localStorage.getItem("productos");
if (cargarPagina) {
    arrayProductos = JSON.parse(cargarPagina);
}

// Seleccionamos el input que contendra el nombre del producto.
const productoNombre = document.querySelector("#agregarProductosNombre");

// Seleccionamos el input que contendra el precio del producto.
const productoPrecio = document.querySelector("#agregarProductosPrecio");

// Seleccionamos el boton que agrega contenido a la lista.
const botonAgregar = document.querySelector("#botonParaAgregar");

// Seleccionamos la lista.
const listaProductos = document.querySelector("#listaRenderizar");

// Seleccionamos el boton que sincroniza la API.
const botonSincronizarAPI = document.querySelector("#botonSincronizarAPI");

// Creamos una función que cuando escuche los click, cree una lista con la información del usuario dentro.
function crearProducto(producto) {
    ////////////
    // TASK 3 //
    ////////////
    // Creamos una lista que mostrata el producto.
    const miLista = document.createElement("li");
    miLista.textContent = "Producto: ";
    
    // Creamos el boton que elimina el producto.
    const botonEliminar = document.createElement("button");
    botonEliminar.textContent = "X";
    // Creamos la función para que el boton elimine.
    botonEliminar.addEventListener("click", () => {
        listaProductos.removeChild(miLista);
        console.log("Su producto ha sido eliminado con exito.");
        arrayProductos = arrayProductos.filter(n => n !== producto);
        localStorage.setItem("productos", JSON.stringify(arrayProductos));
    })

    // Creamos un span donde se encontrara el producto.
    const lugarProducto = document.createElement("span");
    lugarProducto.textContent = `Nombre: ${producto.nombre} - Precio: ${producto.precio}`;

    // Agregamos el boton al span.
    lugarProducto.appendChild(botonEliminar);

    // Agregamos el span a la lista.
    miLista.appendChild(lugarProducto);

    // Agregamos la lista a la lista desordenada.
    listaProductos.appendChild(miLista);
}

// Recorremos el array para renderizar los productos al cargar la pagina
for (const item of arrayProductos) {
    crearProducto(item);
}

// Creamos una función que escuchara los click y renderizara la información en pantalla.
botonAgregar.addEventListener("click", () => {
    const nombre = productoNombre.value;
    const precio = productoPrecio.value;
    // Validamos que el usuario haya introducido información y que no se encuentren vacio.
    if (nombre === "" || precio === "") {
        alert("Por favor completa todos los campos");
        return;
    }
    // Creamos un objeto que almacenara el nombre y el precio.
    const producto = {
        nombre: nombre,
        precio: precio
    };

    // Llamamos a la función que habiamos creado antes.
    crearProducto(producto)

    // Agregamos el producto al array.
    arrayProductos.push(producto)
    
    // Guardamos el array en el localStorage.
    localStorage.setItem("productos", JSON.stringify(arrayProductos));
})