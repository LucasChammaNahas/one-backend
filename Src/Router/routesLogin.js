const express = require('express');
const { verifyLoginRequest } = require('../Middleware/verifyLoginRequest');
const { login } = require('../Controller/login');
const { register } = require('../Controller/register');

const loginRoutes = express.Router();

loginRoutes.get('/', verifyLoginRequest, login);
loginRoutes.get('/register', verifyLoginRequest, register);

module.exports = { loginRoutes };
