let clima = "Lluvia" ;
let dia = "Lunes" ;

if ( clima == "Soleado" && dia == "Domingo"){
    console.log("Lindo dia para pasear");
}else if ( clima == "Soleado" && dia == "Lunes"){
    console.log ("Podria Salir Igual");
}else {
    console.log("Mejor me Quedo en Casa");
}

let lenguaje = "nose"

if (lenguaje == "javascript"){
    console.log("Estoy aprendiendo");
}else {
    console.log("Lo aprenderé mas adelante");
}

function puedePasar (nombre){
    if (nombre == "Cosme Fulanito"){
        return false
    } else {
        return true ;
    }
} 
console.log(puedePasar ("Natalia"))