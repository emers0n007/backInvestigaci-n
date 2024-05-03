const express = require('express');
const respuestas = require('../../red/respuestas');
const controlador = require('./Index');

const roouter = express.Router();

roouter.get('/:id',uno);
roouter.get('/',todos);
roouter.post('/add',agregar);
roouter.delete('/delete',eliminar);


async function todos(req, res, next){
    try{
        const items = await controlador.todos();
        respuestas.success(req, res, items, 200);
    }catch(err){
        respuestas.error(req, res, err, 500);
    }  
};

async function uno(req, res){
    try{
        const items = await controlador.uno(req.params.id);
        respuestas.success(req, res, items, 200);
    }catch(err){
        respuestas.error(req, res, err, 500);
    }  
};

async function agregar(req, res, next){
    try{
        const items = await controlador.agregar(req.body);
            const menssage = 'guardado';
        respuestas.success(req, res, menssage, 201);
    }catch(err){
        next(err);
    }  
};

async function eliminar(req, res, next){
    try{
        const items = await controlador.eliminar(req.body);
        respuestas.success(req, res, 'eliminado', 200);
    }catch(err){
        next(err);
    }  
};

module.exports = roouter;