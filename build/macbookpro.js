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
  grey: ["#bebebe", "#aaa", "#F0F0F0"],
  transparent: "rgba(34, 34, 34, 0.6)"
};

var getStyleSheet = function getStyleSheet() {
  var _after, _before, _background;

  var proportion = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
  var color = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "black";

  var applyProportion = (0, _devicesStylesheet.getProportionApplier)(proportion);
  var shades = _devicesStylesheet.palette[color];
  return _aphrodite.StyleSheet.create({
    macbookpro: {
      width: applyProportion(960),
      height: applyProportion(600),
      padding: applyProportion(44) + "px " + applyProportion(44) + "px " + applyProportion(76) + "px",
      margin: "0 auto",
      background: "#BEBEBE",
      borderRadius: applyProportion(34),
      ":before": {
        width: "calc(100% - " + applyProportion(8) + "px)",
        height: "calc(100% - " + applyProportion(8) + "px)",
        content: "''",
        position: "absolute",
        display: "block",
        top: applyProportion(4),
        left: applyProportion(4),
        borderRadius: applyProportion(30),
        background: shades[2]
      }
    },
    topBar: {
      width: "calc(100% + 2 * " + applyProportion(70) + "px)",
      height: applyProportion(40),
      position: "absolute",
      content: "''",
      display: "block",
      top: applyProportion(680),
      left: applyProportion(-70),
      borderBottomLeftRadius: applyProportion(90) + "px " + applyProportion(18) + "px",
      borderBottomRightRadius: applyProportion(90) + "px " + applyProportion(18) + "px",
      background: "#BEBEBE",
      boxShadow: "inset 0px " + applyProportion(-4) + "px " + applyProportion(13) + "px " + applyProportion(3) + "px " + palette.transparent,
      ":before": {
        width: "100%",
        height: applyProportion(24),
        content: "''",
        display: "block",
        top: applyProportion(0),
        left: applyProportion(0),
        background: "#f0f0f0",
        borderBottom: applyProportion(2) + "px solid #aaa",
        borderRadius: applyProportion(5),
        position: "relative"
      },
      ":after": {
        width: "16%",
        height: applyProportion(14),
        content: "''",
        display: "block",
        top: 0,
        background: "#ddd",
        position: "absolute",
        marginLeft: "auto",
        marginRight: "auto",
        left: 0,
        right: 0,
        borderRadius: "0 0 " + applyProportion(20) + "px " + applyProportion(20) + "px",
        boxShadow: "inset 0px " + applyProportion(-3) + "px " + applyProportion(10) + "px #999"
      }
    },
    bottomBar: {
      background: "transparent",
      width: "calc(100% + 2 * " + applyProportion(70) + "px)",
      height: applyProportion(26),
      position: "absolute",
      content: "''",
      display: "block",
      top: applyProportion(680),
      left: applyProportion(-70),
      ":after": (_after = {
        height: "calc(100% - " + applyProportion(2) + "px)",
        width: applyProportion(80),
        content: "''",
        display: "block",
        top: 0,
        position: "absolute",
        right: 0,
        background: "#f0f0f0"
      }, _defineProperty(_after, "background", "-webkit-gradient(linear, left top, right top, from(#f0f0f0), color-stop(0%, #f0f0f0), color-stop(20%, #f0f0f0), color-stop(59%, #979797), color-stop(86%, #ebebeb), color-stop(95%, #c3c3c3), to(#747474))"), _defineProperty(_after, "background", "linear-gradient(to right, #f0f0f0 0%, #f0f0f0 0%, #f0f0f0 20%, #979797 59%, #ebebeb 86%, #c3c3c3 95%, #747474 100%)"), _after),
      ":before": (_before = {
        height: "calc(100% - " + applyProportion(2) + "px)",
        width: applyProportion(80),
        content: "''",
        display: "block",
        top: 0,
        position: "absolute",
        left: 0,
        background: "#f0f0f0"
      }, _defineProperty(_before, "background", "-webkit-gradient(linear, left top, right top, from(#747474), color-stop(5%, #c3c3c3), color-stop(14%, #ebebeb), color-stop(41%, #979797), color-stop(80%, #f0f0f0), color-stop(100%, #f0f0f0), to(#f0f0f0))"), _defineProperty(_before, "background", "linear-gradient(to right, #747474 0%, #c3c3c3 5%, #ebebeb 14%, #979797 41%, #f0f0f0 80%, #f0f0f0 100%, #f0f0f0 100%)"), _before)
    },
    camera: {
      background: "#3c3d3d",
      width: applyProportion(10),
      height: applyProportion(10),
      position: "absolute",
      top: applyProportion(20),
      left: "50%",
      marginLeft: applyProportion(-5),
      borderRadius: "100%"
    },
    background: (_background = {
      background: "#f16046"
    }, _defineProperty(_background, "background", "-webkit-gradient(linear, left top, left bottom, from(#f16046), to(#395f84))"), _defineProperty(_background, "background", "linear-gradient(to bottom, #f16046 0%, #395f84 100%)"), _background)
  });
};

var Macbookpro = function (_PureComponent) {
  _inherits(Macbookpro, _PureComponent);

  function Macbookpro() {
    _classCallCheck(this, Macbookpro);

    return _possibleConstructorReturn(this, (Macbookpro.__proto__ || Object.getPrototypeOf(Macbookpro)).apply(this, arguments));
  }

  _createClass(Macbookpro, [{
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
        { className: (0, _aphrodite.css)(mainSheet.marvelDevice, sheet.macbookpro) },
        _react2.default.createElement("div", { className: (0, _aphrodite.css)(mainSheet.bars, sheet.topBar) }),
        _react2.default.createElement("div", { className: (0, _aphrodite.css)(sheet.camera) }),
        _react2.default.createElement(
          "div",
          { className: (0, _aphrodite.css)(mainSheet.screen, sheet.background) },
          _react2.default.createElement(_contentFrame2.default, this.props)
        ),
        _react2.default.createElement("div", { className: (0, _aphrodite.css)(mainSheet.bars, sheet.bottomBar) })
      );
    }
  }]);

  return Macbookpro;
}(_react.PureComponent);

exports.default = Macbookpro;


Macbookpro.propTypes = {
  color: _propTypes2.default.string,
  orientation: _propTypes2.default.string,
  proportion: _propTypes2.default.number,
  site: _propTypes2.default.string
};