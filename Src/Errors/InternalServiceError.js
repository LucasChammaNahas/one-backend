class InternalServiceError extends Error {
  constructor(msg) {
    super(msg);
    this.type = `INTERNAL > SERVICE`;
    this.msg = msg.toString().toUpperCase();
  }
}

module.exports = { InternalServiceError };
