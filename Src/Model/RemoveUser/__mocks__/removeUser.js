const { db } = require('../../../Database/__mocks__/db');

async function removeUser({ email }) {
  const index = db.findIndex((user) => user.email === email);
  if (index !== -1){
    db.splice(index, 1);
  }
}

module.exports = { removeUser };
