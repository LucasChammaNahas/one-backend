class PropsValErr extends Error {
  constructor(msg) {
    super(msg);
    this.type = 'UTILITY > PROPS VALIDATION';
    this.msg = msg.toString();
  }
}

module.exports = { PropsValErr };
