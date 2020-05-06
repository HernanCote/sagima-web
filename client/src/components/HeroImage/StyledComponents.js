import styled from 'styled-components';
import theme from '../../theme';
import { getResponsiveStyle, toCSSURL, getMediaMinWidth } from '../../utils';

import { H2 } from '../Foundation';

const HeroRoot = styled.div`
	width: 100%;
	height: 20rem;
	margin-bottom: 6rem;

	${getMediaMinWidth('sm')} {
		height: 30rem;
	}

	${getMediaMinWidth('md')} {
		height: 40rem;
	}
`;

const Image = styled.div`
	background-position: 50% 0%;
	height: 100%;
	background-size: cover;
	background-repeat: no-repeat;
	${getResponsiveStyle('image', 'background-image', toCSSURL)};
	margin-bottom: 5rem;
`;

const BottomLine = styled.div`
	margin-top: -5rem;
	height: 1.5rem;
	width: 100%;
	background-image: linear-gradient(
		to right,
		${theme.colors.sagimaYellow},
		${theme.colors.sagimaOrange}
	);
`;

export {
	HeroRoot, //
	Image,
	BottomLine,
};
