const { validateProps } = require('./functions');
const { getUser: getUserModel } = require('../../Model/GetUser/getUser');

async function getUser(props) /* null, obj */ {
  validateProps(props, arguments);
  const { email } = props;
  const user = await getUserModel({ email });
  return user;
}


module.exports = { getUser };
