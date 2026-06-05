// GET
async function obtenerProductos() {
    const respuesta = await fetch("http://localhost:1389/productos");
    const datos = await respuesta.json();
    return datos;
}

// POST
async function crearProductoAPI(producto) {
    const respuesta = await fetch ("http://localhost:1389/productos", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(producto)
    });
    const datos = await respuesta.json();
    return datos;
}

// PUT
async function actualizarProductoAPI(id, dato) {
    const respuesta = await fetch (`http://localhost:1389/productos/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(dato)
    });
    const datos = await respuesta.json();
    return datos;
}

// DELETE
async function eliminarProductoAPI(id) {
    const respuesta = await fetch (`http://localhost:1389/productos/${id}`, {
        method: "DELETE",
    });
    return respuesta;
}