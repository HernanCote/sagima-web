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
        baseUrl: 'https://api.cosmicjs.com/v2/buckets/sagima-web-production/',
        readKey: process.env.COSMIC_READ_KEY,
        endpoints: {
          about: 'objects/60b906d741c72f000818c6c0',
          services: 'objects/60cb7658aa078d0009ede4c2',
          allies: 'objects/60cbad019fc83600082e9e69',
        },
      },
    },
  },
  server: {
    port: 5000,
    host: 'localhost',
  },
};
