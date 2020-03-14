let peliculasAccion = ["Rambo", "Avengers", "Spiderman"];

let peliculasComedia = ["Mi Pobre Angelito", "The hangover"];

let todasLasPelis = [...peliculasAccion, ...peliculasComedia];// con los ... nos permite unir ambos arrays

//console.log(todasLasPelis);


let generoComedia = {
    nombreGenero : "Comedia",
    popularidad : 3 

};

let miPobreAngelito = {
    titulo: "Mi Pobre Angelito",
    ranking: 1,
    duracion: 120,
    ...generoComedia
};

let theHangover = {
    titulo: "The Hangover",
    ranking: 3,
    duracion: 135,
    ...generoComedia
};

//console.log(theHangover)

//para agregar las propiedades nombreGenero y popularidad


//Uso en funciones

function limpiarEspacios (...palabras){
    console.log(palabras);
}

limpiarEspacios("Hola", "que", "tal");
limpiarEspacios("Hola" , "mundo");


