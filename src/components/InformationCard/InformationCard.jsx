import React from 'react';

import HTML from '../Foundation/HTML';

import {
  Root,
  Image,
  InfoText,
  PlusButton,
  Overlay,
} from './StyledComponents';

import Plus from '../../static/icons/plus.png';

const InformationCard = ({
  className,
  image,
  text,
  description,
  showOverlay = false,
  showOverlayClickHandler,
  index,
}) => (
  <Root className={className}>
    <Image image={image} />
    <InfoText>{text}</InfoText>
    <PlusButton src={Plus} onClick={() => showOverlayClickHandler(index)} />
    <Overlay showOverlay={showOverlay}>
      <HTML htmlText={description} />
    </Overlay>
  </Root>
);

export default InformationCard;
