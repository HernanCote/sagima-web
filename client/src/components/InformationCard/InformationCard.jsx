import React, { useState } from 'react';

import styled from 'styled-components';

import {
    Root,
    Image,
    InfoText,
    PlusButton,
} from './StyledComponents';

import HTML from '../Foundation/HTML'

import Plus from '../../static/icons/plus.png';

const Overlay = styled.div`
    display: ${({ showOverlay }) => showOverlay ? 'block' : 'none'};
    height: 100%;
    width: 100%;
    background: rgba(0,0,0,0.75);
    padding: 1rem 2rem;
    position: absolute;
    left: 0;
    top: 0;
    color: white;
    font-size: 0.85rem;
`;



const InformationCard = ({
    className,
    image,
    text,
    description,
}) => {

    const [show, setShow] = useState(false);

    const showClickHandler = () => {
        setShow(true);
    };
    return (
        <Root className={className}>
            <Image image={image} />
            <InfoText>{text}</InfoText>
            <PlusButton src={Plus} onClick={showClickHandler} />
            <Overlay showOverlay={show}>
                <HTML htmlText={description} />
            </Overlay>
        </Root>
    );

};

export default InformationCard;