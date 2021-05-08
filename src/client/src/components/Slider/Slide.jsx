import React from 'react';

import {
    SlideRoot,
} from './StyledComponents';

const Slide = ({
    className,
    content,
    width,
}) => (
        <SlideRoot
            width={width}
            className={className}
            content={content}
        ></SlideRoot>
    );

export default Slide;