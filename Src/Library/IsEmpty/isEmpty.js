const { typeOf } = require("../TypeOf/typeOf");

function isEmpty(x) {
  const type = typeOf(x);
  const emptyTypes = ["String", "Array", "Object", "Map", "Set"];
  const isEmptyType = emptyTypes.includes(type);

  if (!isEmptyType) return false;
  if (type === "Map" || type === "Set") return x.size === 0;
  return Object.keys(x).length === 0;
}

module.exports = { isEmpty };
