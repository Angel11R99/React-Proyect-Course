// Eventos del DOM - Clicks
// Url para ver eventos https://developer.mozilla.org/es/docs/Web/API/Element

const heading = document.querySelector('.heading')

// heading.addEventListener('click', () => {
//     heading.textContent = 'Hola Mundo'
// })

const enlaces = document.querySelectorAll('.navegacion a')

// enlaces.forEach((enlace) => {
//     enlace.addEventListener('click', (e) => {
//         e.preventDefault()
//         e.target.textContent = 'Diste Click'
//         // console.log(`Diste click`)
//     })
// })

// Forma distinta de hacerlo
enlaces.forEach(enlace => enlace.addEventListener('click', () => {
    enlace.textContent = 'Diste click'
}))