const { resetCache } = require('./functions');

const cache = {
  user: undefined,
};

module.exports = { cache, resetCache };
