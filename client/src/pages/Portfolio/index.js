import React from 'react';

import EmptyState from '../../components/EmptyState';
import Footer from '../../components/Footer';

import theme from '../../theme';
import styled from 'styled-components';

const PortfolioRoot = styled.div`
	background-color: ${theme.colors.white};
	height: calc(100vh - (${theme.heights.breakLine} + ${theme.heights.footer} + ${theme.heights.navbar}));
`;
const Portfolio = ({ className }) => (
	<PortfolioRoot className={className}>
		<EmptyState />
		<Footer />
	</PortfolioRoot>
);

export default Portfolio;
