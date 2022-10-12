const { validateProps } = require('./functions');
const {
  createUser: createUserModel,
} = require('../../Model/CreateUser/createUser');
const { hasUser } = require('../HasUser/hasUser');
const { InternalServiceError } = require('../../Errors/InternalServiceError');

async function createUser(props) /* Void */ {
  validateProps(props, arguments);
  const { email, password } = props;
  const isUserInDb = await hasUser({ email });
  if (isUserInDb) {
    throw new InternalServiceError(
      `createUser says: user "${email}" already exists`
    );
  }
  await createUserModel({ email, password });
}

module.exports = { createUser };
