const db = require('./servicePerson');
const ctrl = require('./ControllerPerson');


module.exports = ctrl(db);