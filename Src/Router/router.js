const express = require('express');
const { loginRoutes } = require('./routesLogin');
const { mainRoutes } = require('./routesMain');

const router = express.Router();

router.use('/login', loginRoutes);
router.use('/', mainRoutes);

module.exports = { router };
