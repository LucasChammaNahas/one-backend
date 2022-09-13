const strictToLooseMap = {
  Number: "Number",
  BigInt: "Number",
  String: "String",
  Boolean: "Boolean",
  Null: "Void",
  Undefined: "Void",
  Infinity: "Error",
  NaN: "Error",
  Array: "Array",
  Object: "Object",
  Date: "Date",
  Set: "Set",
  Map: "Map",
  Function: "Function",
};

module.exports = { strictToLooseMap };
