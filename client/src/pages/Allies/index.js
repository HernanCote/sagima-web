import React from 'react';
import styled from 'styled-components';

import ImageHero from '../../static/images/BaseHero.jpg';

import HeroImage from '../../components/HeroImage';
import BaseGridContent from '../../components/GridContent';
import Footer from '../../components/Footer';
import { P } from '../../components/Foundation';

import alliesMapping from './alliesMapping';

import { getMediaMinWidth } from '../../utils';
import theme from '../../theme';

const AlliesRoot = styled.div`
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

const GridImage = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

const ImageSource = styled.img`
	width: 80%;
	height: 10rem;
`;

const gridContent = () =>
	alliesMapping.map(img => (
		<GridImage>
			<ImageSource src={img.image} alt={img.name}></ImageSource>
			<ImageText>{img.name}</ImageText>
		</GridImage>
	));


const Allies = ({ className }) => (
	<AlliesRoot className={className}>
		<HeroImage image={ImageHero} bottomText="ALIADOS" />
		<Section>
			<P>
				Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet
				dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper
				suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in
				vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et
				iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.
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
