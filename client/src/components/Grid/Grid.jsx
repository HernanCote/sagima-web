import React from 'react';
import styled from 'styled-components';

import { getResponsiveStyle, toPercentage } from '../../utils';
import theme from '../../theme';

const getItemWidth = val => toPercentage(1 / val);
const getFullMargin = isFull =>
	isFull ? `calc(-2 * ${theme.grid.itemsPadding})` : 0;

const Root = styled.div`
	display: flex;
	flex-wrap: wrap;
	margin: ${({ fullHeight }) => getFullMargin(fullHeight)}
		${({ fullWidth }) => getFullMargin(fullWidth)};
	padding: ${theme.grid.itemsPadding};

	${getResponsiveStyle('itemsPerRow', '--item-width', getItemWidth)};
`;

const Item = styled.div`
	padding: ${theme.grid.itemsPadding};
	width: var(--item-width);
`;

const Grid = ({ className, children, itemsPerRow, fullWidth, fullHeight }) => (
	<Root
		className={className}
		itemsPerRow={itemsPerRow}
		fullWidth={fullWidth}
		fullHeight={fullHeight}
	>
		{React.Children.map(children, (child, idx) => (
			// eslint-disable-next-line react/no-array-index-key
			<Item key={idx}>{child}</Item>
		))}
	</Root>
);

Grid.defaultProps = {
	itemsPerRow: {
		default: 1,
		sm: 2,
		md: 5,
	},
};

export { Root, Item };

export default Grid;
