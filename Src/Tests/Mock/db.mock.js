const _ = require('lodash');

const db = [
  {
    email: 'pato@gato.com',
    password: 'senha',
  },
];

function generateDb() {
  return _.cloneDeep(db);
}

module.exports = { generateDb };
