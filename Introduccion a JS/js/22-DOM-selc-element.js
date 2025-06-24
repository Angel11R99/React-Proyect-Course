// Selector

/* 
Todos los lectores inician con document, esto se refiere a toda la pagina en general

Diferencia entre query selector y query selector all 
*/

// querySelector va a traer solo un elemento, si no existe no te trae nada.

const heading = document.querySelector('.heading')

console.log(heading)

// querySelectorAll va a traer todo los elemento que corresponden a este selector.

const enlaces = document.querySelectorAll('.navegacion a')

console.log(enlaces)