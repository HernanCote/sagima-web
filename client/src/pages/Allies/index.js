import React from 'react';
import styled from 'styled-components';

import NhazcaLogo from '../../static/images/allies/nhazca.png';

import BaseGridContent from '../../components/GridContent';
import Footer from '../../components/Footer';
import { P } from '../../components/Foundation';

import alliesMapping from './alliesMapping';

import { getMediaMinWidth } from '../../utils';
import theme from '../../theme';

import HeroImage from '../../components/HeroImage';

import ImageHero from '../../static/images/BaseHero.jpg';


const images = [
	ImageHero,
];

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
	margin: ${theme.spacing.commonSpacing} auto;
	padding: ${theme.spacing.commonSpacing} 0;
	margin-bottom: 0;

	${DescriptionImage} {
		margin: 4rem 0q;
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

const gridContent = () =>
	alliesMapping.map(img => (
		<GridImage>
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


const Allies = ({
	className,
}) => (
		<AlliesRoot className={className}>
			<HeroImage images={images} bottomText="ALIADOS" />
			<Section>
				<P>
					NHAZCA (Natural HAZards Control and Assessment), empresa spin-off de la
					Universidad “Sapienza” de Roma, es líder internacional en el análisis y seguimiento de
					amenazas naturales y grandes infraestructuras para la gestión y mitigación de riesgos.
				</P>
				<P>Somos la empresa aliada de Nhazca en américa latina</P>
				<DescriptionImage src={NhazcaLogo} alt="Nhazca"></DescriptionImage>
				<P>
					Algunos de los clientes de NHAZCA, nuestra empresa aliada, son:
				</P>
			</Section>
			<GridContent
				itemsDesktop={3}
				itemsTablet={2}
				itemsMobile={1}
				gridContent={gridContent}
			/>
			<Footer />
		</AlliesRoot>
	);

export default Allies;
