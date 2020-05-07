import React from 'react';

import styled from 'styled-components';

import theme from '../../theme';

const FooterRoot = styled.footer`
	position: absolute;
	bottom: -10rem;
	width: 100%;
	height: ${theme.heights.footer};
	background-image: linear-gradient(
		to right,
		${theme.colors.sagimaLightGrey} 60%,
		${theme.colors.sagimaDarkGray}
	);
`;

const FooterTop = styled.div`
	position: absolute;
	width: 100%;
	height: 0.75rem;
	background-image: linear-gradient(
		to right,
		${theme.colors.sagimaYellow},
		${theme.colors.sagimaOrange}
	);
	top: 0;
	left: 0;
`;

const Footer = ({
	className, //
}) => (
	<FooterRoot className={className}>
		<FooterTop />
	</FooterRoot>
);

export default Footer;
