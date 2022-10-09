const { typeOf } = require('lucas');
const { InternalPropsValError } = require('../../Errors/InternalPropsValError');
const { InternalPropValError } = require('../../Errors/InternalPropValError');

function validateProps(props, args) {
  const numOfArgs = Object.keys(args).length;
  if (numOfArgs !== 1) {
    throw new InternalPropsValError('removeUser', 'email: string');
  }

  if (typeOf(props) !== 'Object' || Object.keys(props).length !== 1) {
    throw new InternalPropValError(
      'removeUser says: function argument must be a non-empty object --> removeUser({ email: string })'
    );
  }

  const { email } = props;
  if (typeOf(email) !== 'String' || email.length === 0) {
    throw new InternalPropValError(
      'removeUser says: "email" must be a non-empty string --> removeUser({ email: string }'
    );
  }
}

module.exports = { validateProps };
