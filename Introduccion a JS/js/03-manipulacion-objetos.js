// Objetos - Manipulación

const producto = {
    nombre: "Monitor",
    precio: 300,
    disponible: true
}

// No se puede modificar un objeto congelado
Object.freeze(producto);

// Solo permite modificar propiedades existentes
Object.seal(producto);

// Reescribir un objeto
producto.disponible = false;
console.log(producto.disponible);

// Añadir propiedades
producto.imagen = "imagen.jpg";

// Eliminar propiedades
delete producto.precio;

console.log(producto);