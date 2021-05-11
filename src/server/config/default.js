module.exports = {
  app: {
    options: {
      log: {
        logLevel: 'ERROR',
        remainingSessionTime: false,
        sessionUserData: false,
        cache: false,
        errorStack: true,
        httpEventClient: false,
      },
    },
    services: {
      cms: {
        timeout: 10000,
        baseUrl: 'https://api.cosmicjs.com/v1/hc-dev-blog/',
        readKey: process.env.COSMIC_READ_KEY,
        endpoints: {
          projects: 'objects',
          project: 'object/:slug',
          skills: 'objects',
        },
      },
    },
  },
  server: {
    port: 5000,
    host: 'localhost',
  },
};
