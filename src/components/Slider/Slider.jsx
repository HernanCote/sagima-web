/* eslint-disable no-shadow */
/* eslint-disable no-underscore-dangle */
import React, { useState, useEffect, useRef } from 'react';

import {
  SliderRoot,
  SliderContent,
} from './StyledComponents';

import Slide from './Slide';
import Arrow from './Arrow';
import Dots from './Dots';

const getWidth = () => window.innerWidth;

const Slider = ({
  className,
  slides,
  autoPlay,
}) => {
  const isSingle = slides.length <= 1;

  const firstSlide = slides[0];
  const secondSlide = slides[1];
  const lastSlide = slides[slides.length - 1];

  const [state, setState] = useState({
    activeSlide: 0,
    translate: getWidth(),
    transition: 1,
    _slides: [lastSlide, firstSlide, secondSlide],
  });

  const {
    activeSlide, translate, _slides, transition,
  } = state;

  const autoPlayRef = useRef();
  const transitionRef = useRef();
  const resizeRef = useRef();

  const smoothTransition = () => {
    let _slides = [];

    if (activeSlide === slides.length - 1) {
      _slides = [slides[slides.length - 2], lastSlide, firstSlide];
    } else if (activeSlide === 0) {
      _slides = [lastSlide, firstSlide, secondSlide];
    } else {
      _slides = slides.slice(activeSlide - 1, activeSlide + 2);
    }

    setState({
      ...state,
      _slides,
      transition: 0,
      translate: getWidth(),
    });
  };

  const nextSlide = () => setState({
    ...state,
    translate: translate + getWidth(),
    activeSlide: activeSlide === slides.length - 1 ? 0 : activeSlide + 1,
  });

  const prevSlide = () => setState({
    ...state,
    translate: 0,
    activeSlide: activeSlide === 0 ? slides.length - 1 : activeSlide - 1,
  });

  const handleResize = () => {
    setState({ ...state, translate: getWidth(), transition: 0 });
  };

  useEffect(() => {
    if (!isSingle) {
      autoPlayRef.current = nextSlide;
      transitionRef.current = smoothTransition;
      resizeRef.current = handleResize;
    }
  }, [isSingle, handleResize, nextSlide, smoothTransition]);

  useEffect(() => {
    if (!isSingle) {
      const play = () => {
        autoPlayRef.current();
      };

      const smooth = () => {
        transitionRef.current();
      };

      const resize = () => {
        resizeRef.current();
      };

      const transitionEnd = window.addEventListener('transitionend', smooth);
      const onResize = window.addEventListener('resize', resize);

      let interval = null;

      if (autoPlay) {
        interval = setInterval(play, autoPlay * 1000);
      }

      return () => {
        window.removeEventListener('transitionend', transitionEnd);
        window.removeEventListener('resize', onResize);

        if (autoPlay) {
          clearInterval(interval);
        }
      };
    }
  }, [isSingle, autoPlay]);

  useEffect(() => {
    if (transition === 0 && !isSingle) {
      setState({ ...state, transition: 1 });
    }
  }, [transition]);

  return (
    <SliderRoot className={className}>
      <SliderContent
        className="SliderContent"
        translate={translate}
        transition={transition}
        width={getWidth() * _slides.length}
      >
        {_slides.map((_slide, i) => (
          <Slide
            width={getWidth()}
            content={_slide}
            // eslint-disable-next-line react/no-array-index-key
            key={_slide + i}
          />
        ))}
      </SliderContent>
      {
                !isSingle && (
                <>
                  <Arrow direction="left" handleClick={prevSlide} />
                  <Arrow direction="right" handleClick={nextSlide} />
                  <Dots slides={slides} activeIndex={activeSlide} />
                </>
                )
            }

    </SliderRoot>
  );
};

export default Slider;
