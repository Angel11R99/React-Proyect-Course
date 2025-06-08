// Objetos - Unir Objetos

const producto = {
    nombre: "Monitor",
    precio: 300,
    disponible: true
}

const cliente = {
    nombre: "Alex",
    premium: true
}

const carrito = {
    cantidad: 3,
    ...producto
}

const pedido = {
    carrito: {...carrito},
    cliente: {...cliente}
}

// Object assign
const pedidoShort = Object.assign(carrito, cliente);

console.log(pedidoShort);