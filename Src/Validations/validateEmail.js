const { ExternalValError } = require('../Errors/ExternalValError');

function validateEmail(email) {
  const isMailValid =
    typeof email === 'string' &&
    email.length > 0 &&
    email.length < 256 &&
    email.includes('@');
  if (isMailValid) return;
  throw new ExternalValError(`Email "${email}" is not valid`);
}

module.exports = { validateEmail };
