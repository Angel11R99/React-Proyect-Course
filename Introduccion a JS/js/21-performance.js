/* 
Performance Multiple Sync / Await
Info https://jsonplaceholder.typicode.com/ 
*/

const url1 = 'https://pokeapi.co/api/v2/pokemon/ditto'
const url2 = 'https://pokeapi.co/api/v2/pokemon/'

// const consultarAPI = async () => {
//     try {
//         const inicio = performance.now()
        
//         const response = await fetch(url)
//         const data = await response.json()
//         console.log(data)

//         const response2 = await fetch(url2)
//         const data2 = await response2.json()
//         console.log(data2)

//         const fin = performance.now()
//         console.log(`el resultado es ${fin - inicio} ms`);
        
//     } catch (error) {
//         console.log(error);

//     }
// }

// consultarAPI()


const consultarAPI = async () => {
    try {
        const inicio = performance.now()
        
        const [response1, response2] = await Promise.all([fetch(url1), fetch(url2)])
        
        const [data1, data2] = await Promise.all([response1.json(), response2.json()])

        console.log(data1)

        console.log(data2)

        const fin = performance.now()
        console.log(`el resultado es ${fin - inicio} ms`);
        
    } catch (error) {
        console.log(error);

    }
}

consultarAPI()