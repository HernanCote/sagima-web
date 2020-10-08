import React from 'react';

import {
    Dot as BaseDot,
    DotsRoot,
} from './StyledComponents';

const Dot = ({ active }) => (
    <BaseDot active={active} />
)

const Dots = ({
    slides,
    activeIndex,
    className,
}) => (
        <DotsRoot className={className}>
            {slides.map((slide, i) => (
                <Dot key={i} active={activeIndex === i} />
            ))}
        </DotsRoot>
    );

export default Dots;