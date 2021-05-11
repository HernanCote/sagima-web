const get = require('lodash/get');
const set = require('lodash/set');
const isEqual = require('lodash/isEqual');
const pickBy = require('lodash/pickBy');
const toTitleCase = require('titlecase');

const isNil = x => x === null || typeof x === 'undefined';

const isString = value => typeof value === 'string';

const isNumber = value => typeof value === 'number' && !Number.isNaN(value);

const uniq = arr => arr.reduce((acc, name) => (acc.includes(name) ? acc : [...acc, name]), []);

const isDef = n => n !== undefined && n !== null && !Number.isNaN(n);

const defaultTo = (value, defaultValue) => (isDef(value) ? value : defaultValue);

const noop = () => undefined;

const isObject = obj => obj === Object(obj);
// This is the fastest way for small objects - https://jsperf.com/empty-object-test/4

const isEmptyObject = obj => Object.keys(obj).length === 0;

const isEmptyArray = array => (array === undefined || array.length === 0);

const isEmpty = value => (isObject(value) && isEmptyObject(value)) || !isDef(value) || value === '';

const identity = x => x;

const prettyJson = json => JSON.stringify(json, null, 2);

module.exports = {
  defaultTo,
  isDef,
  isEmpty,
  isEmptyObject,
  isEmptyArray,
  isString,
  isNumber,
  isObject,
  isNil,
  identity,
  get,
  noop,
  uniq,
  isEqual,
  pickBy,
  toTitleCase,
  set,
  prettyJson,
};
