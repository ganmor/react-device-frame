"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _contentFrame = require("./content-frame");

var _contentFrame2 = _interopRequireDefault(_contentFrame);

var _devicesStylesheet = require("./devices-stylesheet");

var _aphrodite = require("aphrodite");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var getStyleSheet = function getStyleSheet() {
  var _background;

  var proportion = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
  var color = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "black";

  var applyProportion = (0, _devicesStylesheet.getProportionApplier)(proportion);
  var shades = _devicesStylesheet.palette[color];
  return _aphrodite.StyleSheet.create({
    iphonex: {
      width: applyProportion(375),
      height: applyProportion(812),
      padding: applyProportion(26),
      background: "#fdfdfd",
      boxShadow: "inset 0 0 " + applyProportion(11) + "px 0 " + shades[0],
      borderRadius: applyProportion(66),
      ":before": {
        width: "calc(100% - " + applyProportion(10) + "px)",
        height: "calc(100% - " + applyProportion(10) + "px)",
        position: "absolute",
        top: applyProportion(5),
        content: "''",
        left: applyProportion(5),
        borderRadius: applyProportion(61),
        background: shades[0],
        zIndex: 1
      }
    },
    overflow: {
      width: "100%",
      height: "100%",
      position: "absolute",
      top: 0,
      left: 0,
      borderRadius: applyProportion(66),
      overflow: "hidden"
    },
    shadow: {
      borderRadius: "100%",
      width: applyProportion(90),
      height: applyProportion(90),
      position: "absolute",
      background: "radial-gradient(ellipse at center, rgba(0, 0, 0, 0.6) 0%, rgba(255, 255, 255, 0) 60%)"
    },
    shadowTL: {
      top: applyProportion(-20),
      left: applyProportion(-20)
    },
    shadowTR: {
      top: applyProportion(-20),
      right: applyProportion(-20)
    },
    shadowBL: {
      bottom: applyProportion(-20),
      left: applyProportion(-20)
    },
    shadowBR: {
      bottom: applyProportion(-20),
      right: applyProportion(-20)
    },
    innerShadow: {
      width: "calc(100% - " + applyProportion(20) + "px)",
      height: "calc(100% - " + applyProportion(20) + "px)",
      position: "absolute",
      top: applyProportion(10),
      overflow: "hidden",
      left: applyProportion(10),
      borderRadius: applyProportion(56),
      boxShadow: "inset 0 0 " + applyProportion(15) + "px 0 rgba(255, 255, 255, 0.66)",
      zIndex: 1,
      ":before": {
        boxShadow: "inset 0 0 " + applyProportion(20) + "px 0 #ffffff",
        width: "100%",
        height: "116%",
        position: "absolute",
        top: "-8%",
        content: "''",
        left: 0,
        borderRadius: 200 / 112,
        zIndex: 2
      }
    },
    screen: {
      borderRadius: applyProportion(40),
      boxShadow: "none"
    },
    topBar: {
      width: "100%",
      position: "absolute",
      height: applyProportion(8),
      background: "rgba(0, 0, 0, 0.1)",
      left: 0,
      top: applyProportion(80)
    },
    bottomBar: {
      width: "100%",
      position: "absolute",
      height: applyProportion(8),
      background: "rgba(0, 0, 0, 0.1)",
      left: 0,
      bottom: applyProportion(80)
    },
    volume: {
      width: applyProportion(3),
      background: "#b5b5b5",
      position: "absolute",
      left: applyProportion(-3),
      top: applyProportion(116),
      height: applyProportion(32),
      ":before": {
        width: applyProportion(3),
        background: "#b5b5b5",
        position: "absolute",
        height: applyProportion(62),
        top: applyProportion(62),
        content: "''",
        left: 0
      },
      ":after": {
        width: applyProportion(3),
        background: "#b5b5b5",
        position: "absolute",
        height: applyProportion(62),
        top: applyProportion(140),
        content: "''",
        left: 0
      }
    },
    sleep: {
      width: applyProportion(3),
      background: "#b5b5b5",
      position: "absolute",
      height: applyProportion(96),
      top: applyProportion(200),
      right: applyProportion(-3)
    },
    camera: {
      width: applyProportion(6),
      height: applyProportion(6),
      top: applyProportion(9),
      borderRadius: "100%",
      position: "absolute",
      left: applyProportion(154),
      background: "#0d4d71"
    },
    speaker: {
      height: applyProportion(6),
      width: applyProportion(60),
      left: "50%",
      position: "absolute",
      top: applyProportion(9),
      marginLeft: applyProportion(-30),
      background: "#171818",
      borderRadius: applyProportion(6)
    },
    notch: {
      position: "absolute",
      width: applyProportion(210),
      height: applyProportion(30),
      top: applyProportion(26),
      left: applyProportion(108),
      zIndex: 4,
      background: shades[0],
      borderBottomLeftRadius: applyProportion(24),
      borderBottomRightRadius: applyProportion(24),
      ":before": {
        content: "''",
        height: applyProportion(8),
        position: "absolute",
        top: 0,
        width: applyProportion(8),
        background: "radial-gradient(circle at bottom right, transparent 0, transparent 70%, black 70%, black 100%)",
        right: applyProportion(-8)
      },
      ":after": {
        content: "''",
        height: applyProportion(8),
        position: "absolute",
        top: 0,
        width: applyProportion(8),
        background: "radial-gradient(circle at bottom left, transparent 0, transparent 70%, black 70%, black 100%)",
        left: applyProportion(-8)
      }
    },
    background: (_background = {
      background: "#ff268e"
    }, _defineProperty(_background, "background", "-webkit-gradient(linear, left top, left bottom, from(#ff268e), to(#ff694f))"), _defineProperty(_background, "background", "linear-gradient(to bottom, #ff268e 0%, #ff694f 100%)"), _background)
  });
};

var Iphonex = function (_Component) {
  _inherits(Iphonex, _Component);

  function Iphonex() {
    _classCallCheck(this, Iphonex);

    return _possibleConstructorReturn(this, (Iphonex.__proto__ || Object.getPrototypeOf(Iphonex)).apply(this, arguments));
  }

  _createClass(Iphonex, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          _props$proportion = _props.proportion,
          proportion = _props$proportion === undefined ? 1 : _props$proportion,
          color = _props.color;

      var sheet = getStyleSheet(proportion, color);
      var mainSheet = (0, _devicesStylesheet.getStyleSheet)(proportion, color);
      return _react2.default.createElement(
        "div",
        { className: (0, _aphrodite.css)(mainSheet.marvelDevice, sheet.iphonex) },
        _react2.default.createElement(
          "div",
          { className: (0, _aphrodite.css)(sheet.notch) },
          _react2.default.createElement("div", { className: (0, _aphrodite.css)(sheet.camera) }),
          _react2.default.createElement("div", { className: (0, _aphrodite.css)(sheet.screen) })
        ),
        _react2.default.createElement("div", { className: (0, _aphrodite.css)(mainSheet.bars, sheet.topBar) }),
        _react2.default.createElement("div", { className: (0, _aphrodite.css)(sheet.sleep) }),
        _react2.default.createElement("div", { className: (0, _aphrodite.css)(mainSheet.bars, sheet.bottomBar) }),
        _react2.default.createElement("div", { className: (0, _aphrodite.css)(sheet.volume) }),
        _react2.default.createElement(
          "div",
          { className: (0, _aphrodite.css)(sheet.overflow) },
          _react2.default.createElement("div", { className: (0, _aphrodite.css)(sheet.shadowTR) }),
          _react2.default.createElement("div", { className: (0, _aphrodite.css)(sheet.shadowTL) }),
          _react2.default.createElement("div", { className: (0, _aphrodite.css)(sheet.shadowBR) }),
          _react2.default.createElement("div", { className: (0, _aphrodite.css)(sheet.shadowBL) })
        ),
        _react2.default.createElement("div", { className: (0, _aphrodite.css)(sheet.innerShadow) }),
        _react2.default.createElement(
          "div",
          { className: (0, _aphrodite.css)(mainSheet.screen, sheet.screen, sheet.background) },
          _react2.default.createElement(_contentFrame2.default, this.props)
        )
      );
    }
  }]);

  return Iphonex;
}(_react.Component);

exports.default = Iphonex;


Iphonex.propTypes = {
  color: _propTypes2.default.string,
  site: _propTypes2.default.string,
  orientation: _propTypes2.default.string
};