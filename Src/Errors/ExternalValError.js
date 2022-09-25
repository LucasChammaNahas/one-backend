class ExternalValError extends Error {
  constructor(msg) {
    super(msg);
    this.type = 'VALIDATION';
    this.msg = msg.toString().toUpperCase();
  }
}

module.exports = { ExternalValError };
