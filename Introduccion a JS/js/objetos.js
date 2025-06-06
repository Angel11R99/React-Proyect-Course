// Objetos

const producto = {
    nombre: "Monitor",
    precio: 300,
    disponible: true
}

console.log(typeof producto);
console.log(producto.precio); // Acceso a una propiedad del objeto
console.log(producto); // Muestra el objeto en una tabla


// Destructuring de objetos
const { nombre } = producto;
console.log(typeof nombre);

// Objeto literal Enhacement
const precio = 500;
const articulo = "Tablet";

const nuevoProducto = {
    precio,
    articulo
}

console.log(nuevoProducto); // Objeto con propiedades Dinamicas.