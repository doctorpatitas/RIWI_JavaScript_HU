//TASK 2
//Seleccionamos el input, boton y la lista desorganizada 
//Seleccionamos primero el input
const input = document.querySelector("#entrada");

//Seleccionamos ahora el boton
const miBoton = document.querySelector("#botonAgregar");

//Ahora seleccionamos la lista desorganizada
const listaDeNotas = document.querySelector("#listaNotas");

//Y ahora los imprimimos para verificar que existen
console.log(input);
console.log(miBoton);
console.log(listaDeNotas);


//TASK 3
//Agregamos una función para que cuando escuche el evento del click, agregue el contenido del input a la lista, para luego mostrarlo en pantalla
miBoton.addEventListener("click", () => {
    const nota = input.value;
    listaDeNotas.innerHTML += `
    <li id="itemLista">
    ${nota} <button onclick="eliminarNota(this)" id="botonEliminar">X</button>
    </li>
    `;
})

//Codigo del boton que elimina la nota
function eliminarNota(item) {
    const nota = item.closest("#itemLista");
    nota.remove()
}