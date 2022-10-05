const { db } = require('./db.mock');

function getUser(email) {
  const res = db.find((user) => user.email === email);
  return !res ? null : res;
}

function modelFunctionSwitch(query, params) {
  const [email] = params;
  switch (query) {
    case 'SELECT * FROM users WHERE email = $1':
      return getUser(email);
    default:
      throw new Error('insert error here');
  }
}

module.exports = { modelFunctionSwitch };
