class InternalError extends Error {
  constructor({ msg = '', type = '' }) {
    super(msg);
    this.type = `INTERNAL > ${type.toUpperCase()}`;
    this.msg = msg.toString().toUpperCase();
  }
}

module.exports = { InternalError };
