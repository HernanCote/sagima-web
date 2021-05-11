import styled from 'styled-components';
import theme from '../../theme';

import BaseSlider from '../Slider';

import { getMediaMinWidth } from '../../utils';

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

const Slider = styled(BaseSlider)`
	height: 100%;
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
  HeroRoot,
  Slider,
  BottomLine,
};
