//Sin usar destructuring

//let colores = ["Rojo", "Azul", "Amarillo"];
let azul = colores[1];

let auto = {
    marca : "Ford",
    año : 1998
};
let marcaAuto = auto.marca;


//Usando destructuring

let colores = ["Rojo", "Azul", "Amarillo"];
let [rojo, azul, amarillo] = colores;

console.log(colores);