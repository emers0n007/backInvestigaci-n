const connection = require("../../database/MySql")

function searhAllUsers(table) {
    return new Promise((resolve, reject) => {
        connection.query(`SELECT p.id_person, p.name, p.nickname, p.phone, p.email, u.id_user, u.username, u.user_password FROM person p JOIN ${table} u ON p.id_person = u.id_person`, (error, result) => {
            return error ? reject(error) : resolve(result);
        });
    });
}

function searhOneUser(table, id, nickname){
    return new Promise((resolve, reject) =>{
        connection.query(`SELCT * FROM ${table} WHERE id_user = ${id} OR `)
    })
}

module.exports = {
    searhAllUsers
}