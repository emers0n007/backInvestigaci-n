const respuesta = require('./respuestas');

function errors(err, req, res, next){
    console.error(['error'], err);

    const mensage = err.message || 'error interno';
    const status = err.statusCode || 500;

    respuesta.error(req, res, mensage, status);
}

module.exports = errors;
