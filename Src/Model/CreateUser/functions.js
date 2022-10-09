const { typeOf } = require('lucas');
const { InternalPropsValError } = require('../../Errors/InternalPropsValError');
const { InternalPropValError } = require('../../Errors/InternalPropValError');

function validateProps(props, args) {
  const numOfArgs = Object.keys(args).length;
  if (numOfArgs !== 1) {
    throw new InternalPropsValError('createUser', 'email: string, password: string ');
  }

  if (typeOf(props) !== 'Object' || Object.keys(props).length !== 2) {
    throw new InternalPropValError(
      'createUser says: function argument must be a 2-item object --> createUser({ email: string, password: string })'
    );
  }

  const { email, password } = props;
  if (typeOf(email) !== 'String' || email.length === 0) {
    throw new InternalPropValError(
      'createUser says: "email" must be a non-empty string --> createUser({ email: string, password: string }'
    );
  }
  if (typeOf(password) !== 'String' || password.length === 0) {
    throw new InternalPropValError(
      'createUser says: "password" must be a non-empty string --> createUser({ email: string, password: string }'
    );
  }
}

module.exports = { validateProps };
