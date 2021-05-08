import React from 'react';

import {
	HeroRoot,
	BottomLine,
	Slider,
} from './StyledComponents';

import LineSection from '../LineSection';


const HeroImage = ({
	className,
	images,
	bottomText,
	topText
}) => (
		<HeroRoot classImage={className}>
			{topText && <LineSection text={topText} />}
			<Slider slides={images} autoPlay={4} />
			<BottomLine />
			{bottomText && <LineSection text={bottomText} />}
		</HeroRoot>
	);

export default HeroImage;
