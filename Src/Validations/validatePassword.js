const { ExternalValError } = require('../Errors/ExternalValError');

function validatePassword(password) {
  const isPasswordValid =
    typeof password === 'string' &&
    password.length > 0 &&
    password.length < 256;
  if (isPasswordValid) return;
  throw new ExternalValError(`Password "${password}" is not valid`);
}

module.exports = { validatePassword };
