const isNumber = value => typeof value === 'number' && !Number.isNaN(value);

const identity = val => val;

const isObject = obj => obj === Object(obj);

export { isNumber, identity, isObject };
