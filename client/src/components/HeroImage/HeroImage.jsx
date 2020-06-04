import React from 'react';

import {
	HeroRoot,
	BottomLine,
	Slider,
} from './StyledComponents';

import LineSection from '../LineSection';

import carousel1 from '../../static/images/carousel/carousel1.jpg';
import carousel2 from '../../static/images/carousel/carousel2.jpg';
import carousel3 from '../../static/images/carousel/carousel3.jpg';
import carousel4 from '../../static/images/carousel/carousel4.jpg';
import carousel5 from '../../static/images/carousel/carousel5.jpg';
import carousel6 from '../../static/images/carousel/carousel6.jpg';
import carousel7 from '../../static/images/carousel/carousel7.jpg';

const images = [
	carousel1,
	carousel2,
	carousel3,
	carousel4,
	carousel5,
	carousel6,
	carousel7,
];

const HeroImage = ({
	className,
	bottomText,
}) => (
		<HeroRoot classImage={className}>
			<Slider slides={images} autoPlay={4} />
			<BottomLine />
			<LineSection text={bottomText} />
		</HeroRoot>
	);

export default HeroImage;
