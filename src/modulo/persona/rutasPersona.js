const express = require('express');
const respuestas = require('../../red/respuestas');
const controlador = require('./index');

const roouter = express.Router();

roouter.get('/:id',uno);
roouter.get('/',todos);
roouter.post('/',agregar);
roouter.put('/',eliminar);


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
        if(req.body.id == 0){
            mensage = 'guardado';
        }else{
            mensage = 'actualizado';
        }
        respuestas.success(req, res, mensage, 201);
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