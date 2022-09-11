class InternalError extends Error {
  constructor(msg) {
    super(msg);
    this.type = "INTERNAL";
    this.msg = msg.toString().toUpperCase();
  }
}

class ValidationError extends Error {
  constructor(msg) {
    super(msg);
    this.type = "VALIDATION";
    this.msg = msg.toString().toUpperCase();
  }
}

module.exports = { InternalError, ValidationError };
