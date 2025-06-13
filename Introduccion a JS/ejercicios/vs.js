const estudiante1 = {
    nombre: 'Jose',
    presente: 'Presente'
}

const estudiante2 = {
    nombre: 'Angel',
    presente: 'Ausente'
}

const estudiante3 = {
    nombre: 'Juan',
    presente: 'Presente'
}

// Array con los objetos
const asistencia = [{ ...estudiante1 }, { ...estudiante2 }, { ...estudiante3 }]

// console.table(asistencia);

// Lista los estudiantes y muestra si esta presentes o ausentes
const litarAsistencia = asistencia.forEach(function (asis) {
    console.log(`el estudiante ${asis.nombre} esta ${asis.presente === 'Presente' ? 'Presente' : 'Ausente'}`);
})

asistencia.map(function (numAsis) {
    if (numAsis.presente === 'Presente') {
        console.log(numAsis.presente);
        
    }
})
