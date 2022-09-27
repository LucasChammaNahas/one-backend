const { typeOf } = require('lucas');
const { validateProps } = require('./functions');
const { getUser: getUserViaImport } = require('../../Model/GetUser/getUser');

async function hasUser(props) {
  validateProps(props, arguments);
  const { email, getUserViaProps } = props;

  let getUser = getUserViaImport;
  if (typeOf(getUserViaProps) === 'Function') {
    getUser = getUserViaProps;
  }
  const user = await getUser({ email });
  if (user === null) return false;
  return true;
}

module.exports = { hasUser };
