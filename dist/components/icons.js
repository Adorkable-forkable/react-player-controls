"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SoundOff = exports.SoundOn = exports.Next = exports.Previous = exports.Pause = exports.Play = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/**
 * Play
 */
var Play = function Play(props) {
  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    viewBox: "0 0 100 100"
  }, props), /*#__PURE__*/_react["default"].createElement("polygon", {
    points: "24 92 24 7 100 49.4955227"
  }));
};
/**
 * Pause
 */


exports.Play = Play;

var Pause = function Pause(props) {
  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    viewBox: "0 0 100 100"
  }, props), /*#__PURE__*/_react["default"].createElement("g", null, /*#__PURE__*/_react["default"].createElement("rect", {
    x: "58",
    y: "11",
    width: "21",
    height: "78"
  }), /*#__PURE__*/_react["default"].createElement("rect", {
    x: "22",
    y: "11",
    width: "21",
    height: "78"
  })));
};
/**
 * Previous
 */


exports.Pause = Pause;

var Previous = function Previous(props) {
  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    viewBox: "0 0 100 100"
  }, props), /*#__PURE__*/_react["default"].createElement("polygon", {
    points: "85 12.6092632 27.3529412 44.5358947 27.3529412 11 15 11 15 89 27.3529412 89 27.3529412 54.368 85 86.3028421"
  }));
};
/**
 * Next
 */


exports.Previous = Previous;

var Next = function Next(props) {
  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    viewBox: "0 0 100 100"
  }, props), /*#__PURE__*/_react["default"].createElement("polygon", {
    points: "72.6470588 11 72.6470588 44.1141176 15 12.0911765 15 85.9988235 72.6470588 53.9717647 72.6470588 89.2352941 85 89.2352941 85 11"
  }));
};
/**
 * Sound on
 */


exports.Next = Next;

var SoundOn = function SoundOn(props) {
  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    viewBox: "0 0 100 100"
  }, props), /*#__PURE__*/_react["default"].createElement("g", null, /*#__PURE__*/_react["default"].createElement("path", {
    d: "M28.0748663,36.3636364 L0,36.3636364 L0,65.9090909 L30.4812834,65.9090909 L54.5454545,88.6363636 L54.5454545,11.3636364 L28.0748663,36.3636364 Z"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M84.6032335,82.4592965 C94.5340754,74.7600841 100.468182,62.9599381 100.468182,50.1791986 C100.468182,38.1777252 95.2347685,27.0146095 86.3177905,19.2913999 L80.3660059,26.1631456 C87.313543,32.1805749 91.3772727,40.8487007 91.3772727,50.1791986 C91.3772727,60.1143215 86.7696647,69.2766862 79.0331302,75.2746895 L84.6032335,82.4592965 L84.6032335,82.4592965 Z"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M68.6941426,71.5946428 C75.48494,66.3298533 79.5454545,58.2554001 79.5454545,49.5119787 C79.5454545,41.3018627 75.9644339,33.663378 69.8670756,28.382309 L63.9152911,35.2540546 C68.0432084,38.8293434 70.4545455,43.9728382 70.4545455,49.5119787 C70.4545455,55.4097835 67.7205293,60.8464555 63.1240393,64.4100358 L68.6941426,71.5946428 L68.6941426,71.5946428 Z"
  })));
};
/**
 * Sound off
 */


exports.SoundOn = SoundOn;

var SoundOff = function SoundOff(props) {
  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    viewBox: "0 0 100 100"
  }, props), /*#__PURE__*/_react["default"].createElement("g", null, /*#__PURE__*/_react["default"].createElement("path", {
    d: "M28.0748663,36.3636364 L0,36.3636364 L0,65.9090909 L30.4812834,65.9090909 L54.5454545,88.6363636 L54.5454545,11.3636364 L28.0748663,36.3636364 Z"
  }), /*#__PURE__*/_react["default"].createElement("polygon", {
    points: "69.513151 44.1232126 87.6949692 62.3050308 90.9090909 65.5191526 97.3373344 59.0909091 94.1232126 55.8767874 75.9413945 37.6949692 72.7272727 34.4808474 66.2990293 40.9090909"
  }), /*#__PURE__*/_react["default"].createElement("polygon", {
    points: "75.9413945 62.3050308 94.1232126 44.1232126 97.3373344 40.9090909 90.9090909 34.4808474 87.6949692 37.6949692 69.513151 55.8767874 66.2990293 59.0909091 72.7272727 65.5191526"
  })));
};

exports.SoundOff = SoundOff;