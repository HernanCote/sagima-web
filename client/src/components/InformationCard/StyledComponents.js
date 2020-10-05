import theme from '../../theme';
import styled from 'styled-components';

import { toCSSURL } from '../../utils';

const Root = styled.div`
    position: relative;
    padding: 1rem 0;
    text-align: center;
`;

const Image = styled.img`
    border-radius: 50%;
    width: 7rem;
    height: 7rem;
    background-position: center;
    background-size: cover;
    background-image: ${({ image }) => toCSSURL(image)};
`;

const InfoText = styled.p`
    text-transform: uppercase;
    text-align: center;
    font-size: 0.80rem;
    max-width: 8rem;
    margin: 0.75rem auto;
    color: ${theme.colors.sagimaDarkBlue};
    font-weight: bold;
`;

const PlusButton = styled.img`
    width: 1.5rem;
    height: 1.5rem;
    cursor: pointer;
`;

export {
    Root,
    Image,
    InfoText,
    PlusButton,
};