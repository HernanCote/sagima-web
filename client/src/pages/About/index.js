import React from 'react';
import styled from 'styled-components';

import ImageHero from '../../static/images/BaseHero.jpg';
import SagimaAbout from '../../static/images/sagima-about.png';

import HeroImage from '../../components/HeroImage';
import LineSection from '../../components/LineSection';
import { P } from '../../components/Foundation';

import { getMediaMinWidth } from '../../utils';

const Section = styled.section`
	display: block;
	align-items: center;
	width: 80%;
	margin: 5rem auto;
	padding: 5rem 0;
	margin-bottom: 0;

	p {
		text-align: center;
		line-height: 1.5rem;
	}

	${getMediaMinWidth('sm')} {
		width: 60%;
	}
`;

const Image = styled.img`
	height: 17rem;
	width: 100%;
	margin: 5rem auto;

	${getMediaMinWidth('sm')} {
		height: 30rem;
	}

	${getMediaMinWidth('md')} {
		height: 37rem;
	}
`;

const About = ({ className }) => (
	<React.Fragment className={className}>
		<HeroImage image={ImageHero} bottomText="¿QUIÉNES SOMOS?" />
		<Section>
			<P>
				Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
				nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
				volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
				ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
				Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse
				molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero
				eros et accumsan et iusto odio dignissim qui blandit praesent luptatum
				zzril delenit augue duis dolore te feugait nulla facilisi.
			</P>
			<Image src={SagimaAbout} />
		</Section>
		<LineSection text="¿POR QUÉ ELEGIR NUESTROS SERVICIOS?" />
	</React.Fragment>
);

export default About;
