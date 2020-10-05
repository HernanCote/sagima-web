import React from 'react';

import HeroImage from '../../components/HeroImage';
import Footer from '../../components/Footer';

import ImageHero from '../../static/images/BaseHero.jpg';
import { P, Spaciator, Button } from '../../components/Foundation';
import { BottomSection, Section } from '../About';

import theme from '../../theme';
import styled from 'styled-components';

import BaseGridContent from '../../components/GridContent';
import InformationCard from '../../components/InformationCard';

import servicesMapping from './servicesMapping';

const ServicesRoot = styled.div`
	background-color: ${theme.colors.white};
`;

const topBannerImage = [
	ImageHero,
];

const ServicesSection = styled.section`
	display: block;
	align-items: center;
	width: 80%;
	margin: 0 auto;
`;

const GridContent = styled(BaseGridContent)``;

const gridContent = () =>
	servicesMapping.map(img => (
		<InformationCard
			image={img.image}
			text={img.text}
			description={img.description}
		/>
	));

const Services = ({
	className,
}) => (
		<ServicesRoot className={className}>
			<HeroImage images={topBannerImage} bottomText="¿QUÉ OFRECEMOS?" />
			<Section>
				<P>
					En SAGIMA ofrecemos acompañamiento integral en áreas donde se requieren
					tecnología de avanzada aplicada a sus procesos y servicios.
				</P>
				<Spaciator />
				<P>
					Contamos con un equipo de profesionales en áreas diversas, brindándote
					así un acompañamiento completo en cada etapa del proceso y para cada
					una de tus necesidades.
				</P>
				<Spaciator />
				<P>
					Algunos de los sectores a quienes hemos prestado nuestros servicios
					los puedes encontrar a continuación, sin embargo, contáctanos para
					hablar sobre tus necesidades y brindarte soluciones que se adapten
					a tu requerimiento.
				</P>
			</Section>
			<ServicesSection>
				<GridContent
					itemsDesktop={3}
					itemsTablet={2}
					itemsMobile={1}
					gridContent={gridContent}
				/>
			</ServicesSection>
			<BottomSection>
				<Button withShadow blackText bold big>
					CONTÁCTANOS
				</Button>
			</BottomSection>
			<Footer />
		</ServicesRoot>
	);

export default Services;
