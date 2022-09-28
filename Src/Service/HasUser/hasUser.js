// const { typeOf } = require('lucas');
const { validateProps } = require('./functions');
const { getUser } = require('../../Model/GetUser/getUser');

async function hasUser(props) {
  validateProps(props, arguments);
  const { email, user: propsUser } = props;

  const hasPropsUser = propsUser !== undefined;
  const user = hasPropsUser ? propsUser : await getUser({ email });

  if (user === null) return false;
  return true;
}

module.exports = { hasUser };
