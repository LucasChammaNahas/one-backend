const { getUser } = require('../Service/GetUser/getUser');
const { x } = require('./cache');
const mod = require('./mod');

async function login({ body }, res) {
  console.log('--> x controller', x.a);
  mod();
  console.log('--> x controller', x.a);
  // res.status(200).json({ pato: 'login' });
}

module.exports = {
  login,
};
