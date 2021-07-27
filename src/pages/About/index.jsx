import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import HeroImage from '../../components/HeroImage';
import LineSection from '../../components/LineSection';
import BaseGridContent from '../../components/GridContent';
import Footer from '../../components/Footer';

import {
  P, Button, HTML,
} from '../../components/Foundation';

import {
  getMediaMinWidth,
  fetchComponentData,
} from '../../utils';
import theme from '../../theme';

import imageMappings from './imageMappings';

const AboutRoot = styled.div`
	background-color: ${theme.colors.white};
`;
const Section = styled.section`
	display: block;
	align-items: center;
	width: 80%;
	margin: ${theme.spacing.commonSpacing} auto;
	padding: ${theme.spacing.commonSpacing} 0;
	margin-bottom: 0;

	p {
		text-align: center;
		line-height: 1.5rem;
	}

	${getMediaMinWidth('sm')} {
		width: 60%;
	}
`;

const BottomSection = styled.section`
	display: flex;
	align-items: center;
	justify-content: center;
	margin-bottom: 4rem;
`;

const ImageLogo = styled.img`
	height: auto;
	width: 100%;
	margin: ${theme.spacing.commonSpacing} auto;
`;
const ImageText = styled(P)`
	width: 9.75rem;
	text-align: center;
`;

const GridContent = styled(BaseGridContent)`

	${ImageText}:nth-child(odd) {
		color: ${theme.colors.sagimaLightBlue};
	}

	${ImageText}:nth-child(even) {
		color: ${theme.colors.sagimaDarkBlue};
	}
`;

const GridImage = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

const ImageSource = styled.img`
	width: 10rem;
`;

const gridContent = () => imageMappings.map((img, idx) => (
  <GridImage key={idx}>
    <ImageSource src={img.image} alt={img.name} />
    <ImageText>{img.name}</ImageText>
  </GridImage>
));

const About = ({
  className,
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [carouselImages, setCarouselImages] = useState(null);
  const [imageHero, setImageHero] = useState(null);
  const [whoWeAre, setWhoWeAre] = useState(null);
  const [imageHeroBottom, setImageHeroBottom] = useState(null);

  const getPageProps = async () => {
    setIsLoading(true);
    const {
      data: {
        imageHero: topImage,
        carousel,
        whoWeAre: whoWeAreData,
        imageHeroBottom: bottomImage,
      },
    } = await fetchComponentData({
      endpoint: '/api/about',
      mapper: d => ({ ...d }),
    });

    const cImages = carousel.map(image => image.imageUrl);

    setImageHero([topImage]);
    setCarouselImages(cImages);
    setWhoWeAre(whoWeAreData);
    setImageHeroBottom(bottomImage);
    setIsLoading(false);
  };

  useEffect(() => {
    getPageProps();
  }, []);

  return (
    <AboutRoot className={className}>
      <>
        {isLoading && <div>loading...</div>}
        {!isLoading && (
          <>
            {imageHero && imageHero.length > 0 && <HeroImage images={imageHero} bottomText="¿QUIÉNES SOMOS?" />}
            <Section>
              {whoWeAre && <HTML htmlText={whoWeAre} />}
              {imageHeroBottom && <ImageLogo src={imageHeroBottom} />}
            </Section>
            {carouselImages && carouselImages.length > 0 && (
            <HeroImage
              images={carouselImages}
              topText="¿QUÉ HACEMOS?"
            />
            )}
            {/* {carouselImages && carouselImages.length >
              0 && <Carousel items={carouselImages} />} */}
            <LineSection text="¿POR QUÉ ELEGIR NUESTROS SERVICIOS?" />
            <GridContent
              itemsDesktop={3}
              itemsTablet={2}
              itemsMobile={1}
              gridContent={gridContent}
            />
            <BottomSection>
              <Link to="/contact">
                <Button
                  withShadow
                  blackText
                  bold
                  big
                >
                  CONTÁCTANOS
                </Button>
              </Link>
            </BottomSection>
            <Footer />
          </>
        )}
      </>
    </AboutRoot>
  );
};

export default About;

export {
  BottomSection,
  Section,
};
