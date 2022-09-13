const { UtilityError } = require("../CustomErrors");

function validateProps(options) {
  const type = inferType(options);
  if (type !== "Object") {
    throw new UtilityError('typeOf says: "options" is not an object');
  }
  const modePossibilities = ["strict", "loose", undefined];
  const { mode } = options;
  if (!modePossibilities.includes(mode)) {
    throw new UtilityError(
      `typeOf says: "${mode}" is not a valid option mode. 
      Valid modes: "strict" | "loose"`
    );
  }
}

function inferType(x) {
  let type = Object.prototype.toString.apply(x);
  type = type.substring(8, type.length - 1);
  return type;
}

module.exports = { validateProps, inferType };
