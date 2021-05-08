import styled from 'styled-components';

import { H2 } from '../Foundation';
import theme from '../../theme';
import { getMediaMinWidth } from '../../utils';

const Root = styled.div`
	height: 4.5rem;

	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	background-image: linear-gradient(
		to right,
		${theme.colors.sagimaLightBlue},
		${theme.colors.sagimaDarkBlue}
	);

	${H2} {
		margin: 0;
		padding: 0;
		font-size: ${theme.fontSizes.h4};
		color: ${theme.colors.white};
		font-family: 'Jost';
		font-weight: 600;
	}

	${getMediaMinWidth('sm')} {
		${H2} {
			font-size: ${theme.fontSizes.h2};
		}
	}
`;

export { Root };
