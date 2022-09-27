const { getUser } = require('../Service/GetUser/getUser');

async function login({ body }, res) {
  res.status(200).json({ pato: 'login' });
}

module.exports = {
  login,
};
