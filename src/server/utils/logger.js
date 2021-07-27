/* eslint-disable no-console */
function init() {
  console.log('Initialized logs');
}

const info = (...args) => {
  console.log('INFO: ', ...args);
};

const log = (...args) => {
  console.log('LOG:', ...args);
};

const error = (...args) => {
  console.log('ERROR: ', ...args);
};

const trace = (...args) => {
  console.log('TRACE: ', ...args);
};

module.exports = {
  init,
  log,
  info,
  error,
  trace,
};
