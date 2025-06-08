// Objetos - Destructuring

const producto = {
    nombre: "Monitor",
    precio: 300,
    disponible: true
}

const cliente = {
    nombre: "Alex",
    premium: true,
    direccion: {
        ciudad: "Madrid",
        pais: "España"
    }
}

const { nombre } = producto;
const { nombre: nombreCliente, direccion: { ciudad } } = cliente;

console.log(ciudad);