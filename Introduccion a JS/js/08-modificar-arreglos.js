// Modificar un arreglos

const tecnologiaActual = ['Python', 'React', 'JS', 'Tailwind', 'CSS', 'HTML']

/* Agregando nuevo valores al arreglo anterior.
Crear una `const` nueva, tomar todo del arreglo anterior `tecnologias`, y agregar lo nuevo.

En pocas palabras es:
Toma todo lo anterior y agrega esto. */

const nuevoArreglo = [...tecnologiaActual, 'Angular']

// const tecnologiaNueva = tecnologiaActual.filter( function (tech) { // tech es cada uno de los elementos dentro del array de tecnologia
//     if (tech !== 'HTML') {
//         return tech
//     }
// })

const tecnologiaNueva = tecnologiaActual.map( function (tech) { // tech es cada uno de los elementos dentro del array de tecnologia
    if (tech === 'Tailwind') {
        return 'Boostrap'
    } else {
        return tech
    }
})

console.table(tecnologiaNueva)