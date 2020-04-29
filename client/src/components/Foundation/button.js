import styled, { css } from 'styled-components'
import theme from '../../theme';

const Button = styled.button`
    background: ${theme.colors.white};
    font: inherit;
    border: 1px solid ${theme.colors.sagimaYellow};
    border-radius: 0.9rem;
    padding: 0.3rem 0.5rem;
    margin-right: 1rem;
    color: ${theme.colors.black};
    ${({ withShadow }) => withShadow && css`
        box-shadow: 1px 1px 5px rgba(0,0,0,0.26);
    `}
    cursor: pointer;
    outline: none;
    :hover, :active {
        background: ${theme.colors.sagimaYellow};
        color: ${theme.colors.white};
    }
`;

export {
    Button,
};