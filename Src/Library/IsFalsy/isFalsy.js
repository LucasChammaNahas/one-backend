const { typeOf } = require("../TypeOf/typeOf");

function isFalsy(x) {
  const emptyEntities = [undefined, null, false, ''];
  const isEmptyEntity = emptyEntities.includes(x);
  if (isEmptyEntity) return true;

  const type = typeOf(x);
  const objectTypes = ["Array", "Object", "Map", "Set"];
  const isEmptyType = objectTypes.includes(type);
  if (!isEmptyType) return false;

  if (type === "Map" || type === "Set") return x.size === 0;
  return Object.keys(x).length === 0;
}

module.exports = { isFalsy };