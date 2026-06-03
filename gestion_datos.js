////////////
// TASK 5 //
////////////
//Creamos el array que va a guardar las notas
let notasArray = [];

//Revisamos si habia algo cada que carga la pagina
const cargarPagina = localStorage.getItem("notas");
if (cargarPagina) {
    notasArray = JSON.parse(cargarPagina);
}

////////////
// TASK 2 //
////////////
//Seleccionamos el input, boton y la lista desorganizada 
//Seleccionamos primero el input
const input = document.querySelector("#entrada");

//Seleccionamos ahora el boton
const miBoton = document.getElementById("botonAgregar");

//Ahora seleccionamos la lista desorganizada
const listaDeNotas = document.querySelector("#listaNotas");

//Y ahora los imprimimos para verificar que existen
console.log(input);
console.log(miBoton);
console.log(listaDeNotas);


////////////
// TASK 3 //
////////////
//Agregamos una función para que cuando escuche el evento del click, agregue el contenido del input a la lista, para luego mostrarlo en pantalla
function crearNota(nota){   
    //Creamos el li y el boton
    //Creamos el li
    const miLi = document.createElement("li");
    miLi.textContent = "Nota: ";
    //Creamos el boton que elimina la nota
    const botonEliminar = document.createElement("button");
    botonEliminar.textContent = "Eliminar";

    ////////////
    // TASK 4 //
    ////////////
    //Se agrega la función del boton para eliminar la nota y se imprime
    botonEliminar.addEventListener("click", () => {
        listaDeNotas.removeChild(miLi);
        console.log("¡Su nota ha sido eliminada!");
        notasArray = notasArray.filter(n => n !== nota);
        localStorage.setItem("notas", JSON.stringify(notasArray));
    })

    //Creamos el lugar donde va la nota
    const lugarNota = document.createElement("span");
    lugarNota.textContent = `${nota}`;

    //Agregamos el boton al span
    lugarNota.appendChild(botonEliminar);

    //Agregamos el boton dentro del li
    miLi.appendChild(lugarNota);

    //Agregamos el li y el boton con appendChild
    listaDeNotas.appendChild(miLi);
}

//Recorremos el array para renderizar las notas al cargar la pagina
for (const nota of notasArray) {
    crearNota(nota);
}

miBoton.addEventListener("click", () => {
    //Validamos que la nota no este vacia
    const nota = input.value;
    if (nota == "") {
        alert("Por favor, introduzca una nota.");
        return; 
    }

    //Llamos a la función que habiamos creado con anterioridad
    crearNota(nota)

    //Agregamos la nota al array
    notasArray.push(nota);

    //Guardamos el array en el LocalStorage
    localStorage.setItem("notas", JSON.stringify(notasArray));
})

//Codigo del boton que elimina la nota
function eliminarNota(item) {
    const li = item.parentElement;
    li.remove()
}