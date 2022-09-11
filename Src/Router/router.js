const express = require("express");
const { routesLogin } = require("./routesLogin");

console.log('--> ', typeof routesLogin);

const router = express.Router();

// router.use("/login", routesLogin);

module.exports = router;
