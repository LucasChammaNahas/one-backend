const express = require('express');
const cors = require('cors');
const Pool = require('pg').Pool;
const { pool } = require('./Database/dbConfig');

const router = require('./Router/router');
const app = express();

app.use(express.json());
app.use(router);

// const pool = new Pool({
//   host: "localhost",
//   port: "5432",
//   username: "postgres",
//   password: "0260",
//   database: "lucas",
// });

app.listen(5000, () => {
  console.log('--> nois tio');
});

// pool.query(`SELECT * FROM users`, undefined, (err, res) => {
//   console.log('--> res', res.rows);
// });
