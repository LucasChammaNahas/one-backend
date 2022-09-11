const express = require("express");
const verifyLoginRequest = require("../Middleware/verifyLoginRequest");
const ctrl = require("../Controller/controllerLogin");

const loginRoutes = express.Router();

loginRoutes.get("/", verifyLoginRequest, ctrl.login);

module.exports = { loginRoutes };
