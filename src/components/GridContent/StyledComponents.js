import styled from 'styled-components';
import theme from '../../theme';

import { getMediaMinWidth } from '../../utils';

import Grid from '../Grid';

const GridContentRoot = styled.section`
	display: flex;
	align-items: center;
	justify-content: center;
	max-width: 70%;
	padding: ${theme.spacing.commonSpacing} 0;
	margin: 0 auto;
`;

const GridDesktop = styled(Grid)`
	display: none;
	width: 100%;

	${getMediaMinWidth('md')} {
		display: flex;
	}
`;

const GridTablet = styled(Grid)`
	display: none;
	width: 100%;

	${getMediaMinWidth('sm')} {
		display: flex;
	}

	${getMediaMinWidth('md')} {
		display: none;
	}
`;

const GridMobile = styled(Grid)`
	display: block;
	width: 100%;

	${getMediaMinWidth('sm')} {
		display: none;
	}
`;

export {
  GridContentRoot,
  GridDesktop,
  GridTablet,
  GridMobile,
};
