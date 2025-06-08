# React con ES6 javascript

### Nota: 
- React es una libreria basada en JavaScript.

## Objetos en JS
En JavaScript, un objeto es una estructura de datos que almacena información en forma de pares clave-valor. Estos pares clave-valor permiten agrupar datos relacionados y organizarlos de manera estructurada. En otras palabras, un objeto es como una caja donde puedes guardar diferentes tipos de información, cada una identificada por una etiqueta o clave. 
Concepto fundamental:
- Clave (Key): Es un nombre que identifica una propiedad del objeto.
- Valor (Value): Es el dato que está asociado con esa clave.
- Propiedades: Son los pares clave-valor que conforman el objeto. 
- Métodos: Son funciones que están asociadas al objeto y pueden realizar operaciones con los datos del objeto. 

 ## Destructuring de objetos
 - La "desestructuración" (destructuring) de un objeto en JavaScript es una característica poderosa que te permite extraer propiedades de un objeto y asignarlas a variables individuales de una manera concisa y legible. Introducida en ES6 (ECMAScript 2015), facilita mucho el trabajo con objetos, especialmente cuando se trata de acceder a múltiples propiedades.

***¿Cómo funciona la desestructuración de objetos?***
La sintaxis básica para desestructurar un objeto es la siguiente:

```js
 const objeto = {
    propiedad1: "valor1",
    propiedad2: "valor2",
    propiedad3: "valor3"
 }

 const { propiedad1, propiedad2 } = objeto;

 console.log(propiedad1);
```

- 1. Tenemos un objeto ```objeto``` con tres propiedades.
- 2. Utilizamos las llaves ```{}``` en el lado izquierdo de la asignación para indicar que estamos desestructurando un objeto.
- 3. Dentro de las llaves, enumeramos los nombres de las propiedades que queremos extraer (```propiedad1```, ```propiedad2```).
- 4. JavaScript buscará esas propiedades en el ```objeto``` y asignará sus valores a variables con el mismo nombre.

## Manipulacion de objetos

```js

// No se puede modificar un objeto congelado
Object.freeze(producto);

// Solo permite modificar propiedades existentes
Object.seal(producto);

// Reescribir un objeto
producto.disponible = false;

```

## Unión de objetos

<details>

 <Summary>Object assaign</Summary>

Es un método de JavaScript que se utiliza para copiar propiedades de uno o más objetos a un objeto de destino. Básicamente, fusiona las propiedades de los objetos fuente en el objeto de destino. 

```js
    Object.assign()
```

</details>

<br>

```js
// Objeto Uno
const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 300,
    disponible: true
}

// Objeto Dos
const medidas = {
    peso: "1kg",
    medida: 15.5
}

// Usando Spread Operator (...)
const pedido = {
    ...producto,
    ...medidas,
    valor: 500
}

// Usando Object.assign
const nuevoProducto - Object.assign(producto, medidas);

console.log(pedido); // Usando Spread Operator
console.log(nuevoProducto); // Usando Object.assign
```

## Arrays o Arreglos

<details>
    <summary>Descripción</summary>
    Los arrays son objetos similares a una lista cuyo prototipo proporciona métodos para efectuar operaciones de recorrido y de mutación. Tanto la longitud como el tipo de los elementos de un array son variables. Dado que la longitud de un array puede cambiar en cualquier momento, y los datos se pueden almacenar en ubicaciones no contiguas, no hay garantía de que los arrays de JavaScript sean densos; esto depende de cómo el programador elija usarlos. En general estas características son cómodas, pero si, en su caso particular, no resultan deseables, puede considerar el uso de arrays con tipo.
</details>
<br>

```js
// Estructura de un array:
const parametros = [10, 20, 30]

console.table(parametros[1])
```

En React, no se recomienda usar mutación de arrays directamente. En su lugar, se deben crear nuevas copias de los arrays para evitar efectos secundarios no deseados. Esto se puede lograr utilizando métodos como `map`, `filter`, `reduce`, entre otros.

<details>
    <summary>Diferencia entre forEach y map</summary>

    La principal diferencia entre forEach y map en JavaScript es la forma en que manipulan los datos y el valor que devuelven.

    forEach itera sobre un array y ejecuta una función para cada elemento, pero no modifica el array original y no devuelve nada.

    map, por otro lado, itera sobre un array, aplica una función a cada elemento y crea un nuevo array con los resultados de la transformación, dejando el array original sin cambios. 
</details>
<br>

[Saber si ***es*** o ***no*** mutable](https://doesitmutate.xyz/)