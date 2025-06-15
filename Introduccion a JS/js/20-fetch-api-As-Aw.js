/* 
Fetch API con Async / Await
Info https://jsonplaceholder.typicode.com/ 
*/

const url = 'https://pokeapi.co/api/v2/pokemon/ditto'

const consultarAPI = async () => {
    try {
        const response = await fetch(url)
        const data = await response.json()
        console.log(data)
    } catch (error) {
        console.log(error);

    }
}

consultarAPI()