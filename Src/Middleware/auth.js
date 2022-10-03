const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../Constants/jwtSecret');
const { missingToken, invalidToken } = require('../StatusCodes/statusCodes');

const auth = (req, res, next) => {
  try {
    const token = req.headers.authorization;
    if (!token) {
      res.status(missingToken.code).json(missingToken.msg);
      return;
    }
    res.locals.jwtRes = jwt.verify(token, JWT_SECRET);
    next();
  } catch (error) {
    res.status(invalidToken.code).json(invalidToken.msg);
    return;
  }
};

module.exports = { auth };
