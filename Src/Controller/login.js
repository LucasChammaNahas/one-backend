const jwt = require('jsonwebtoken');
const { getUser } = require('../Service/GetUser/getUser');
const { JWT_SECRET } = require('../Constants/jwtSecret');
const {
  userNotFound,
  incorrectPwd,
  successfulLogin,
} = require('../StatusCodes/statusCodes');

async function login({ body }, res) /* Void */ {
  const user = await getUser({ email: body.email });
  if (user === null) {
    return res.status(userNotFound.code).json(userNotFound.msg);
  }

  if (body.password !== user.password) {
    return res.status(incorrectPwd.code).json(incorrectPwd.msg);
  }

  const token = jwt.sign(body.email, JWT_SECRET);
  const resPkg = { token, msg: successfulLogin.msg };
  return res.status(successfulLogin.code).json(resPkg);
}

module.exports = { login };
