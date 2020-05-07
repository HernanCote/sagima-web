import React from 'react';
import styled from 'styled-components';

import ImageHero from '../../static/images/BaseHero.jpg';

import HeroImage from '../../components/HeroImage';
import Footer from '../../components/Footer';
import { P } from '../../components/Foundation';

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

const Contact = ({
	className, //
}) => (
	<ContactRoot className={className}>
		<HeroImage image={ImageHero} bottomText="CONTACTO" />
		<Section>
			<P>
				Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet
				dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper
				suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in
				vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et
				iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.
			</P>
		</Section>
		<Footer />
	</ContactRoot>
);

export default Contact;
