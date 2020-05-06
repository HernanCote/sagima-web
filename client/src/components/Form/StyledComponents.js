import styled, { css } from 'styled-components';
import theme from '../../theme';

const FormRoot = styled.form`
	width: 25em;
	max-width: 80%;
	margin: 1rem auto;
	border: 2px solid ${theme.colors.sagimaYellow};
	padding: 2rem 1rem;
	border-radius: 1.25rem;
	box-shadow: 15px 15px 25px 0 rgba(${theme.colors.blackRgb}, 0.51);
`;

const FormItem = styled.div`
	margin-bottom: 1rem;
`;

const Label = styled.label`
	width: 100%;
	display: block;
	margin-bottom: 0.5rem;
`;

const commonStyles = css`
	width: 100%;
	display: block;
	padding: 0.5rem;
	border-radius: 0.25rem;
	outline: none;
	font-size: 1rem;
`;

const Input = styled.input`
	${commonStyles}
`;

const TextArea = styled.textarea`
	${commonStyles}
`;

export { FormRoot, FormItem, Label, Input, TextArea };
