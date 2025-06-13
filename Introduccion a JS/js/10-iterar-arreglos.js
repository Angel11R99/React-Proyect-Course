const tecnologiaActual = ['Python', 'React', 'JS', 'Tailwind', 'CSS', 'HTML', 'SASS']

// Forma tradicional
for (let i = 0; i < tecnologiaActual.length; i++) {
    console.log(tecnologiaActual[i]);
}

// forEach (no genera un arreglo nuevo)
tecnologiaActual.forEach(function (techfor) {
    console.log(techfor);
})

// map (genera un arreglo nuevo)
tecnologiaActual.map(function (techmap) {
    console.log(techmap);
})

// for...of
for (const tech of tecnologiaActual) {
    console.log(tech);
}