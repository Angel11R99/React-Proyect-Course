// Manipular elemento (HTML con CSS)

const heading = document.querySelector('.heading')
const enlaces = document.querySelectorAll('.navegacion a')

enlaces[3].textContent = 'Enlace Final'

heading.textContent = 'Nuevo Objeto'
// heading.id = 5
// heading.removeAttribute('id')

const inputNombre = document.querySelector('#nombre')
inputNombre.value = 'nuevo valor'