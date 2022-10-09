const { db } = require('../../../Database/__mocks__/db');

async function getUser({ email }) {
  const user = db.find((user) => user.email === email);
  if (user === undefined) {
    return null;
  }
  return user;
}

module.exports = { getUser };
