// Funcion que retorna valores

const sumar = function (valor1 = 0, valor2 = 0) {
    return valor1 + valor2
}
// si la funcion retorna algo `return` se puede almacenar en variables
const resultado = sumar(10, 12)
console.log(resultado);

// Otra forma de hacerlo con arrow function
const sumarShort = (valor1 = 0, valor2 = 0) => valor1 + valor2