const axios = require('axios');
const { performance } = require('perf_hooks');
const { v4: uuidv4 } = require('uuid');
const { stringify } = require('querystring');

const { clearFalsyValues } = require('./misc');
const { isEmpty } = require('./core');
const logger = require('./logger');
const { prettyJson } = require('./core');

const getEndpointData = async ({ config }, endpoint, originalUnPickedParams = {}) => {
  const originalParams = {
    ...clearFalsyValues(originalUnPickedParams),
  };

  const endpointIsPresentInConfig = config.has(endpoint);

  let uri = endpointIsPresentInConfig ? config.get(endpoint) : endpoint;
  const parameters = {};

  const notQueryStringParams = [
    'headers',
    'method',
    'body',
  ];

  const {
    method = 'get',
    auth,
    headers = {},
    body = {},
    ...otherParams
  } = originalParams;

  if (config.has('readKey')) {
    parameters.read_key = config.get('readKey');
  }

  Object.keys(originalParams).forEach(key => {
    if (notQueryStringParams.includes(key)) return;

    if (uri.includes(`:${key}`)) {
      const replace = `:${key}`;

      uri = uri.replace(replace, originalParams[key]);
    } else {
      parameters[key] = otherParams[key];
    }
  });

  const url = endpointIsPresentInConfig ? `${config.get('baseUrl')}${uri}` : uri;

  const requestId = headers['X-Request-Id'] || uuidv4();

  const startTime = performance.now();

  try {
    const axiosBaseConfig = {
      method,
      url,
      headers: {
        'X-Request-Id': requestId,
        ...headers,
      },
      timeout: config.get('timeout'),
      params: parameters,
      data: {},
    };

    let axiosConfig = axiosBaseConfig;

    if (!isEmpty(body)) {
      axiosConfig = {
        ...axiosBaseConfig,
        data: Object.values(headers).includes('application/x-www-form-urlencoded')
          ? stringify(body) : body,
      };
    }

    logger.log(`🔌 Requesting: "${method.toUpperCase()}`);
    logger.trace('📌 Axios configuration: ', prettyJson(axiosBaseConfig));

    const { status, data } = await axios(axiosConfig);

    const endTime = performance.now();

    logger.log(`✅  Request "${method.toUpperCase()}" completed successfully`);
    logger.trace('📌 Status Code: ', status);
    logger.log('📌 Time: ', `${(endTime - startTime).toFixed(2)} secs`);

    return data;
  } catch (err) {
    const endTime = performance.now();
    logger.error(`❌ Error requesting data: "${method.toUpperCase()}"`);
    logger.trace('📌 Status Code: ', err && err.response && err.response.status);
    logger.error('📌 Response: ', err && err.response && prettyJson(err.response.data));
    logger.trace('📌 Parameters: ', prettyJson(parameters));
    logger.trace('📌 Payload: ', prettyJson(body));
    logger.trace('📌 Headers: ', prettyJson(headers));
    logger.error('📌 Time: ', `${(endTime - startTime).toFixed(2)} secs`);

    throw err;
  }
};

module.exports = {
  getEndpointData,
};
