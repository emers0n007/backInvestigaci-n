const db = require('./servicePerson');
const mysql = require('../../database/mysql');

const TABLA = 'Persona';


module.exports = function (dbInyectada) {
    let db= dbInyectada

    if(!db){
        db =  require('./servicePerson');
    }
    function todos(){
        return db.todos(TABLA);
    }
    
    function uno(id){
        return db.uno(TABLA, id);
    }
    
    function agregar(body){
        return db.agregar(TABLA, body);
    }
    
    function eliminar(body){
        return db.eliminar(TABLA, body);
    }

    return {
        todos,
        uno,
        eliminar,
        agregar
    }

    
};