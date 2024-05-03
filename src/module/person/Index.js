const db = require('./ServicePerson');
const ctrl = require('./ControllerPerson');


module.exports = ctrl(db);