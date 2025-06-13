const estudiante1 = {
    nombre: 'Jose',
    presente: false
}

const estudiante2 = {
    nombre: 'Angel',
    presente: true
}

const estudiante3 = {
    nombre: 'Juan',
    presente: true
}

// Array con los objetos
const asistencia = [{ ...estudiante1 }, { ...estudiante2 }, { ...estudiante3 }]

// console.table(asistencia);

// Lista los estudiantes y muestra si esta presentes o ausentes
const litarAsistencia = asistencia.forEach(function (asis) {
    console.log(`el estudiante ${asis.nombre} esta ${asis.presente ? 'Presente' : 'Ausente'}`);
})

asistencia.map(function (numAsis) {
    if (numAsis.presente) {
        console.log(`Presentes`);
        
    }
})

// Manera de victor
const contador=()=>{
    let present= asistencia.filter(estudiante=>estudiante.presente).length
    console.log(`Existen ${present} presentes`)
}

contador()

// Callback
