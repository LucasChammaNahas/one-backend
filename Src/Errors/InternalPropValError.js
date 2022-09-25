class InternalPropValError extends Error {
  constructor(msg) {
    super(msg);
    this.type = 'INTERNAL > PROP VALIDATION';
    this.msg = msg;
  }
}

module.exports = { InternalPropValError };
