const { InternalError } = require('../../Errors/InternalError');
const { validateProps } = require('./functions');
const { hasUser } = require('../HasUser/hasUser.service');
const {
  removeUser: removeUserModel,
} = require('../../Model/RemoveUser/removeUser.model');

async function removeUser(props) /* Void */ {
  validateProps(props, arguments);
  const { email } = props;
  const isUserInDb = await hasUser({ email });
  console.log('--> user in db ', isUserInDb)
  if (!isUserInDb) {
    throw new InternalError(
      `removeUser says: user "${email}" does not exist in the database`,
      'SERVICE'
    );
  }
  await removeUserModel({ email });
}

module.exports = { removeUser };
