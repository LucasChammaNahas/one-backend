const { typeOf } = require("../TypeOf/typeOf");

function isTruthy(x) {
  const emptyEntities = [undefined, null, false, ''];
  const isEmptyEntity = emptyEntities.includes(x);
  if (isEmptyEntity) return false;

  const type = typeOf(x);
  if (type === 'Error') return false

  const objectTypes = ["Array", "Object", "Map", "Set"];
  const isEmptyType = objectTypes.includes(type);
  if (!isEmptyType) return false;

  if (type === "Map" || type === "Set") return x.size === 0;
  return Object.keys(x).length === 0;
}

module.exports = { isTruthy };