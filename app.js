const express = require('express');
const morgan = require('morgan');
const config = require('./config');


const app = express();

//middlewarer
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//config
app.set('port', config.app.port);

//rutas


module.exports = app;