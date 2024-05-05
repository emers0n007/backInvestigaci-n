const db = require("./ServiceUser");
const ctrl = require("./ControllerUser");

module.exports = ctrl(db);