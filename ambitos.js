// Ámbito de las variables y constantes en JS

// Variables declaradas con var su ámbito
// será el de la función más próxima

var apellidos = "Pérez López"; // Global al declarar fuera de una función
var apellidos = "Martínez Pérez"; // Redeclarar no da error 

function setMayorEdad(edad) {
    if (edad >=18) {
        var adulto = true;
    } else {
        var adulto = false; // Con var se puede redeclarar y no provoca error
    }
    console.log(adulto);
}

setMayorEdad(24);

// Variables declaradas con let su ámbito
// será el de la estructura más próxima

function setPuntuacion(puntuacion) {
    if(puntuacion >= 5) {
        let apto = true;
        console.log(apto);
    } else {
        let apto = false;
        console.log(apto);
    }
    // console.log(apto); Error 
}

setPuntuacion(8);

{
    let a = 1;
    console.log(a);
}

// console.log(a); Error

// Para las constantes declaradas con const idem

// Variables declaradas sin var ni let serán siempre globales (mala praxis)

function getAreaTriangulo(a, b) {
    area = .5 * a * b;
}

getAreaTriangulo(10,2);

console.log(area); // Sin error porque area siempre será global