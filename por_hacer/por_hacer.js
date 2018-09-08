const fs = require('fs')

let listadoPorHacer = []

const saveDb = ()=> {
    let data = JSON.stringify(listadoPorHacer)

    fs.writeFile('db/db.json', data , e =>{
        if(e){
            throw new Error('no se pudo guardar', e)
        }else{
            console.log('nota guardada')
        }
    } )
}
const cargarDb = ()=>{
    try{
        listadoPorHacer = require('../db/db.json') 
    }catch (e){
        listadoPorHacer = []
    }
    
}
const crear = (descripcion)=>{
    cargarDb()
    let porHacer = {
        descripcion,
        completado: false
    }
    listadoPorHacer.push(porHacer)
    saveDb()
    return porHacer
}

const getListado = ()=>{
    cargarDb()
    return listadoPorHacer
}

const actualizar = (descripcion, completado = true)=>{
    cargarDb()
    let index = listadoPorHacer.findIndex(task => {
        return task.descripcion === descripcion
    })
    if(index >= 0){
        listadoPorHacer[index].completado = completado
        saveDb()
    }else{
        console.log(`la siguiente  tarea no se  encontro : ${descripcion} `)
    }
}
const borrar = (descripcion) =>{
    cargarDb()
    let index = listadoPorHacer.findIndex(task =>{
        return task.descripcion === descripcion
    })

    if(index >= 0){
        listadoPorHacer.splice(index,1)
        console.log(`'${descripcion}' , fue eliminada `)
        saveDb()
        console.log(getListado())
    }else{
        console.log('nota no encontrada')
    }
}

module.exports = { crear, getListado, actualizar, borrar }