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
}) => (
        <DotsRoot>
            {slides.map((slide, i) => (
                <Dot key={slide} active={activeIndex === i} />
            ))}
        </DotsRoot>
    );

export default Dots;