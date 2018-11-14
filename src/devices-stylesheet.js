import { StyleSheet, css } from 'aphrodite';

export const palette = {
  black: ['#000', '#111', '#1E1E1E', '#242324', '#3C3D3D']
};

export const getProportionApplier = function(proportion = 1) {
  return function(value) {
    return Math.ceil(value / proportion);
  };
};

export const getStyleSheet = (proportion = 1, color = 'black') => {
  const applyProportion = getProportionApplier(proportion);
  const shades = palette[color];
  return StyleSheet.create({
    marvelDevice: {
      display: 'inline-block',
      position: 'relative',
      boxSizing: 'content-box'
    },
    screen: {
      width: '100%',
      position: 'relative',
      height: '100%',
      zIndex: '3',
      background: 'white',
      overflow: 'hidden',
      display: 'block',
      borderRadius: applyProportion(1),
      boxShadow: `0 0 0 ${applyProportion(3)}px ${shades[1]}`
    },
    middleBar: {
      width: applyProportion(3),
      height: applyProportion(4),
      top: 0,
      left: applyProportion(90),
      background: shades[0],
      position: 'absolute'
    },
    bars: {
      height: applyProportion(3),
      background: shades[0],
      width: '100%',
      display: 'block'
    }
  });
};
