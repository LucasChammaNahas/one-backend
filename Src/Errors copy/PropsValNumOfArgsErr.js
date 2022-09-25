class PropsValNumOfArgsErr extends Error {
  constructor(...props) {
    const msg = createMsg(...props);
    super(msg);
    this.type = 'UTILITY > PROPS VALIDATION';
    this.msg = msg;
  }
}

function createMsg(funName, paramsStr, numOptionalParams = 0) {
  const numReqParams = paramsStr.split(',').length - numOptionalParams;
  const requiredPlural = numReqParams === 1 ? '' : 's';
  const optionalPlural = numOptionalParams === 1 ? '' : 's';
 return `${funName} says: this function requires ${numReqParams} mandatory parameter${requiredPlural} and ${numOptionalParams} optional parameter${optionalPlural} --> ${funName}(${paramsStr})`;
}

module.exports = { PropsValNumOfArgsErr };
