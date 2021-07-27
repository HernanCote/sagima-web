const { isNil, pickBy } = require('./core');

const isValidValue = v => !isNil(v) && !Number.isNaN(v) && v !== '';
const clearFalsyValues = object => pickBy(object, isValidValue);

const decodeHtml = data => data.replace(/<[^>]+>/g, '');

module.exports = {
  isValidValue,
  clearFalsyValues,
  decodeHtml,
};
