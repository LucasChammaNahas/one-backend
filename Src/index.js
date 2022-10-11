require('pretty-error').start();
const express = require('express');
// const cors = require('cors');
const { router } = require('./Router/router');
const { initCache } = require('./Middleware/cache');

const app = express();

app.use(express.json());
app.use(initCache);
app.use(router);

app.listen(5000, () => {
  console.log('--> nois tio');
});
