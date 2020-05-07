import React from 'react';

import EmptyState from '../../components/EmptyState';
import Footer from '../../components/Footer';

import theme from '../../theme';
import styled from 'styled-components';

const HomeRoot = styled.div`
	background-color: ${theme.colors.white};
	height: calc(100vh - (${theme.heights.breakLine} + ${theme.heights.footer} + ${theme.heights.navbar}));
`;

const Home = ({
	className, //
}) => (
	<HomeRoot className={className}>
		<EmptyState />
		<Footer />
	</HomeRoot>
);

export default Home;
