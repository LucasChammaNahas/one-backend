const express = require('express');
const verifyLoginRequest = require('../Middleware/verifyLoginRequest');
const {login} = require('../Controller/controllerLogin');

const loginRoutes = express.Router();

loginRoutes.get('/', verifyLoginRequest, login);

module.exports = { loginRoutes };
