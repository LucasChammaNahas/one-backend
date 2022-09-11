function validateEmail(email) {
  const isMailValid =
    typeof email === "string" &&
    email.length > 0 &&
    email.length < 256 &&
    email.includes("@");

  if(isMailValid) return;
  throw new Error(`The email "${email}" is not valid`);
}

module.exports = {validateEmail}