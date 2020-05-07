import React from 'react';

import EmptyState from '../../components/EmptyState';
import theme from '../../theme';
import styled from 'styled-components';
import Footer from '../../components/Footer';

const AlliesRoot = styled.div`
	background-color: ${theme.colors.white};
	height: calc(100vh - (${theme.heights.breakLine} + ${theme.heights.footer} + ${theme.heights.navbar}));
`;

const Allies = ({ className }) => (
	<AlliesRoot>
		<EmptyState className={className} />
		<Footer />
	</AlliesRoot>
);

export default Allies;
