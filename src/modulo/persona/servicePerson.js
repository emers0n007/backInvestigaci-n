const conexion = require('../../database/mysql')

function todos(tabla) {
    return new Promise((resolve, reject) => {
        conexion.query(`SELECT * FROM ${tabla}`, (error, result) => {
            console.log("llegas")
            return error ? reject(error) : resolve(result);
        });
    });
}

function uno(tabla, id) {
    return new Promise((resolve, reject) => {
        conexion.query(`SELECT * FROM ${tabla} WHERE id=${id}`, (error, result) => {
            return error ? reject(error) : resolve(result);
        });
    });
}

function insertPersona(tabla, data) {
    console.log("DATA FUNCIÓN INSERT", data, tabla);

    const valores = Object.keys(data) // Obtiene los nombres de las propiedades del objeto
        .map(key => `'${data[key]}'`) // Crea un arreglo con los valores entre comillas simples
        .join(", "); // Une el arreglo en una cadena separada por comas

    const consulta = `INSERT INTO ${tabla} (${Object.keys(data).join(", ")}) VALUES (${valores})`;

    return new Promise((resolve, reject) => {
        conexion.query(consulta, (error, resultado) => {
            return error ? reject(error) : resolve(resultado);
        });
    });
}

function actualizar(tabla, data) {
    return new Promise((resolve, reject) => {
        conexion.query(`UPDATE ${tabla} SET ? WHERE id_person= ?`, [data, data.id_persona], (error, result) => {
            return error ? reject(error) : resolve(result);
        });
    });
}

function agregar(tabla, datos) {
    return insertPersona(tabla, datos);
}


function eliminar(tabla, data) {
    console.log("DATA", data.id_person)
    return new Promise((resolve, reject) => {
        conexion.query(`DELETE FROM ${tabla} WHERE id_person= ${data.id_person}`, (error, result) => {
            return error ? reject(error) : resolve(result);
        });
    });
}

module.exports = {
    todos,
    uno,
    agregar,
    eliminar,
}