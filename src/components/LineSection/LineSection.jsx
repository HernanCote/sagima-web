import React from 'react';

import { Root } from './StyledComponents';
import { H2 } from '../Foundation';

const LineSection = ({ className, text }) => (
  <Root className={className}>
    <H2>{text}</H2>
  </Root>
);

export default LineSection;
