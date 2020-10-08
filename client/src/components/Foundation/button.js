import styled, { css } from 'styled-components';
import theme from '../../theme';

const buttonStyles = css`
	font: inherit;
	cursor: pointer;
	color: ${theme.colors.white};
	background-color: ${theme.colors.sagimaYellow};
	border: 1px solid ${theme.colors.sagimaYellow};
	border-radius: 0.5rem;
	padding: 0.2rem 0.75rem;

	${({ big }) =>
		big &&
		css`
			padding: 0.5rem 2rem;
		`}

	${({ withShadow }) =>
		withShadow &&
		css`
			box-shadow: 5px 5px 0.25rem rgba(0, 0, 0, 0.26);
		`}

	${({ inverted }) =>
		inverted &&
		css`
			color: ${theme.colors.black};
			background: ${theme.colors.white};
		`}

	${({ blackText }) =>
		blackText &&
		css`
			color: ${theme.colors.black};
		`}

	${({ bold }) =>
		bold &
		css`
			font-weight: 600;
		`}
	
	outline: none;
	:hover,
	:active {
		background: ${theme.colors.sagimaYellow};
		color: ${theme.colors.white};
	}
`;

const Button = styled.button`
	${buttonStyles}
`;

export {
	Button,
	buttonStyles
};
