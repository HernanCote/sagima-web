const { get } = require('./core');

const mapAboutPageProps = data => {
  const { metadata } = data;
  return {
    imageHero: get(metadata, 'hero_image.url') || get(metadata, 'hero_image.imgix_url'),
    carousel: get(metadata, 'carousel')
      .map(item => ({
        alt: get(item, 'slug'),
        imageUrl: get(item, 'metadata.image.url'),
      })),
    whoWeAre: get(metadata, 'who_we_are'),
    imageHeroBottom: get(metadata, 'hero_image_2.url'),
  };
};

const mapServicesPageProps = data => {
  const { metadata } = data;

  return {
    imageHero: get(metadata, 'hero_image.url') || get(metadata, 'hero_image.imgix_url'),
    whatWeOffer: get(metadata, 'description'),
    offeredServices: get(metadata, 'offered_services')
      .map(item => ({
        text: get(item, 'metadata.text'),
        imageUrl: get(item, 'metadata.image.url'),
        description: get(item, 'metadata.description'),
      })),
  };
};

module.exports = {
  mapAboutPageProps,
  mapServicesPageProps,
};
