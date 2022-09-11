const { getUserByEmail } = require("../Service/serviceFunctions");

async function login({ body }, res) {
  console.log(body)
  res.status(200).json({ pato: "duck" });
}

module.exports = {
  login,
};
