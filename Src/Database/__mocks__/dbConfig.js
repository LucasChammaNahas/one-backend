const { dbResponsesSwitch } = require('./dbResponses');

const pool = {
  query: function (query, params) {
    return { rows: [dbResponsesSwitch(query, params)] };
  },
};

module.exports = { pool };
