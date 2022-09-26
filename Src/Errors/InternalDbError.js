class InternalDbError extends Error {
  constructor(msg) {
    super(msg);
    this.type = 'INTERNAL > DATABASE';
    this.msg = msg;
  }
}

module.exports = { InternalDbError };
