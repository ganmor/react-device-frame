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

var palette = {
  transparent: "rgba(255, 255, 255, 0.1)"
};

var getStyleSheet = function getStyleSheet() {
  var _background;

  var proportion = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
  var color = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "black";

  var applyProportion = (0, _devicesStylesheet.getProportionApplier)(proportion);
  var shades = _devicesStylesheet.palette[color];
  return _aphrodite.StyleSheet.create({
    ipad: {
      width: applyProportion(576),
      height: applyProportion(768),
      padding: applyProportion(90) + "px " + applyProportion(25) + "px",
      borderRadius: applyProportion(44),
      background: shades[3],
      ":before": {
        width: "calc(100% - " + applyProportion(8) + "px)",
        height: "calc(100% - " + applyProportion(8) + "px)",
        content: "''",
        position: "absolute",
        display: "block",
        top: applyProportion(4),
        left: applyProportion(4),
        borderRadius: applyProportion(40),
        background: shades[2]
      }
    },
    camera: {
      background: shades[4],
      width: applyProportion(10),
      height: applyProportion(10),
      position: "absolute",
      top: applyProportion(44),
      left: "50%",
      marginLeft: applyProportion(-5),
      borderRadius: "100%"
    },
    background: (_background = {
      background: "#0d3477"
    }, _defineProperty(_background, "background", "-webkit-gradient(linear, left top, left bottom, from(#0d3477), to(#adf3de))"), _defineProperty(_background, "background", "linear-gradient(to bottom, #0d3477 0%, #adf3de 100%)"), _background),
    home: {
      background: shades[3],
      borderRadius: applyProportion(36),
      width: applyProportion(50),
      height: applyProportion(50),
      position: "absolute",
      left: "50%",
      marginLeft: applyProportion(-25),
      bottom: applyProportion(22),
      ":after": {
        width: applyProportion(15),
        height: applyProportion(15),
        marginTop: applyProportion(-8),
        marginLeft: applyProportion(-8),
        border: applyProportion(1) + "px solid " + palette.transparent,
        borderRadius: applyProportion(4),
        position: "absolute",
        display: "block",
        content: "''",
        top: "50%",
        left: "50%"
      }
    }
  });
};

var Ipad = function (_PureComponent) {
  _inherits(Ipad, _PureComponent);

  function Ipad() {
    _classCallCheck(this, Ipad);

    return _possibleConstructorReturn(this, (Ipad.__proto__ || Object.getPrototypeOf(Ipad)).apply(this, arguments));
  }

  _createClass(Ipad, [{
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
        { className: (0, _aphrodite.css)(mainSheet.marvelDevice, sheet.ipad) },
        _react2.default.createElement("div", { className: (0, _aphrodite.css)(sheet.camera) }),
        _react2.default.createElement(
          "div",
          { className: (0, _aphrodite.css)(mainSheet.screen, sheet.background) },
          _react2.default.createElement(_contentFrame2.default, this.props)
        ),
        _react2.default.createElement("div", { className: (0, _aphrodite.css)(sheet.home) })
      );
    }
  }]);

  return Ipad;
}(_react.PureComponent);

exports.default = Ipad;


Ipad.propTypes = {
  color: _propTypes2.default.string,

  orientation: _propTypes2.default.string,
  proportion: _propTypes2.default.number,
  site: _propTypes2.default.string
};