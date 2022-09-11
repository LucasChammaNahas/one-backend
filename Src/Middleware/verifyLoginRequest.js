const { validateEmail } = require("../Validations/validateEmail");
const { validatePassword } = require("../Validations/validatePassword");

function verifyLoginRequest({ body }, res, next) {
  try {
    const { email, password } = body;
    validateEmail(email);
    validatePassword(password);
    res.status(200).json({ pato: "deu" });
  } catch (err) {
    console.log(err);
    res.status(400).json({ pato: "fuck" });
  }
}

module.exports = verifyLoginRequest;
