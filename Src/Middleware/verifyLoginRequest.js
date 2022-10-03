const { validateEmail } = require('../Validations/validateEmail');
const { validatePassword } = require('../Validations/validatePassword');
const { badRequest } = require('../StatusCodes/statusCodes');

function verifyLoginRequest({ body }, res, next) {
  try {
    const { email, password } = body;
    validateEmail(email);
    validatePassword(password);
    next();
  } catch (err) {
    res.status(badRequest.code).json(badRequest.msg);
  }
}

module.exports = { verifyLoginRequest };
