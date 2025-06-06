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

## Object assaign
```js
    Object.assign()
```    
 - Es un método de JavaScript que se utiliza para copiar propiedades de uno o más objetos a un objeto de destino. Básicamente, fusiona las propiedades de los objetos fuente en el objeto de destino. 

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