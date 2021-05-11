const express = require('express');
const set = require('lodash/set');
const { resolve, join } = require('path');

const config = require('./utils/config-loader');

const {
  loadControllers,
  loadMiddlewares,
  loadRoutes,
} = require('./utils/bootstrap');
const endpointNotFoundMiddleware = require('./middlewares/endpoint-not-found');
const logger = require('./utils/logger');

const { port, host } = config.get('server');

const dev = !config.util.getEnv('NODE_ENV')
    || ['dev', 'development', 'local'].includes(config.util.getEnv('NODE_ENV'));

async function init() {
  logger.info('Starting Sagima Web API');

  const expressApp = express();

  logger.info('⚙️ ', `Loading config from: "${config.util.getEnv('NODE_CONFIG_ENV')}"`);

  const bootstrap = {
    express,
    app: expressApp,
    config: config.get('app'),
    controllers: await loadControllers(resolve(__dirname, './controllers')),
    setConfig(field, newValue) {
      set(bootstrap.config, field, newValue);
    },
  };

  bootstrap.middlewares = await loadMiddlewares(resolve(__dirname, './middlewares'), expressApp, bootstrap);
  const routes = await loadRoutes(
    express.Router(),
    resolve(__dirname, './routes'),
    bootstrap,
  );

  expressApp.use('/api', routes);
  expressApp.use('/api/*', endpointNotFoundMiddleware);

  logger.info('Sagima Web dependencies initialized');

  if (process.env.NODE_ENV === 'production') {
    expressApp.use(express.static(join(__dirname, '../../build')));

    expressApp.get('*', (_, res) => res.sendFile(resolve(__dirname, '..', '..', 'build', 'index.html')));
  } else {
    expressApp.get('/', (_, res) => {
      res.send(`API is running on port ${port}...`);
    });
  }

  const server = expressApp.listen(port, host, err => {
    if (err) throw err;

    const { address } = server.address();

    expressApp.serverInstance = server;

    const hostUrl = `http://${address}:${port}`;

    logger.info('✅ ', 'Sagima Web API started successfully');
    logger.info(`Sagima Web API is running on ${hostUrl}`);

    const gracefulExit = () => {
      logger.log('🚪 Manual shutdown, closing server');

      server.close();
    };

    process.on('SIGTERM', gracefulExit);
    process.on('SIGINT', gracefulExit);
  });
}

const handleGlobalError = err => {
  if (dev) {
    // eslint-disable-next-line no-console
    console.error(err);

    // eslint-disable-next-line
    const createCallSiteRecord = require('callsite-record');

    logger.error(`🚨 Uncaught Error:\n${createCallSiteRecord({ forError: err }).renderSync()}`);
  } else {
    logger.error('🚨 Uncaught Error:', err.toString());
    logger.trace(err);
  }
};

process.on('uncaughtException', handleGlobalError);
process.on('unhandledRejection', handleGlobalError);

init();
