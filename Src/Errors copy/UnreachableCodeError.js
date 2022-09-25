class UnreachableCodeError extends Error {
  constructor(funName) {
    const msg = `${funName} says: this part of the code was supposed to be logically unreachable`;
    super(msg);
    this.type = 'UTILITY > UNREACHABLE CODE REACHED';
    this.msg = msg;
  }
}

module.exports = { UnreachableCodeError };
