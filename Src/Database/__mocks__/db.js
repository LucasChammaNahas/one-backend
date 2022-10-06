const _ = require('lodash');

const initialDb = [
  {
    email: 'pato@gato.com',
    password: 'senha',
  },
  {
    email: 'lucas@gmail.com',
    password: 'asdf',
  },
  {
    email: 'stephen@gmail.com',
    password: 'qwerty',
  },
  {
    email: 'ally@gmail.com',
    password: '12345',
  },
];

const db = _.cloneDeep(initialDb);

function resetDb() {
  const len = db.length;
  for (let i = 0; i < len; i += 1) {
    db.pop();
  }
  initialDb.forEach((user) => db.push(_.cloneDeep(user)));
}

module.exports = { db, resetDb };
