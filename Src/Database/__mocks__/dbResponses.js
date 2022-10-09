const { db } = require('./db');
const {
  GET_USER_QUERY,
  SET_USER_QUERY,
  REMOVE_USER_QUERY,
} = require('../../Database/queries');

function dbResponsesSwitch(query, params) {
  switch (query) {
    case GET_USER_QUERY:
      return mockGetUserResponse(params[0]);

    case SET_USER_QUERY:
      return mockSetUserResponse(params[0], params[1]);

    case REMOVE_USER_QUERY:
      return mockRemoveUserResponse(params[0]);

    default:
      throw new Error(
        'dbResponsesSwitch says: query does not match any of the mocked queries'
      );
  }
}

function mockGetUserResponse(email) {
  const res = db.find((user) => user.email === email);
  return !res ? null : res;
}

function mockSetUserResponse(email, password) {
  db.push({ email, password });
}

function mockRemoveUserResponse(email) {
  const index = db.findIndex((user) => user.email === email);
  db.splice(index, 1);
}

module.exports = { dbResponsesSwitch };
