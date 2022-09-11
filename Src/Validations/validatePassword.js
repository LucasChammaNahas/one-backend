const { ValidationError } = require("../Errors/CustomErrors");

function validatePassword(password) {
  const isPasswordValid =
    typeof password === "string" &&
    password.length > 0 &&
    password.length < 256;
  if (isPasswordValid) return;
  throw new ValidationError(`Password "${password}" is not valid`);
}

module.exports = { validatePassword };
