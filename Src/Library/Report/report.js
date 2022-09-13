const { typeOf } = require("../TypeOf/typeOf");
const { validateProps } = require("./functions");

function report(x, options = {}) {
  validateProps(options);

  const type = typeOf(x);
  const strictType = typeOf(x, { mode: "strict" });
  const isPrimitive = typeof x !== "object";
  const isError = type === 'Error'
  const isVoid = type === 'Void';
  const isNil = isVoid || x === false;
  const report = {};
}

module.exports = { report };
