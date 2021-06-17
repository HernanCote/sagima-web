const { mergeConfigs } = require('../../utils/config-utils');

module.exports = function alliesRoutes(routes, {
  controllers, middlewares, config,
}) {
  routes.get('/',
    middlewares.validator(),
    async (req, res) => {
      const {
        allies: {
          getPageData,
        },
      } = controllers;

      const headers = {
        'X-Request-Id': req.headers['X-Request-Id'],
      };

      const mergedConfig = {
        config: mergeConfigs(config.get('services.cms'), config.get('options')),
        headers,
      };

      const params = {
        pretty: true,
        props: 'slug,metadata,_id',
      };

      try {
        const projects = await getPageData(mergedConfig, params);
        res.status(200).validJsonResponse(projects);
      } catch (err) {
        res.validJsonError(err);
      }
    });

  return routes;
};
