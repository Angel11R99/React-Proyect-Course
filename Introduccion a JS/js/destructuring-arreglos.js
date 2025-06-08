// Destructuring de Arreglos

const tecnologiaActual = ['Python', 'React', 'JS', 'Tailwind', 'CSS', 'HTML']

/* 
Nota:
- Accedes al valor del array `tecnologiaActual`, saltando parametros atraves de `,`
- El valor a cambiar no usa ningun tipo de comilla
- Adiferencia de los objetos que su destructuring usa `{}`, los arreglos usan `[]`
*/

// Sintaxis Antigua
const SASSANTIGUA = tecnologiaActual[4]

// Sintaxis Nueva
const [, , , , SASSNUEVA] = tecnologiaActual

console.log(SASSNUEVA);
