const { strictToLooseMap } = require("./constants");
const { validateProps, inferType } = require("./functions");

function typeOf(x, options = {}) {
  validateProps(options);
  const { mode = "loose" } = options;

  let strictType = inferType(x);

  if (strictType === "Number") {
    if (Number.isNaN(x)) strictType = "NaN";
    else if (Number.isFinite(x)) strictType = "Number";
    else strictType = "Infinity";
  }

  if (mode === "loose") {
    const looseType = strictToLooseMap[strictType];
    if (looseType === undefined) return strictType;
    return looseType;
  }

  return strictType;
}

module.exports = { typeOf };
