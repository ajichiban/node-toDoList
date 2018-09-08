const descripcion = {
    alias:'d',
    demand: true
}
const completado = {
    alias: 'c',
    default: false
}

const argv = require('yargs')
    .command('crear', 'Crear un elemento por hacer',{descripcion})
    .command('actualizar', 'Actualiza el estado completado de una tarea',{
        descripcion,
        completado
    })
    .command('borrar', 'elimina una nota de la lista',{descripcion})
    .help()
    .argv

module.exports = {argv}