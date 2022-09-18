const { UtilityError } = require("../CustomErrors");
const { validRawTypes } = require("./constants");

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

function validateType(type) {
  if (!validRawTypes.includes(type)) {
    throw new UtilityError(
      `typeOf says: The type "${type}" cannot be used by this utility library.
      If this is not a bug in your program, this lib may not be suitable for your application :(`
    );
  }
}

module.exports = { validateProps, inferType, validateType };
