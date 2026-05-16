const nombre = prompt("¿Cual es tu nombre?");
const edad = Number(prompt("¿Cual es tu edad?"));

if (isNaN(edad) || edad <= 0 || !Number.isInteger(edad)) {
    const error = console.error("Error: Por favor, ingresa una edad válida en números.")
    alert(error)
}

if (edad < 18) {
    alert(`Hola ${nombre}, eres menor de edad. ¡Sigue aprendiendo y disfrutando del codigo!`)
} else {
    alert(`Hola ${nombre}, eres mayor de edad. ¡Preparate para grandes oportunidades en el mundo de la programación!`)
}