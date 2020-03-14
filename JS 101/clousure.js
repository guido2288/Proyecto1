function saludar (persona){
    let mensaje = "Bienvenido";
    function nombre (){
        return mensaje + " " + persona;
    }
    return nombre ();
}

console.log(saludar("Nacho"));