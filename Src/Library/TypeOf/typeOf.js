const { strictToLooseMap } = require("./constants");
const { validateProps, inferType, validateType } = require("./functions");

function typeOf(x, options = {}) {
  validateProps(options);
  const { mode = "loose" } = options;

  let strictType = inferType(x);
  validateType(strictType);

  if (strictType === "Number") {
    if (Number.isNaN(x)) strictType = "NaN";
    else if (Number.isFinite(x)) strictType = "Number";
    else strictType = "Infinity";
  }

  if (mode === "loose") {
    return strictToLooseMap[strictType];
  }
  return strictType;
}

module.exports = { typeOf };
