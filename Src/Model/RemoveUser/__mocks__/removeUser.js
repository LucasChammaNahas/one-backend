const { db } = require('../../../Database/__mocks__/db');

async function removeUser({ email }) {
  const index = db.findIndex((user) => user.email === email);
  db.splice(index, 1);
}

module.exports = { removeUser };
