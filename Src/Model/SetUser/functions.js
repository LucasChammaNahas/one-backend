const { typeOf } = require('lucas');
const { InternalPropsValError } = require('../../Errors/InternalPropsValError');
const { InternalPropValError } = require('../../Errors/InternalPropValError');

function validateProps(props, args) {
  const numOfArgs = Object.keys(args).length;
  if (numOfArgs !== 2) {
    throw new InternalPropsValError('getUser', 'email: string, password: string ');
  }

  if (typeOf(props) !== 'Object' || Object.keys(props).length === 0) {
    throw new InternalPropValError(
      'getUser says: function argument must be a non-empty object --> getUser({ email: string, password: string })'
    );
  }

  const { email, password } = props;
  if (typeOf(email) !== 'String' || email.length === 0) {
    throw new InternalPropValError(
      'getUser says: "email" must be a non-empty string --> getUser({ email: string, password: string }'
    );
  }
  if (typeOf(password) !== 'String' || password.length === 0) {
    throw new InternalPropValError(
      'getUser says: "password" must be a non-empty string --> getUser({ email: string, password: string }'
    );
  }
}

module.exports = { validateProps };
