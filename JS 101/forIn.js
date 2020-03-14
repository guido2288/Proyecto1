let persona = {
    nombre : "Alan",
    apellido : "Rios",
    edad :  28

};

// ForIn recorre todas las propiedades del objeto literario

for (const key in persona) {
    console.log(persona[key]);
}