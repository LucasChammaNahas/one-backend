const { typeOf } = require('lucas');
const { InternalPropsValError } = require('../../Errors/InternalPropsValError');
const { InternalPropValError } = require('../../Errors/InternalPropValError');

function validateProps(props, args) {
  const numOfArgs = Object.keys(args).length;
  if (numOfArgs !== 1) {
    throw new InternalPropsValError('getUserByEmail', 'email: string');
  }

  if (typeOf(props) !== 'Object' || Object.keys(props).length === 0) {
    throw new InternalPropValError(
      'getUserByEmail says: function argument must be a non-empty object --> getUserByEmail({ email: string })'
    );
  }

  const { email } = props;
  if (typeOf(email) !== 'String' || email.length === 0) {
    throw new InternalPropValError(
      'getUserByEmail says: "email" must be a non-empty string --> getUserByEmail({ email: string }'
    );
  }
}

module.exports = { validateProps };
