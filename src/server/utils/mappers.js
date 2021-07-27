const { get } = require('./core');

const mapAboutPageProps = data => {
  const { metadata } = data;
  return {
    imageHero: get(metadata, 'hero_image.url') || get(metadata, 'hero_image.imgix_url'),
    carousel: get(metadata, 'carousel')
      .map(item => ({
        alt: get(item, 'slug'),
        imageUrl: get(item, 'metadata.image.url') || get(item, 'metadata.image.imgix_url'),
      })),
    whoWeAre: get(metadata, 'who_we_are'),
    imageHeroBottom: get(metadata, 'hero_image_2.url') || get(metadata, 'hero_image_2.imgix_url'),
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
        imageUrl: get(item, 'metadata.image.url') || get(item, 'metadata.image.imgix_url'),
        description: get(item, 'metadata.description'),
      })),
  };
};

const mapAlliesPageProps = data => {
  const { metadata } = data;

  return {
    imageHero: get(metadata, 'image_hero.url') || get(metadata, 'hero_image.imgix_url'),
    description: get(metadata, 'description'),
    allyImage: get(metadata, 'ally.url') || get(metadata, 'ally.imgix_url'),
    complementaryDescription: get(metadata, 'complementary_description'),
    allies: get(metadata, 'allies')
      .map(item => ({
        name: get(item, 'metadata.name'),
        image: get(item, 'metadata.image.url') || get(item, 'metadata.image.imgix_url'),
        height: get(item, 'metadata.height'),
        width: get(item, 'metadata.width'),
      })),
  };
};

module.exports = {
  mapAboutPageProps,
  mapServicesPageProps,
  mapAlliesPageProps,
};
