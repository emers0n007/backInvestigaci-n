const mysql = require('mysql2');
const config = require('../../config');

const dbConfig = {
    host:config.mysql.host,
    user:config.mysql.user,
    password:config.mysql.password,
    database:config.mysql.database,
}

let conexion;

const connection = "mysql://root:RVnlJWcAvSamyUKKsCUnJLqeGcPeKcFr@viaduct.proxy.rlwy.net:35504/railway";
function conexionMySql(){
    conexion = mysql.createConnection(connection);
    conexion.connect((err)=>{
        if(err){
            console.log('[db error]', err);
            //setTimeout(conexionMySql, 200);

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

module.exports = conexion;

