// Funciones en JS

// Con la palabra function (clásica)
// function <identificador> (<parámetros>) {
// Código a ejecutar cuando se invoque la función
// return <valor>    
// }
// <identicador> (<argumentos>);

suma(5, 7); // se puede llamar antes de su declaración (mala práctica)

function suma(a, b) { // declaración de la función
    console.log(a + b);
}

suma(10, 4); // invocación de la función

// Funciones que retornan valor

function division(a, b) {
    return a / b; // La invocación devolverá el resultado de esa expresión
    console.log('Hola'); // Por debajo de return no se ejecuta código
}

let resultado = division(12, 6);
console.log(resultado);

// Funciones de expresión con function (anónimas)

const cuadrado = function (a) {
    return (a*a);
}

cuadrado(4);

console.log(cuadrado)

// Funciones flecha ECMA6 (de expresión y anónimas)

// const cubo = (a) => {
//     return a * a * a;
// }

// Si solo tiene un parámetro se pueden aliviar los paréntesis
// Si solo tiene una línea de código en el cuerpo de la función se pueden aliviar las llaves
// Si solo tiene una línea de código return se puede aliviar
// Si no tuviera parámetros los paréntesis se pueden cambiar por underscore _

const cubo = a => a * a * a;

console.log(cubo(5));

// Autoinvocadas (<funcion-anónima>)()

(function (mensaje) {
    mensaje = 'Hola';
    console.log(mensaje);
})() // La autoinvocación se produce al añadirle paréntesis al contexto donde se declara




