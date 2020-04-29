import styled, { css } from 'styled-components';
import theme from '../../theme';

const h1 = css`
    font-size: ${theme.fontSizes.h1};
    font-weight: 200;
`;

const H1 = styled.h1`
    ${h1}
`;

const h2 = css`
    font-size: ${theme.fontSizes.h2};
    font-weight: 200;
`;

const H2 = styled.h2`
    ${h2}
`;

const h3 = css`
    font-size: ${theme.fontSizes.h3};
    font-weight: normal;
`;

const H3 = styled.h3`
    ${h3}
`;

const h4 = css`
    font-size: ${theme.fontSizes.h4};;
    font-weight: normal;
`;

const H4 = styled.h4`
    ${h4}
`;

const h5 = css`
    font-size: ${theme.fontSizes.h5};
    font-weight: normal;
`;

const H5 = styled.h5`
    ${h5}
`;

const p = css`
    font-size: ${theme.fontSizes.normal};;
    font-weight: normal;
`;

const P = styled.p`
    ${p}
`;

const small = css`
    font-size: ${theme.fontSizes.small};;
`;

const Small = styled.span`
    ${small}
`;

const Text = styled.span``;


const figCaption = css`
    font-weight: normal;
    opacity: 0.5;
`;


export {
    H1,
    H2,
    H3,
    H4,
    H5,
    P,
    Small,
    h1,
    h2,
    h3,
    h4,
    h5,
    p,
    small,
    Text,
    figCaption,
};
