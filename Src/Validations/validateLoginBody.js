const { ValidationError } = require("../Errors/CustomErrors");

function validateLoginBody(body) {
  const { email } = body;
  const { password } = body;
  const isBodyValid = email !== undefined && password !== undefined;
  if (isBodyValid) return;
  throw new ValidationError("Login body is not valid");
}

module.exports = { validateLoginBody };
