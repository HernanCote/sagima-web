import React from 'react';
import styled from 'styled-components';

import ImageHero from '../../static/images/BaseHero.jpg';

import HeroImage from '../../components/HeroImage';
import Footer from '../../components/Footer';

import { P } from '../../components/Foundation';

import SagimaLogo from '../../static/images/sagima/sagima-yellow-white.png';

import { getMediaMinWidth } from '../../utils';
import theme from '../../theme';


const ContactRoot = styled.div`
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

const images = [
	ImageHero,
];

const FormRoot = styled.div`
	display: flex;
	flex-direction: column;
	height: 30rem;
	width: 100%;
	
	${getMediaMinWidth('sm')} {
		flex-direction: row;
	}
`;

const FormInformation = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	align-content: space-between;
	align-items: center;
	justify-content: space-between;
	height: 100%;
	width: 100%;
	padding: 6rem 0;
	background-color: ${theme.colors.sagimaDarkGray};
	
	> ${P} {
		padding: 0 4rem;
	}
	
	${P} {
		color: ${theme.colors.sagimaLightGrey};
	}
`;

const ContactInformation = styled.div`
	position: absolute;
	bottom: 1.5rem;
	right: 1.5rem;

	${P} {
		font-size: 0.75rem;
		text-align: end;
		margin: 0rem;
	}
`;

const FormLogo = styled.img`
	width: 10rem;
`;

const Form = styled.div`
	height: 100%;
	width: 100%;
`;

const Contact = ({
	className,
}) => (
		<ContactRoot className={className}>
			<HeroImage images={images} bottomText="CONTACTO" />
			<Section>
				<FormRoot>
					<FormInformation>
						<FormLogo src={SagimaLogo} />
						<P>
							En SAGIMA estamos para
							servirte, por eso responderemos
							a tu solicitud con la mayor
							brevedad.
						</P>
						<P>
							Gracias por contactarnos
						</P>
						<ContactInformation>
							<P>contacto@sagima.com.co</P>
							<P>Bogotá, Colombia</P>
						</ContactInformation>
					</FormInformation>
					<Form>

					</Form>
				</FormRoot>
			</Section>
			<Footer />
		</ContactRoot>
	);

export default Contact;
