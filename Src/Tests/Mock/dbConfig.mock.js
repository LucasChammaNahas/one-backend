const { modelFunctionSwitch } = require('./modelFunctions.mock');

const mockedPool = {
  query: function (query, params) {
    return { rows: modelFunctionSwitch(query, params) };
  },
};

module.exports = { mockedPool };
