let notas = [3, 5, 8, 10, 9, 7, 8, 8];

//indexOf nos permite determinar en que posicion esta el valor

let primeraPosicionDelOcho = notas.indexOf(8); //nos da la posicion del primer 8 de iquierda a derecha

//lastIndexOf nos permite determinar la ultima posicion del valor

let ultimaPosicionDelOcho = notas.lastIndexOf(8);
console.log(primeraPosicionDelOcho);
console.log (ultimaPosicionDelOcho);

 if (primeraPosicionDelOcho != -1){ 
     console.log("Lo Encontre")
 }

 //join

 let resultadoJuntado = notas.join(" ** ") //Los une y entre() va el espacio entre cada valor que quiero visualizar

 console.log(resultadoJuntado);



