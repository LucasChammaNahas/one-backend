const { InternalError } = require('../../Errors/InternalError');
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
    throw new InternalError(
      `removeUser says: user "${email}" does not exist in the database`,
      'SERVICE'
    );
  }
  await removeUserModel({ email });
}

module.exports = { removeUser };
