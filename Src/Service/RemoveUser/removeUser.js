const { InternalServiceError } = require('../../Errors/InternalServiceError');
const { validateProps } = require('./functions');
const { hasUser } = require('../HasUser/hasUser');
const {
  removeUser: removeUserModel,
} = require('../../Model/RemoveUser/removeUser');

async function removeUser(props) /* Void */ {
  validateProps(props, arguments);
  const { email } = props;
  const isUserInDb = await hasUser({ email });
  if (!isUserInDb) {
    throw new InternalServiceError(
      `removeUser says: user "${email}" does not exist in the database`
    );
  }
  await removeUserModel({ email });
}

module.exports = { removeUser };
