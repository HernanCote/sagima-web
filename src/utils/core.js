const isNumber = value => typeof value === 'number' && !Number.isNaN(value);

const identity = val => val;

const isObject = obj => obj === Object(obj);

const uniq = arr => arr.reduce((acc, name) => (acc.includes(name) ? acc : [...acc, name]), []);

export {
  isNumber,
  identity,
  isObject,
  uniq,
};
