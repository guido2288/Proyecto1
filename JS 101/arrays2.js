let notas = [3, 5, 8, 10, 9, 7, 8, 8];

//Metodo Map necesita un array de origen y va a retornar un array

let notasHasta100 = notas.map(function(numero){ //recibe una funcion callback
     return numero * 10; //Aplica la funcion para cada numero del array
});

console.log(notasHasta100);

//Metodo filter 
let notasAprobadas = notas.filter(function (numero){
    return numero >= 4 ; //aplica un filtro para retornar si se cumplo la condicion
});

console.log(notasAprobadas);

//Metodo reduce (no devuelve un array)
let resultadoFinal = notas.reduce(function(estado, numero){ //Recibe 2 variables, el estado actual y el numero del array
    return estado + numero;
});

console.log(resultadoFinal);

//Metodo forEach realiza una accion para cada uno de los elementos no retorna nada

notas.forEach(function(valor, indice){
    console.log("El valor " + valor + " esta en el indice " + indice);
})

