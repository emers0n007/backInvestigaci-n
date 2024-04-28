const express = require('express');
const morgan = require('morgan');
const config = require('./config');

const persona = require('./src/modulo/persona/rutasPersona');
const error = require('./src/red/errors');

const app = express();

//middlewarer
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//config
app.set('port', config.app.port);

//rutas
app.use('/api/persona', persona);
app.use(error);

module.exports = app;