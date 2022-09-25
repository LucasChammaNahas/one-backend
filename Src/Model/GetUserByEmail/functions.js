const { InternalPropsValError } = require('../../Errors/InternalPropsValError');
const { InternalError } = require('../../Errors/InternalError');

function validateProps(x, args) {
  const numOfArgs = Object.keys(args).length;
  if (numOfArgs !== 1) {
    throw new InternalPropsValError('isVectorOfWhat', 'x: any, options: {}', 1);
  }

  if (isVector(x) === false) {
    throw new InternalError('isVectorOfWhat says: argument must be a vector')
  }
}

module.exports = { validateProps };