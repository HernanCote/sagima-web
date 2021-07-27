import React from 'react';

import {
  ArrowRoot,
  ArrowImage,
} from './StyledComponents';

import LeftArrow from '../../static/icons/arrow-left.svg';
import RightArrow from '../../static/icons/arrow-right.svg';

const Arrow = ({
  className,
  direction,
  handleClick,
}) => (
  <ArrowRoot
    className={className}
    onClick={handleClick}
    direction={direction}
  >
    {direction === 'right' ? <ArrowImage src={RightArrow} /> : <ArrowImage src={LeftArrow} />}
  </ArrowRoot>
);

export default Arrow;
