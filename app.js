const {argv} = require('./config/yargs')
const {crear, getListado, actualizar, borrar} = require('./por_hacer/por_hacer')
const colors = require('colors')
/* let comando = argv._[0] */
/* console.log(argv) */
let comando = argv._[0]
switch(comando){

    case 'crear':
        let nota = crear(argv.descripcion)
        console.log(nota)
        break

    case 'listar':
        let listado = getListado()
        if(listado.length === 0 ){
            console.log('No hay ninguna tarea !!')
        }else{
            console.log("############################# \n".yellow)
            console.log("######  tareas por hacer ### \n".yellow)
            for(let task of listado){
                console.log(`@ tarea :${task.descripcion} \n`.green)
                console.log(`- estado : ${task.completado} \n `.green)
            }
            console.log("############################# \n".yellow)
        }
        break

    case 'actualizar':
        actualizar(argv.descripcion)
        break

    case 'borrar':
        borrar(argv.descripcion)
        break

    default:
        console.log('comando invalido')
        break

    
}