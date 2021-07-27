const { getEndpointData } = require('../../utils/requests');
const { toDto } = require('./mapper');

const getPageData = async (config, params) => {
  const { object } = await getEndpointData(config, 'endpoints.about', params);
  return toDto(object);
};

module.exports = {
  getPageData,
};
