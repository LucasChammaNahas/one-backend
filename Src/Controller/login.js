const jwt = require('jsonwebtoken');
const { getUser } = require('../Service/GetUser/getUser');
const {
  userNotFound,
  incorrectPwd,
  successfulLogin,
} = require('../StatusCodes/statusCodes');

const JWT_SECRET = require('../Constants/jwtSecret')

async function login({ body }, res) /* Void */ {
  const user = getUser({ email: body.email });
  if (user === null) {
    res.status(userNotFound.code).json(userNotFound.msg);
  }

  if (body.password !== user.password) {
    res.status(incorrectPwd.code).json(incorrectPwd.msg);
  }

  const token = jwt.sign(body.email, JWT_SECRET);
  const resPkg = { token, msg: successfulLogin.msg };
  res.status(successfulLogin.code).json(resPkg);
}

module.exports = { login };
