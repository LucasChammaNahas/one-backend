const { resetCache } = require('../Cache/cache');

function initCache(req, res, next) {
  resetCache();
  next();
}

module.exports = { initCache };
