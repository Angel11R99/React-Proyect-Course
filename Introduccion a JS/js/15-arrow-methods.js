// Arrays methods

const tecnologia = ['HTML', 'CSS', 'Java Script', 'Python', 'Laravel', 'React.js', 'Node.js']
const numeros = [10, 20, 30]

// Filter
const filter_resultado = numeros.filter((result) => result !== 10)
console.log(filter_resultado);

// Include
const include_resultado = tecnologia.includes('CSS')
console.log(include_resultado);

// Some - Devuelve si al menos uno cumple la condicion
const some_resultado = numeros.some(num => num > 10)
if (some_resultado) {
    console.log('Si hay elementos');
} else {
    console.log('No hay elementos');
}

// Find - Devuelve el primer elemento que cumple una condicion
const find_resultado = numeros.find(num => num > 20)
console.log(find_resultado);

// Every - Retorna true o false si todos cumplen la condicion
const erery_resultado = numeros.every(num => num > 5)
console.log(erery_resultado)

// Reduce - Retorna un acumulado del total
const reduce_resultado = numeros.reduce((total, numero) => {
    console.log(total)
    console.log(numero)

    return total + numero
}, 0)

console.log(reduce_resultado)