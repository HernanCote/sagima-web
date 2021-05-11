const { getOriginalUrlFromRequest } = require('../../utils/routes');
const logger = require('../../utils/logger');

const logArrival = req => logger.info(`❕❔Endpoint with path ${getOriginalUrlFromRequest(req)} does not exist.`);

module.exports = {
  logArrival,
};
