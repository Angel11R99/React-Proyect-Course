// Gestion de Usuarios

// Primer Usuario
const primerUsuario = {
    nombre : 'Anthony',
    edad : 30,
    correo : 'anthony@email.com',
    activo: true,
    roles : {
        admin : true,
        editor : true
    }
}

// Segundo Usuario
const segundoUsuario = {
    nombre : 'Angel',
    edad : 25,
    correo : 'angel@email.com',
    activo : true,
    roles : {
        admin : false,
        editor : true
    }
}

// Array de Usuarios
const usuarios = [primerUsuario, segundoUsuario];

for (const numerousuarios of usuarios) {
    //console.log(numerousuarios);  
}

const { nombre, correo } = primerUsuario;

// console.log(`Ususario ${nombre} registrado con correo ${correo}`);

function cambiarEstado (primerUsuario, estado) {
    primerUsuario.activo = estado;
    return primerUsuario;
}

cambiarEstado(primerUsuario, true)

// console.log(primerUsuario)
