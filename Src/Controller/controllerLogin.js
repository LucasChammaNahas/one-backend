const { getUserByEmail } = require("../Service/serviceFunctions");

async function login({ body }, res) {
  res.status(200).json({ pato: "login" });
}

module.exports = {
  login,
};
