const mysql = require('mysql');
const config = require('../../config');

const dbConfig = {
    host:config.mysql.host,
    user:config.mysql.user,
    password:config.mysql.password,
    database:config.mysql.database,
    port:config.mysql.sqlport,
}

let conexion;

function conexionMySql(){
    conexion = mysql.createConnection(dbConfig);
    conexion.connect((err)=>{
        if(err){
            console.log('EROOOOOOOOOOOOOR')
            console.log('[db error]', err);
            setTimeout(conexionMySql(),200);
        }else{
            console.log('DB Conectada');
        }
    });
    conexion.on('error', err =>{
        console.log('[db error]', err);
        if(err.code === 'PROTOCOL_CONECTION_LOST'){
            conexionMySql();
        }else{
            throw err;
        }
    });
}

conexionMySql();

exports.module = conexion;