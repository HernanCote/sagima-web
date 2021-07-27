import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import BaseGridContent from '../../components/GridContent';
import Footer from '../../components/Footer';
import { P, HTML } from '../../components/Foundation';

import {
  fetchComponentData,
  getMediaMinWidth,
} from '../../utils';
import theme from '../../theme';

import HeroImage from '../../components/HeroImage';

const AlliesRoot = styled.div`
	background-color: ${theme.colors.white};
`;

const DescriptionImage = styled.img`
	width: 10rem;
	height: 10rem;
`;

const Section = styled.section`
	display: block;
	align-items: center;
	width: 80%;
	margin: ${theme.spacing.commonSpacing} auto 0;
	padding: ${theme.spacing.commonSpacing} 0;
	margin-bottom: 0;

	${DescriptionImage} {
		margin: 4rem 0;
		display: block;
		margin-left: auto;
		margin-right: auto;
	}

	p {
		text-align: center;
		line-height: 1.5rem;
	}

	${getMediaMinWidth('sm')} {
		width: 60%;
	}
`;

const ImageText = styled(P)`
	width: 9.75rem;
	text-align: center;
`;

const GridContent = styled(BaseGridContent)`
	${ImageText} {
		width: 100%;
		padding-top: 0.5rem;
		border-top: 1px solid ${theme.colors.sagimaLightGrey};
		color: ${theme.colors.sagimaLightGrey};
	}
`;

const ImageContainer = styled.div`
	height: 6.5rem;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const GridImage = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
`;

const ImageSource = styled.img`
	height: ${({ height }) => height || '9rem'};
	width: ${({ width }) => width || '70%'};
`;

const Allies = ({
  className,
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [topImage, setTopImage] = useState(null);
  const [descriptionSection, setDescriptionSection] = useState(null);
  const [allyImageSection, setAllyImageSection] = useState(null);
  const [complementaryDescriptionSection, setComplementaryDescriptionSection] = useState(null);
  const [alliesSection, setAlliesSection] = useState([]);

  const fetchPageProps = async () => {
    const {
      data: {
        imageHero,
        description,
        allyImage,
        complementaryDescription,
        allies,
      },
    } = await fetchComponentData({
      endpoint: 'api/allies',
      mapper: d => ({ ...d }),
    });

    setTopImage([imageHero]);
    setDescriptionSection(description);
    setAllyImageSection(allyImage);
    setComplementaryDescriptionSection(complementaryDescription);
    setAlliesSection(allies);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchPageProps();
  }, []);

  const gridContent = () => alliesSection.map((img, idx) => (
    <GridImage key={idx}>
      <ImageContainer>
        <ImageSource
          src={img.image}
          alt={img.name}
          height={img.height}
          width={img.width}
        />
      </ImageContainer>
      <ImageText>{img.name}</ImageText>
    </GridImage>
  ));

  return (
    <>
      {isLoading && <div>Loading...</div>}
      {!isLoading && (
      <AlliesRoot className={className}>
        {topImage && <HeroImage images={topImage} bottomText="ALIADOS" />}
        <Section>
          {descriptionSection && <HTML htmlText={descriptionSection} />}
          {allyImageSection && <DescriptionImage src={allyImageSection} alt="Nhazca" />}
          {complementaryDescriptionSection && <HTML htmlText={complementaryDescriptionSection} />}
        </Section>
        {alliesSection && alliesSection.length > 0 && (
        <GridContent
          itemsDesktop={3}
          itemsTablet={2}
          itemsMobile={1}
          gridContent={gridContent}
        />
        )}
        <Footer />
      </AlliesRoot>
      )}
    </>
  );
};

export default Allies;
