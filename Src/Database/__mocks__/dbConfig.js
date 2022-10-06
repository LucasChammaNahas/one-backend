const { dbResponsesSwitch } = require('./dbResponses');

const pool = {
  query: function (query, params) {
    return { rows: [dbResponsesSwitch(query, params)] };
  },
};
// const pool = 'pato pool'

module.exports = { pool };
