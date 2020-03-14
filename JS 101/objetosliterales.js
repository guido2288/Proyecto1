let curso = {
    cantidad_de_alumnos: 32,
    horario: "De 8.30 a 12hs",
    docentes: "Nacho y Javi",
    notificaciones: function(){
        return "El horario de tu comisión es: " + this.horario
    }
}

function Curso(cantidad_de_alumnos, docentes, horario){ // funcion para crear nuevas variables con los mismos parametros
    this.cantidad_de_alumnos = cantidad_de_alumnos,
    this.docentes = docentes,
    this.horario = horario
    
}

let curso_1 = new Curso(40, "Javi y Lando", "de 18.30 a 22hs");
let curso_2 = new Curso(32, "Javi y Lando", "de 17.30 a 21hs");
console.log(Curso);