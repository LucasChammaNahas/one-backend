const express = require('express');
const cors = require('cors');
const {getUserByEmail} = require('./Model/GetUserByEmail/getUserByEmail')

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

getUserByEmail({email: 'pato@gato.coms'});