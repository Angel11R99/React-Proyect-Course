// Operadores and y Or

const saldoOne = 3000
const saldoTwo = 500
tarjeta1 = false

if (saldoOne >= saldoTwo || tarjeta1) {
    console.log('Puedes Pagar');
    
} else {
    console.log('No Puedes Pagar');
    
}

// Operadores ternarios 

const auth = false
const saldo = 300
const pagar = 500
tarjeta = true

// Si se cumple ? mas si no se cumple : `Luego de ? un resultado, luego : otro resultado.
// auth ? console.log('se cumple la condicion') : console.log('no se cumple la condicion');

// saldo >= pagar ? console.log('Puedes Pagar') : console.log('No puedes pagar'); // forma simple con condiciones

// saldo >= pagar ? console.log('Puedes Pagar') : tarjeta ? console.log('Puedes Pagar Con Tarjeta') : console.log('No Puedes Pagar'); // Mas complejo que el anterior

// saldo >= pagar || tarjeta ? console.log('Puedes Pagar') : console.log('No Puedes Pagar'); // Obtimizado

// Optional Chaining (?)
const alumno = {
    nombre: 'Alex',
    clase: 'Programacion',
    aprobado: true
}

// Revisa si existe el valor, en caso que no, `No rompe el codigo
console.log(alumno.examenes?.examen);
// Siguiente linea de codigo.
console.log('Siguiente linea de codigo');

// Nullish coolescing operator (??) retorna el valor de la izquierda `1` en caso de que el primero o de la derecha se null o undefine
const pagina = null ?? 1
console.log(pagina);

// Evaluación del Corto-ciruito &&

/*El cortocircuito ahorra tiempo y evita ejecutar código innecesario, 
porque detiene la evaluación cuando ya sabe el resultado final.*/
const authCorto = true

authCorto && console.log('Usuario Autenticado')