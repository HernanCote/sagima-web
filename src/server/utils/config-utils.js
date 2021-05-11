const mergeConfigs = (config = {}, ...otherConfigs) => {
  const err = new Error('First argument is not a node-config object');

  if (typeof config.util !== 'object') {
    throw err;
  }

  const notAllDefined = [
    'attachProtoDeep',
    'extendDeep',
    'toObject',
  ].some(fn => typeof config.util[fn] !== 'function');

  if (notAllDefined) {
    throw err;
  }

  return config.util.attachProtoDeep(
    config.util.extendDeep(
      config.util.toObject(config),
      ...otherConfigs.map(c => (typeof c.has === 'function' ? config.util.toObject(c) : c)),
    ),
  );
};

module.exports = {
  mergeConfigs,
};
