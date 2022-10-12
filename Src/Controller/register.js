const jwt = require('jsonwebtoken');
const { hasUser } = require('../Service/HasUser/hasUser');
const { JWT_SECRET } = require('../Constants/jwtSecret');
const {
  userAlreadyExists,
  successfulRegistration,
} = require('../StatusCodes/statusCodes');

async function register({ body }, res) /* Void */ {
  const isUserInDb = await hasUser({ email: body.email });
  if (isUserInDb) {
    res.status(userAlreadyExists.code).json(userAlreadyExists.msg);
    return;
  }

  const token = jwt.sign(body.email, JWT_SECRET);
  const pkg = { token, msg: successfulRegistration.msg };
  res.status(successfulRegistration.code).json(pkg);
}

module.exports = { register };
