const express = require('express');
const cors = require('cors');
const Pool = require('pg').Pool;

const router = require('./Router/router');
const app = express();

app.use(router);







const pool = new Pool({
  host: 'localhost',
  port: '5432',
  username: 'postgres',
  password: '0260',
  database: 'lucas',  
})



app.listen(5000, () => {console.log('--> nois tio')})