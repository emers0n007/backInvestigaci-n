const express = require('express');
const morgan = require('morgan');
const config = require('./config');
const cors = require("cors");
const persona = require('./src/module/person/Routes');
const user = require('./src/module/user/Routes');
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
app.use('/api/user', user);
app.use(error);

app.use(
    cors({
      origin: "*"
    })
  );

module.exports = app;