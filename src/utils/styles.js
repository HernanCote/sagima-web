import { isNumber, isObject, identity } from './core';
import theme from '../theme';

const toPixel = value => (isNumber(value) ? `${value}px` : value);
const mediaMinWidth = size => `@media only screen and (min-width: ${toPixel(size)})`;
// eslint-disable-next-line max-len
const getMediaMinWidth = size => mediaMinWidth((theme.breakpoints && theme.breakpoints[size]) || size);
const toCSSURL = url => (!url ? 'none' : `url("${url.replace(/(\(|\))/g, (_, g1) => escape(g1))}")`);
const toPercentage = value => (isNumber(value) ? `${100 * value}%` : value);

const propToCSSURL = prop => props => toCSSURL(props[prop]);

const getResponsiveStyle = (
  key,
  cssStyle = key,
  propMapper = identity,
) => props => {
  const { [key]: prop } = props;

  if (isObject(prop)) {
    return Object.entries(prop).reduce((acc, [mq, val]) => {
      if (mq === 'default') {
        acc[cssStyle] = propMapper(val);
      } else {
        acc[getMediaMinWidth(mq)(props)] = {
          [cssStyle]: propMapper(val),
        };
      }

      return acc;
    }, {});
  }

  return {
    [cssStyle]: propMapper(prop),
  };
};

export {
  toPixel,
  mediaMinWidth,
  getMediaMinWidth,
  toCSSURL,
  getResponsiveStyle,
  propToCSSURL,
  toPercentage,
};
