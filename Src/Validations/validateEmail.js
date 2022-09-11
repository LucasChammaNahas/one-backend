const { ValidationError } = require("../Errors/CustomErrors");

function validateEmail(email) {
  const isMailValid =
    typeof email === "string" &&
    email.length > 0 &&
    email.length < 256 &&
    email.includes("@");
  if (isMailValid) return;
  throw new ValidationError(`Email "${email}" is not valid`);
}

module.exports = { validateEmail };
