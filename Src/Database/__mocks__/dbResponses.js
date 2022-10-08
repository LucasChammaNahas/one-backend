const { db } = require('./db');
const { GET_USER_QUERY, SET_USER_QUERY } = require('../../Database/queries');

function dbResponsesSwitch(query, params) {
  console.log('--> AAAAAH QUE PUTARIA', SET_USER_QUERY);
  switch (query) {
    case GET_USER_QUERY:
      return mockGetUserResponse(params[0]);

    case SET_USER_QUERY:
      return mockSetUserResponse(params[0], params[1]);

    default:
      throw new Error('insert error here');
  }
}

function mockGetUserResponse(email) {
  const res = db.find((user) => user.email === email);
  return !res ? null : res;
}

function mockSetUserResponse(email, password) {
  db.push({ email, password });
}

module.exports = { dbResponsesSwitch };
