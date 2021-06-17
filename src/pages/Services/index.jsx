import React, { useState, useEffect } from 'react';

import styled from 'styled-components';
import { Link } from 'react-router-dom';
import HeroImage from '../../components/HeroImage';
import Footer from '../../components/Footer';

import { HTML, Button } from '../../components/Foundation';
import { BottomSection, Section } from '../About';

import theme from '../../theme';

import BaseGridContent from '../../components/GridContent';
import InformationCard from '../../components/InformationCard';

import {
  fetchComponentData,
} from '../../utils';

const ServicesRoot = styled.div`
	background-color: ${theme.colors.white};
`;

const ServicesSection = styled.section`
	display: block;
	align-items: center;
	width: 80%;
	margin: 0 auto;
`;

const GridContent = styled(BaseGridContent)``;

const Services = ({
  className,
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [heroImage, setHeroImage] = useState(null);
  const [description, setDescription] = useState(null);
  const [offeredServices, setOfferedServices] = useState([]);

  const [cardIndexToShow, setCardIndexToShow] = useState(-1);

  const fetchPageProps = async () => {
    setIsLoading(true);
    const {
      data: {
        imageHero,
        whatWeOffer,
        offeredServices: fetchedServices,
      },
    } = await fetchComponentData({
      endpoint: 'api/services',
      mapper: d => ({ ...d }),
    });

    setHeroImage([imageHero]);
    setDescription(whatWeOffer);
    setOfferedServices(fetchedServices);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchPageProps();
  }, []);

  const showOverlayClickHandler = index => {
    setCardIndexToShow(index);
  };

  const gridContent = () => offeredServices.map((img, idx) => (
    <InformationCard
      key={idx}
      index={idx}
      image={img.imageUrl}
      text={img.text}
      description={img.description}
      showOverlay={idx === cardIndexToShow}
      showOverlayClickHandler={showOverlayClickHandler}
    />
  ));

  return (
    <ServicesRoot className={className}>
      <>
        {isLoading && <div>Loading...</div> }
        {!isLoading && (
          <>{heroImage && heroImage.length > 0 && <HeroImage images={heroImage} bottomText="¿QUÉ OFRECEMOS?" />}
            {description && (
            <Section>
              <HTML htmlText={description} />
            </Section>
            )}
            {offeredServices && offeredServices.length > 0 && (
            <ServicesSection>
              <GridContent
                itemsDesktop={3}
                itemsTablet={2}
                itemsMobile={1}
                gridContent={gridContent}
              />
            </ServicesSection>
            )}
            <BottomSection>
              <Link to="/contact">
                <Button withShadow blackText bold big>
                  CONTÁCTANOS
                </Button>
              </Link>
            </BottomSection>
            <Footer />
          </>
        )}
      </>
    </ServicesRoot>
  );
};

export default Services;
