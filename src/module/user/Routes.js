const express = require("express");
const controller = require("./index");
const reply = require("../../red/respuestas");
const router = express.Router();

//endPoints
router.get("/", searhAllUsers);


async function searhAllUsers(req, res) {
    try {
        const items = await controller.searhAllUsers();
        reply.success(req, res, items, 200);
    } catch (error) {
        reply.error(req, res, items, 500);
    }
}

module.exports = router;