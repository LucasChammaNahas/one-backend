const jwt = require('jsonwebtoken');
const { getUser } = require('../Service/GetUser/getUser.service');
const { JWT_SECRET } = require('../Constants/jwtSecret');
const { userAlreadyExists } = require('../StatusCodes/statusCodes');

async function register({ body }, res) /* Void */ {
  const user = await getUser({ email: body.email });
  if (user !== null) {
    res.status(userAlreadyExists.code).json(userAlreadyExists.msg);
    return;
  }

  const token = jwt.sign(body.email, JWT_SECRET);
}

module.exports = { register };
