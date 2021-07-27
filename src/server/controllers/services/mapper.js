const { mapServicesPageProps } = require('../../utils/mappers');

const toDto = data => mapServicesPageProps(data);

module.exports = {
  toDto,
};
