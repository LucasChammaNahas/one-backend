const jwt = require('jsonwebtoken');

const SECRET = 'segredoSecreto';

const validateToken = (req, res, next) => {
  try {
    const token = req.headers.authorization;
    if (!token) return res.status(401).json({ message: 'missing auth token' });
    const { _id } = jwt.verify(token, SECRET);
    res.locals.id = _id;
    next();
  } catch (error) {
    res.status(401).json({ message: 'jwt malformed' });
  }
};

module.exports = validateToken;
