/* 
Fetch API con promese
Info https://jsonplaceholder.typicode.com/ 
*/

const url = 'https://pokeapi.co/api/v2/pokemon/'

fetch(url)
    .then((pokeRespuesta) => {
        return pokeRespuesta.json()
    })
    .then(pokeResutaldo => {
        console.log(pokeResutaldo)
    })
    .catch(pokeError => {
        console.log(pokeError);
    })