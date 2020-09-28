import React from 'react';
import styled from 'styled-components';

import ImageHero from '../../static/images/BaseHero.jpg';
import SagimaAbout from '../../static/images/sagima-about.png';


import HeroImage from '../../components/HeroImage';
import LineSection from '../../components/LineSection';
import BaseGridContent from '../../components/GridContent';
import Footer from '../../components/Footer';
import { P, Spaciator, Button } from '../../components/Foundation';

import { getMediaMinWidth } from '../../utils';
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

const gridContent = () =>
	imageMappings.map(img => (
		<GridImage>
			<ImageSource src={img.image} alt={img.name}></ImageSource>
			<ImageText>{img.name}</ImageText>
		</GridImage>
	));

const About = ({
	className, //
}) => (
		<AboutRoot className={className}>
			<HeroImage image={ImageHero} bottomText="¿QUIÉNES SOMOS?" />
			<Section>
				<P>Somos la vanguardia de la ingeniería y la mecatrónica al servicio de sus necesidades</P>
				<Spaciator />
				<P>
					Nuestra misión es compañarlos en todas las áreas que requieren tecnología de avanzada aplicada a sus procesos y servicios.
					Como aliados estratégicos estamos en capacidad de diseñar, optimizar, modernizar, instalar y desarrollar sus recursos.
				</P>
				<Spaciator />
				<P>
					Una empresa joven como las tecnologías que aplicamos, con expertos en mecatrónica, informática,
					electrónica, sistemas y telecomunicaciones con preparación y experiencia en varios países del mundo.
				</P>
				<Spaciator />
				<P>
					Sagima llega a Colombia para innovar, renovar su tecnología y disminuir sus costos.
				</P>
				<ImageLogo src={SagimaAbout} />
			</Section>
			<HeroImage image={ImageHero} topText="¿QUÉ HACEMOS?" />
			<LineSection text="¿POR QUÉ ELEGIR NUESTROS SERVICIOS?" />
			<GridContent
				itemsDesktop={3}
				itemsTablet={2}
				itemsMobile={1}
				gridContent={gridContent}
			/>
			<BottomSection>
				<Button withShadow blackText bold big>
					CONTÁCTANOS
				</Button>
			</BottomSection>
			<Footer />
		</AboutRoot>
	);

export default About;
