import React from 'react';

import { H2 } from '../Foundation';
import LineSection from '../LineSection';

import {
	HeroRoot, //
	Image,
	BottomLine,
} from './StyledComponents';

const HeroImage = ({
	className, //
	image,
	bottomText,
}) => (
	<HeroRoot classImage={className}>
		<Image image={image} />
		<BottomLine />
		<LineSection text={bottomText} />
	</HeroRoot>
);

export default HeroImage;
