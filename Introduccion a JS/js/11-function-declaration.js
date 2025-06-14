// Function Declaration

/* 
Nota:
- NaN => Not A Number.
- Las funciones se le asignan parametros `valor1, valor2` y lo que se le envia son los argumentos `sumar(12, 10)`. 
- Parametros por default `valor1 = 0, valor2 = 0` 
*/
function sumar (valor1 = 0, valor2 = 0) {
    return valor1 + valor2
}

// Export a las funciones para el recurso 18-exportar funciones.js
// Aplicamos un exporto para exportar una function y uzarla en otro lugar.

/* 
seguido en al etiquta script ponemos type="module" 
    <script type="module" src="js/11-function-declaration.js"></script>
*/
export function multiplicar(n1 = 0, n2 = 0) {
    return n1 + n2
}

/*
Export default. Nota: solo puede haber uno por archivo
*/

export default function dividir (n1, n2) {
    return n1 + n2
}