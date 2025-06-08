// Tipos de Datos
// Para saber el tipo de dato de una variable, usamos el operador typeof

// String
let string = "Esto es una cadena de caracteres";
console.log(typeof string); // Devuelve string

// Number
let number = 10;
let number2 = 10.5; // Números con decimales son de tipo number
console.log(typeof number); // Devuelve number

// Boolean
let boolean = true;
console.log(typeof boolean); // Devuelve boolean

// Null
let nullValue = null;
console.log(typeof nullValue); // Devuelve null

// Undefined
let undefinedValue;
console.log(typeof undefinedValue); // Devuelve undefined

// BigInt
let numeroGrande = BigInt(524124324234234234234234234234234234);
console.log(typeof numeroGrande); // Devuelve BigInt

// Symbol
// Symbols son objetos únicos, no hay dos iguales aunque tenga el mismo valor.
let symbolOne = Symbol(1);
let symbolTwo = Symbol(1);
console.log(symbolOne === symbolTwo); // Devuelve false, son diferentes