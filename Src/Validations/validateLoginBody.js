const { ExternalValError } = require("../Errors/ExternalValError");

function validateLoginBody(body) {
  const { email } = body;
  const { password } = body;
  const isBodyValid = email !== undefined && password !== undefined;
  if (isBodyValid) return;
  throw new ExternalValError("Login body is not valid");
}

module.exports = { validateLoginBody };
