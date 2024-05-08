const express = require("express");
const controller = require("./index");
const reply = require("../../red/respuestas");
const router = express.Router();

//endPoints
router.get("/", searhAllUsers);
router.post("/add", addUser);
router.delete("/delete", disableUser);


async function searhAllUsers(req, res) {
    try {
        const items = await controller.searhAllUsers();
        reply.success(req, res, items, 200);
    } catch (error) {
        reply.error(req, res, items, 500);
    }
}

async function addUser(req, res) {
    try {
        const items = await controller.addUser(req.body);
        const menssage = "Guardado";
        reply.success(req, res, menssage, 201);
    } catch (error) {
        console.log(error);
        reply.error(req, res, error, 500);
    }
}

async function disableUser(req, res) {
    try {
        const items = await controller.disableUser(req.body);
        const menssage = "eliminado";
        reply.success(req, res, menssage, 201);
    } catch (error) {
        console.log(error);
        reply.error(req, res, error, 500);
    }
}

module.exports = router;