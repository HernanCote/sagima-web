const { mapAboutPageProps } = require('../../utils/mappers');

const toDto = data => mapAboutPageProps(data);

module.exports = {
  toDto,
};
