//Asincronismo

 function alarma1(){
     return "Despertate son las 9:10am";
 }

 function alarma2(){
     return "Son las 9am te quedan 10min";
 }

 //Para que se ejecute alarma2 primero, tenemos que demorar alarma1

setTimeout(function() {
    console.log(alarma1());

}, 10000); //Tiempo que quiero que demore esta accion.
console.log(alarma2());