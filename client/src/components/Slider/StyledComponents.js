import styled from 'styled-components';

import { toCSSURL, getResponsiveStyle } from '../../utils';

const ArrowImage = styled.img`
    height: 2rem;
    width: 2rem;
`;

const ArrowRoot = styled.div`
    display: flex;
    position: absolute;
    top: 50%;
    ${({ direction }) => direction === 'right' ? `right: 25px` : `left: 25px`};
    height: 50px;
    width: 50px;
    justify-content: center;
    background: white;
    border-radius: 50%;
    cursor: pointer;
    align-items: center;
    transition: transform ease-in 0.1s;

    &:hover {
        transform: scale(1.1);
    }
    
    ${ArrowImage} {
        transform: translateX(${({ direction }) => direction === 'left' ? '-2' : '2'}px);
        &:focus {
            outline: 0;
        }
    }
`;

const DotsRoot = styled.div`
    position: absolute;
    bottom: 1.5rem;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Dot = styled.span`
    padding: 10px;
    margin-right: 5px;
    cursor: pointer;
    border-radius: 50%;
    background: ${({ active }) => active ? 'rgba(255,255,255,0.9)' : 'rgba(255,255,255,0.3)'};
`;

const SlideRoot = styled.div`
    width: ${({ width }) => width}px;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    ${getResponsiveStyle('content', 'background-image', toCSSURL)};
`;

const SliderRoot = styled.div`
    position: relative;
    height: 100vh;
    width: 100%;
    margin: 0 auto;
    overflow: hidden;
`;

const SliderContent = styled.div`
    height: 100%;
    display: flex;
    ${({ translate }) => `transform: translateX(-${translate}px)`};
    ${({ transition }) => `transition: transform cubic-bezier(.04,.33,.93,.68) ${transition}s`};
    ${({ width }) => `width: ${width}px`};
`;

export {
    SlideRoot,
    SliderRoot,
    SliderContent,
    ArrowImage,
    ArrowRoot,
    DotsRoot,
    Dot,
};