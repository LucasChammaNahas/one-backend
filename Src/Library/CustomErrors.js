class UtilityError extends Error {
  constructor(msg) {
    super(msg);
    this.type = "UTILITY";
    this.msg = msg.toString().toUpperCase();
  }
}

module.exports = { UtilityError };
