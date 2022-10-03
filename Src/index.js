require('pretty-error').start();
const express = require('express');
// const cors = require('cors');
const { router } = require('./Router/router');

const app = express();

app.use(express.json());
app.use(router);

app.listen(5000, () => {
  console.log('--> nois tio');
});
