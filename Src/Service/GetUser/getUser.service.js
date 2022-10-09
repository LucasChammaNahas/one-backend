const { validateProps } = require('./functions');
const { getUser: getUserModel } = require('../../Service/GetUser/getUser.model');

async function getUser(props) /* null, obj */ {
  validateProps(props, arguments);
  const { email } = props;
  const user = await getUserModel({ email });
  return user;
}


module.exports = { getUser };
