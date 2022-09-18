const { typeOf } = require("../TypeOf/typeOf");

function isError(x) {
  return typeOf(x) === "Error";
}

module.exports = { isError };
