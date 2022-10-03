const express = require('express');
const { auth } = require('../Middleware/auth');
const { main } = require('../Controller/main');

const mainRoutes = express.Router();

mainRoutes.get('/', auth, main);

module.exports = { mainRoutes };
