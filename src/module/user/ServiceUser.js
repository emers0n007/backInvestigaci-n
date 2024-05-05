const connection = require("../../database/MySql");
const { error } = require("../../red/respuestas");

function searhAllUsers(table) {
    return new Promise((resolve, reject) => {
        connection.query(`SELECT p.id_person, p.name, p.nickname, p.phone, p.email, u.id_user, u.username, u.user_password FROM person p JOIN ${table} u ON p.id_person = u.id_person`, (error, result) => {
            return error ? reject(error) : resolve(result);
        });
    });
}

function searhOneUser(table, id, nickname) {
    return new Promise((resolve, reject) => {
        connection.query(`SELCT * FROM ${table} WHERE id_user = ${id}`)
    })
}

function addUser(table, data) {
    const values = Object.keys(data).map(key => `'${data[key]}'`).join(",");

    const query = `INSERT INTO ${table} (${Object.keys(data).join(",")}) SELECT id_person, ${values} FROM person WHERE person_type = "Usuario"`;

    return new Promise((resolve, reject) => {
        connection.query(query, (error, result) => {
            return error ? reject(error) : resolve(result);
        });
    });
}

module.exports = {
    searhAllUsers,
    searhOneUser,
    addUser
}