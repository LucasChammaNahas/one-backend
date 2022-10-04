const _ = require('lodash');

const db = [
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

function generateDb() {
  return _.cloneDeep(db);
}

module.exports = { generateDb };
