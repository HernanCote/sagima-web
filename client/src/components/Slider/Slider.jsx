import React, { useState } from 'react';

import {
    SliderRoot,
    SliderContent,
} from './StyledComponents';

import Slide from './Slide';
import Arrow from './Arrow';
import Dots from './Dots';

const Slider = ({
    className,
    slides,
}) => {
    const getWidth = () => window.innerWidth

    const [state, setState] = useState({
        activeIndex: 0,
        translate: 0,
        transition: 0.3,
    });


    const { translate, transition, activeIndex } = state;

    const nextSlide = () => {
        if (activeIndex === slides.length - 1) {
            return setState({
                ...state,
                translate: 0,
                activeIndex: 0
            })
        }

        setState({
            ...state,
            activeIndex: activeIndex + 1,
            translate: (activeIndex + 1) * getWidth()
        })
    }

    const prevSlide = () => {
        if (activeIndex === 0) {
            return setState({
                ...state,
                translate: (slides.length - 1) * getWidth(),
                activeIndex: slides.length - 1
            })
        }

        setState({
            ...state,
            activeIndex: activeIndex - 1,
            translate: (activeIndex - 1) * getWidth()
        })
    }

    return (
        <SliderRoot className={className}>
            <SliderContent
                translate={translate}
                transition={transition}
                width={getWidth() * slides.length}
            >
                {slides.map((slide, i) => (
                    <Slide
                        content={slide}
                        key={i}
                    />
                ))}
            </SliderContent>
            <Arrow direction="left" handleClick={prevSlide} />
            <Arrow direction="right" handleClick={nextSlide} />
            <Dots slides={slides} activeIndex={activeIndex} />
        </SliderRoot>
    );
};


export default Slider;