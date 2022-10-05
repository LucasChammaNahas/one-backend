const { db } = require('./db.mock');
const { GET_USER_QUERY } = require('../../Model/GetUser/getUser');
const { SET_USER_QUERY } = require('../../Model/SetUser/setUser');

function mockGetUser(email) {
  const res = db.find((user) => user.email === email);
  return !res ? null : res;
}

function mockSetUser(email, password) {
  db.push({ email, password });
}

function modelFunctionSwitch(query, params) {
  switch (query) {
    case GET_USER_QUERY:
      return mockGetUser(params.email);

    case SET_USER_QUERY:
      return mockSetUser(params.email, params.password);

    default:
      throw new Error('insert error here');
  }
}

module.exports = { modelFunctionSwitch };
