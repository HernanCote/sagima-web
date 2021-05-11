const winston = require('winston');
const config = require('./config-loader')

const dev = !config.util.getEnv('NODE_ENV')
  || ['dev', 'development', 'local'].includes(config.util.getEnv('NODE_ENV'));
const logger = winston.createLogger({
  level: dev ? 'debug' : 'info',
  format: winston.format.combine(
    dev ? winston.format.colorize() : winston.format.uncolorize(),
    winston.format.splat(),
    winston.format.simple(),
  ),
  transports: [
    new winston.transports.Console({
      stderrLevels: ['error'],
    }),
  ],
});

const info = (...message) => {
  logger.info(message);
};

const log = (...message) => {
  logger.log(message);
};

const error = (...message) => {
  console.error(message);
};

const trace = (...message) => {
  console.trace(message);
};

module.exports = {
  log,
  info,
  error,
  trace,
};
