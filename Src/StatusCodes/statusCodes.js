module.exports = {
  successfulLogin: { code: 200, msg: 'Login successful' },
  badRequest: { code: 400, msg: 'Bad request' },
  incorrectPwd: { code: 401, msg: 'Incorrect password' },
  invalidToken: { code: 401, msg: 'Invalid token' },
  missingToken: { code: 401, msg: 'Missing token' },
  userNotFound: { code: 404, msg: 'User not found' },
};
