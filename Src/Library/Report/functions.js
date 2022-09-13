const { UtilityError } = require("../CustomErrors");
const { typeOf } = require("../TypeOf/typeOf");

function validateProps(options) {
  const type = typeOf(options);
  if (type !== "Object") {
    throw new UtilityError('report says: "options" is not an object');
  }
  const modePossibilities = ["strict", "loose", undefined];
  const { mode } = options;
  if (!modePossibilities.includes(mode)) {
    throw new UtilityError(
      `report says: "${mode}" is not a valid option mode. 
      Valid modes: "strict" | "loose"`
    );
  }
}

module.exports = { validateProps };
