const express = require('express');
const { loginRoutes } = require('./routesLogin');

const router = express.Router();

router.use('/login', loginRoutes);

module.exports = router;
