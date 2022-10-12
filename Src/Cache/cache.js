const cache = {
  user: undefined,
};

function resetCache() {
  for (const key of Object.keys(cache)) {
    cache[key] = undefined;
  }
}

module.exports = { cache, resetCache };
