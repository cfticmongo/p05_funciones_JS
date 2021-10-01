// Hoisting en JS las declaraciones de variables o constantes 'se mueven' al principio de su ámbito
// mover la declaración, no el valor de la variable



function cuadrado(valor) {
    console.log(valor * valor);
}

cuadrado(a);

let a = 2; // No provoca error por falta de declaración pero si por acceso al valor