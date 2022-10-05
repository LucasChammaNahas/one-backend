const { typeOf } = require('lucas');
const { InternalPropsValError } = require('../../Errors/InternalPropsValError');
const { InternalPropValError } = require('../../Errors/InternalPropValError');

function validateProps(props, args) {
  const numOfArgs = Object.keys(args).length;
  if (numOfArgs !== 1) {
    throw new InternalPropsValError('hasUser', 'email: string');
  }

  if (typeOf(props) !== 'Object' || Object.keys(props).length !== 1) {
    throw new InternalPropValError(
      'hasUser says: function argument must be a non-empty object --> hasUser({ email: string })'
    );
  }

  const { email } = props;
  if (typeOf(email) !== 'String' || email.length === 0) {
    throw new InternalPropValError(
      'hasUser says: "email" must be a non-empty string --> hasUser({ email: string }'
    );
  }
}

module.exports = { validateProps };
