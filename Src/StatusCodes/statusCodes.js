module.exports = {
  successfulLogin: { code: 200, msg: 'Login successful' },
  successfulRegistration: { code: 201, msg: 'Registration successful' },
  badRequest: { code: 400, msg: 'Bad request' },
  incorrectPwd: { code: 401, msg: 'Incorrect password' },
  invalidToken: { code: 401, msg: 'Invalid token' },
  missingToken: { code: 401, msg: 'Missing token' },
  userAlreadyExists: { code: 403, msg: 'user already exists' },
  userNotFound: { code: 404, msg: 'User not found' },
};
