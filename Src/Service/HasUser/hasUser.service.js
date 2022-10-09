// const { typeOf } = require('lucas');
const { validateProps } = require('./functions');
const { getUser } = require('../../Model/GetUser/getUser.model');

async function hasUser(props) {
  validateProps(props, arguments);
  const { email } = props;

  const user = await getUser({ email });

  if (user === null) return false;
  return true;
}

module.exports = { hasUser };
