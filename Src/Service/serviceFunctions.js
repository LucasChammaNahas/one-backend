const { validateEmail } = require("../Validations/validateEmail");

function getUserByEmail({ email }) {
  validateEmail(email);
}

module.exports = { getUserByEmail };
