const { cache } = require('./cache');

function resetCache() {
  const cacheArr = Object.keys(cache);
  for (const key of cacheArr) {
    cache[key] = undefined;
  }
}

module.exports = { resetCache };
