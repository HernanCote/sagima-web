import React from 'react';
import BaseCarousel from 'react-bootstrap/Carousel';
import styled from 'styled-components';

const StyledCarousel = styled(BaseCarousel)`
    position: relative;
    height: 100vh;
    width: 100%;
    margin: 0 auto;
    overflow: hidden;
`;

const Carousel = ({
  items,
}) => (
  <StyledCarousel>
    {items.map(item => (<CarouselItem {...item} />))}
  </StyledCarousel>
);

const CarouselItem = ({
  className,
  imageUrl,
  alt = '',
}) => (
  <BaseCarousel.Item className={className}>
    <img
      className="d-block w-100"
      src={imageUrl}
      alt={alt}
    />
  </BaseCarousel.Item>
);

export default Carousel;

export {
  CarouselItem,
};
