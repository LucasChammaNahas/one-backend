const { validateEmail } = require("../Validations/serviceValidation");

function getUserByEmail({ email }) {
  validateEmail(email);
}

module.exports = { getUserByEmail };
