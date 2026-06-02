//TAREA 1
//Creamos el objeto 
let producto = {
    yuca: {
        id: 1,
        nombre: "yuca",
        precio: 2000
    },
    piña: {
        id: 2,
        nombre: "piña",
        precio: 1500
    },
    tomate: {
        id: 3,
        nombre: "tomate",
        precio: 2500
    },
    ñame: {
        id: 4,
        nombre: "ñame",
        precio: 3000
    }
}


//TAREA 2
//Creamos la lista de números repetidos del 1 al 20
const listaDeRepetidos = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,14,14,15,15,16,16,17,17,18,18,19,19,20,20];

//Se crea un nuevo Set sin números repetidos usando el set y luego se imprime
const listaSinRepetidos = new Set(listaDeRepetidos);
console.log(listaSinRepetidos);

//Agregamos un nuevo número al Set y luego lo imprimimos
listaSinRepetidos.add(21);
console.log(listaSinRepetidos);

//Verificamos sin un número en especifico existe dentro del Set con ".has()"
console.log(listaSinRepetidos.has(20));

//Eliminamos el nuevo número que agregamos anteriormente con ".delete()"
listaSinRepetidos.delete(21);

//Recorremos el nuevo Set con "for...of" y imprimimos los valores
for (const numeros of listaDeRepetidos){
    console.log(numeros);
}


//TAREA 3
//Creamos un map
const miNuevoMap = new Map([
    ['marcasCarros','twingo'],
    ['sistemasOperativos','windows'],
    ['moda','gucci'],
    ['paises','colombia']
])

//TAREA 4
//Recorremos todos los datos y los imprimimos por consola
//for...in
for (item in producto) {
    console.log(producto);
}

//for..of
for (numero of listaSinRepetidos) {
    console.log(listaSinRepetidos);
}

//forEach()
miNuevoMap.forEach((clave, valor) => {
    console.log(clave + ": " + valor);
})
