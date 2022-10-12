class InternalModelError extends Error {
  constructor(msg) {
    super(msg);
    this.type = `INTERNAL > MODEL`;
    this.msg = msg.toString().toUpperCase();
  }
}

module.exports = { InternalModelError };
