const db = require('./servicePerson');
const ctrl = require('./controladorPersona');


module.exports = ctrl(db);