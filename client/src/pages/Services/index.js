import React from 'react';

import EmptyState from '../../components/EmptyState';
import Footer from '../../components/Footer';

import theme from '../../theme';
import styled from 'styled-components';

const ServicesRoot = styled.div`
	background-color: ${theme.colors.white};
`;
const Services = ({
	className,
}) => (
		<ServicesRoot className={className}>
			<EmptyState />
			<Footer />
		</ServicesRoot>
	);

export default Services;
