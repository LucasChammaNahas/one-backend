const express = require("express");
const ctrl = require("../Controller/controllerLogin");

const loginRoutes = express.Router();

loginRoutes.get("/", ctrl.login);

module.exports = { loginRoutes };
