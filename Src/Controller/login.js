const { getUser } = require('../Service/GetUser/getUser');
const {
  userNotFound,
  incorrectPwd,
  successfulLogin,
} = require('../StatusCodes/statusCodes');

async function login({ body }, res) {
  const { email, password } = body;

  const user = getUser({ email });
  if (user === null) {
    res.status(userNotFound.code).json(userNotFound.msg);
  }

  const storedPwd = user.password;
  if (password !== storedPwd) {
    res.status(incorrectPwd.code).json(incorrectPwd.msg);
  }
  
  res.status(successfulLogin.code).json(successfulLogin.msg);
}

module.exports = { login };
