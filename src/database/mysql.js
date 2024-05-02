const mysql = require('mysql2');
const config = require('../../config');

const dbConfig = {
    host: config.mysql.host,
    port: config.mysql.port,
    user: config.mysql.user,
    password: config.mysql.password,
    database: config.mysql.database,
}

let conexion;

function conexionMySql() {
    conexion = mysql.createConnection(dbConfig);
    conexion.connect((err) => {
        if (err) {
            console.log('[db error]', err);
            setTimeout(conexionMySql, 200);

        } else {
            console.log('DB Conectada');
        }
    });
    conexion.on('error', err => {
        console.log('[db error]', err);
        if (err.code === 'PROTOCOL_CONECTION_LOST') {
            conexionMySql();
        } else {
            throw err;
        }
    });
}

conexionMySql();

module.exports = conexion;

