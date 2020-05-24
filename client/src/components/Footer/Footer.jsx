import React from 'react';
import styled, { css } from 'styled-components';
import { NavLink } from 'react-router-dom';

import { P, Button } from '../Foundation';

import { getMediaMinWidth } from '../../utils';
import theme from '../../theme';

import SagimaLogo from '../../static/sagima/sagima.png';
import LinkedinLogo from '../../static/images/social/linkedin.png';

const FooterRoot = styled.footer`
	position: relative;
	width: 100%;
	min-height: ${theme.heights.footer};
	background-image: linear-gradient(to right, ${theme.colors.sagimaLightGrey} 60%, ${theme.colors.sagimaDarkGray});
`;

const FooterTop = styled.div`
	position: absolute;
	width: 100%;
	height: 0.75rem;
	background-image: linear-gradient(to right, ${theme.colors.sagimaYellow}, ${theme.colors.sagimaOrange});
	top: 0;
	left: 0;
`;

const FooterBottom = styled.div`
	position: absolute;
	bottom: 0;
	right: 0;
	padding-right: 1rem;
	${P} {
		font-size: 11px;
		color: ${theme.colors.sagimaLightGrey};
	}
`;

const FooterOverlay = styled.div`
	padding-top: 0.75rem;
	height: 100%;
	width: 100%;
	margin: 0 auto;

	${getMediaMinWidth('sm')} {
		width: 70%;
	}
`;

const FooterContent = styled.div`
	display: flex;
	flex-wrap: wrap;
	height: 100%;
	width: 100%;
`;

const FooterSection = styled.div`
	padding: 1.5rem;
	display: flex;
	flex-direction: column;
	text-align: left;
	height: 100%;
	align-items: center;
	justify-content: center;
	margin: 0 auto;

	${P} {
		&.info {
			${getMediaMinWidth('sm')} {
				margin-left: 1rem;
			}
		}
		color: ${theme.colors.white};
		font-size: 12px;
	}

	${getMediaMinWidth('sm')} {
		margin: 0;
		flex: 1;
		${({ alignLeft, alignCenter }) =>
			alignLeft &&
			!alignCenter &&
			css`
				align-items: flex-start;
			`}
		${({ alignLeft, alignCenter }) =>
			!alignLeft &&
			alignCenter &&
			css`
				align-items: center;
			`}
	}
`;

const SagimaImageLogo = styled.img`
	width: 17rem;
	height: auto;
`;

const SocialNetworkIcon = styled.img`
	width: 2rem;
	height: auto;
	background-color: transparent;
`;

const QuickLinks = styled.ul`
	margin: 0;

	${getMediaMinWidth('sm')} {
		margin-left: 3rem;
	}
`;

const LinkItem = styled.li`
	margin-bottom: 0.5rem;
	list-style: none;
	::before {
		content: '•';
		color: ${theme.colors.sagimaYellow};
		display: inline-block;
		width: 1rem;
		margin-left: -1em;
	}
`;

const Link = styled(NavLink)`
	color: ${theme.colors.white};
	filter: brightness(85%);
	text-decoration: none;
	transition: all 0.3s;

	:hover {
		margin-left: 1rem;
		transition: all 0.3s;
		filter: brightness(100%);
	}
`;

const Footer = ({
	className, //
}) => (
	<FooterRoot className={className}>
		<FooterTop />
		<FooterOverlay>
			<FooterContent>
				<FooterSection alignLeft>
					<SagimaImageLogo src={SagimaLogo} alt="sagima logo" />
					<P className="info">Dirección | Teléfono | Email</P>
				</FooterSection>
				<FooterSection alignCenter>
					<Button withShadow blackText>
						CONTÁCTANOS
					</Button>
					<P>O visita nuestras redes sociales</P>
					<SocialNetworkIcon src={LinkedinLogo} alt="Linkedin Sagima" />
					<P>SAGIMA</P>
				</FooterSection>
				<FooterSection>
					<QuickLinks>
						<LinkItem>
							<Link to="/about">NOSOTROS</Link>
						</LinkItem>
						<LinkItem>
							<Link to="/allies">ALIADOS</Link>
						</LinkItem>
						<LinkItem>
							<Link to="/portfolio">PORTAFOLIO</Link>
						</LinkItem>
						<LinkItem>
							<Link to="/faq">PREGUNTAS FRECUENTES</Link>
						</LinkItem>
					</QuickLinks>
				</FooterSection>
			</FooterContent>
			<FooterBottom>
				<P>&copy; {new Date().getFullYear()} | DISEÑO Sistemarte | SITIO WEB Hernán Cote</P>
			</FooterBottom>
		</FooterOverlay>
	</FooterRoot>
);

export default Footer;
