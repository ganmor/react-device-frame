"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getStyleSheet = exports.getProportionApplier = exports.palette = undefined;

var _aphrodite = require("aphrodite");

var palette = exports.palette = {
  black: ["#000", "#111", "#1E1E1E", "#242324", "#3C3D3D"]
};

var getProportionApplier = exports.getProportionApplier = function getProportionApplier() {
  var proportion = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;

  return function (value) {
    return Math.ceil(value * proportion);
  };
};

var getStyleSheet = exports.getStyleSheet = function getStyleSheet() {
  var proportion = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
  var color = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "black";

  var applyProportion = getProportionApplier(proportion);
  var shades = palette[color];
  return _aphrodite.StyleSheet.create({
    marvelDevice: {
      display: "inline-block",
      position: "relative",
      boxSizing: "content-box"
    },
    screen: {
      width: "100%",
      position: "relative",
      height: "100%",
      zIndex: "3",
      background: "white",
      overflow: "hidden",
      display: "block",
      borderRadius: applyProportion(1),
      boxShadow: "0 0 0 " + applyProportion(3) + "px " + shades[1]
    },
    middleBar: {
      width: applyProportion(3),
      height: applyProportion(4),
      top: 0,
      left: applyProportion(90),
      background: shades[0],
      position: "absolute"
    },
    bars: {
      height: applyProportion(3),
      background: shades[0],
      width: "100%",
      display: "block"
    }
  });
};