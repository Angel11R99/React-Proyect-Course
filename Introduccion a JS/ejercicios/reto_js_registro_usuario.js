/*
Nota: Error a la hora de validar el tema de la edad.
*/

//  Recibir Datos

const nombre = 'Anthony';
const apellido = 'Sosa';
const correo = 'anthony.sosa@example.com';
const edad = 28;
const ciudad = 'monterrey';

// Objeto Usuario

const usuario = {
    nombreCompleto: `${nombre} ${apellido}`,
    correo: `${correo}`,
    ciudad: `${ciudad}`
}

const { correo: Correo, ciudad: Ciudad } = usuario;

function tomarObjeto(usuario) {
    return `Bienvenido ${usuario.nombreCompleto} de ${usuario.ciudad}. Te hemos registrado con el correo: ${usuario.correo}`
}

// Actualizar le Objeto
const fechaRegistro = new Date();
usuario.fecha = fechaRegistro;

console.log(tomarObjeto(usuario));
