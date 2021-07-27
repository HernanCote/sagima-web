const { mapAlliesPageProps } = require('../../utils/mappers');

const toDto = data => mapAlliesPageProps(data);

module.exports = {
  toDto,
};
