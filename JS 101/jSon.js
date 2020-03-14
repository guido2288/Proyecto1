//JON stringify convierte Array en "String"

let amigos = ["Alan", "Pablo","Dani", "Ivo"];

let amigosJSON = JSON.stringify(amigos);

console.log(amigosJSON);

//JON parse devuelve el formato a Array

let amigosOriginal = JSON.parse(amigosJSON);

console.log(amigosOriginal);

// Con objeto Literal

let persona = {
    nombre : "Guido",
    apellido : "Garcia",
    edad : 31,
    ciudad : "Buenos Aires"
};

//JSON stringify nos permite convertir el Objeto literal persona a un STRING

let personaJSON = JSON.stringify(persona);

console.log(personaJSON);

//JSON parse nos permite retomar el objeto en su forma original (Objeto Literal)

let personaOriginal = JSON.parse(personaJSON);

console.log(personaOriginal);