import React from 'react';

import {
    SlideRoot,
} from './StyledComponents';

const Slide = ({
    className,
    content
}) => (
        <SlideRoot
            className={className}
            content={content}
        ></SlideRoot>
    );

export default Slide;