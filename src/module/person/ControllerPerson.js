
const TABLA = 'person';

module.exports = function (dbInyectada) {
    let db = dbInyectada

    if (!db) {
        db = require('./ServicePerson');
    }
    function todos() {
        return db.todos(TABLA);
    }

    function uno(id) {
        return db.uno(TABLA, id);
    }

    function agregar(body) {
        return db.agregar(TABLA, body);
    }

    function eliminar(body) {
        return db.eliminar(TABLA, body);
    }

    return {
        todos,
        uno,
        eliminar,
        agregar
    }


};