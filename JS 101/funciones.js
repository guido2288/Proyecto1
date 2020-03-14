// Funcion expresada

let sumar = function(numeroA, numeroB){
    return numeroA + numeroB

}

console.log(sumar(7, 9));

// Función declarada

function restar(numeroC, numeroD){
    return  numeroC - numeroD;

}

console.log(restar (10, 3));

// Ejemplo de Scope

let mensaje = "hola" ; 

function saludar (){
    let mensaje = "Chau"
    return mensaje;
}

console.log(saludar());

function esPar (numero){
    return numero % 2 === 0;
}
console.log(esPar (10));

function anterior (numeroA){
    return numeroA - 1;

}
console.log(anterior(10));

function triple (numero){
    return numero * 3;

}
console.log (triple(3));

function anteriorDelTriple (numero){
    return triple (numero) - 1;
}
console.log (anteriorDelTriple(3));