"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactUseGesture = require("react-use-gesture");

var _constants = require("../constants.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function noop() {}

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

function getRectFromBounds(bounds) {
  return typeof bounds === 'function' ? bounds() : bounds;
}

function getHorizontalValue(rect, x) {
  var scrollX = window.pageXOffset !== undefined ? window.pageXOffset : (document.documentElement || document.body.parentNode || document.body).scrollLeft;
  var pageX = scrollX + x;
  var dLeft = clamp(pageX - (rect.left + scrollX), 0, rect.width);
  return dLeft / rect.width;
}

function getVerticalValue(rect, y) {
  var scrollY = window.pageYOffset !== undefined ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
  var pageY = scrollY + y;
  var dTop = clamp(pageY - (rect.top + scrollY), 0, rect.height);
  return 1 - dTop / rect.height;
}

function getSliderValue(bounds, direction, xy) {
  var rect = getRectFromBounds(bounds);
  return direction === _constants.Direction.HORIZONTAL ? getHorizontalValue(rect, xy[0]) : getVerticalValue(rect, xy[1]);
}
/**
 * Slider
 *
 * A wrapper around <RangeControlOverlay /> that may be used to
 * compose slider controls such as volume sliders or progress bars.
 */


function Slider(_ref) {
  var _ref$direction = _ref.direction,
      direction = _ref$direction === void 0 ? _constants.Direction.HORIZONTAL : _ref$direction,
      _ref$onIntent = _ref.onIntent,
      onIntent = _ref$onIntent === void 0 ? noop : _ref$onIntent,
      _ref$onIntentStart = _ref.onIntentStart,
      onIntentStart = _ref$onIntentStart === void 0 ? noop : _ref$onIntentStart,
      _ref$onIntentEnd = _ref.onIntentEnd,
      onIntentEnd = _ref$onIntentEnd === void 0 ? noop : _ref$onIntentEnd,
      _ref$onChange = _ref.onChange,
      onChange = _ref$onChange === void 0 ? noop : _ref$onChange,
      _ref$onChangeStart = _ref.onChangeStart,
      onChangeStart = _ref$onChangeStart === void 0 ? noop : _ref$onChangeStart,
      _ref$onChangeEnd = _ref.onChangeEnd,
      onChangeEnd = _ref$onChangeEnd === void 0 ? noop : _ref$onChangeEnd,
      _ref$onHover = _ref.onHover,
      _onHover = _ref$onHover === void 0 ? noop : _ref$onHover,
      _ref$onHoverStart = _ref.onHoverStart,
      onHoverStart = _ref$onHoverStart === void 0 ? noop : _ref$onHoverStart,
      _ref$onHoverEnd = _ref.onHoverEnd,
      onHoverEnd = _ref$onHoverEnd === void 0 ? noop : _ref$onHoverEnd,
      _ref$children = _ref.children,
      children = _ref$children === void 0 ? null : _ref$children,
      _ref$className = _ref.className,
      className = _ref$className === void 0 ? null : _ref$className,
      _ref$style = _ref.style,
      style = _ref$style === void 0 ? {} : _ref$style,
      _ref$overlayZIndex = _ref.overlayZIndex,
      overlayZIndex = _ref$overlayZIndex === void 0 ? 10 : _ref$overlayZIndex;

  var $el = /*#__PURE__*/_react["default"].createRef();

  var bounds = function bounds() {
    return $el.current.getBoundingClientRect();
  };

  var _React$useState = _react["default"].useState(false),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      isHovering = _React$useState2[0],
      setIsHovering = _React$useState2[1];

  var bind = (0, _reactUseGesture.useGesture)({
    onMoveStart: function onMoveStart(_ref2) {
      var dragging = _ref2.dragging,
          xy = _ref2.xy;
      return !dragging && onIntentStart(getSliderValue(bounds, direction, xy));
    },
    onMove: function onMove(_ref3) {
      var dragging = _ref3.dragging,
          xy = _ref3.xy;
      var value = getSliderValue(bounds, direction, xy);
      !dragging && onIntent(value);
      isHovering && _onHover(value, true);
    },
    onMoveEnd: function onMoveEnd(_ref4) {
      var dragging = _ref4.dragging;
      return !dragging && onIntentEnd();
    },
    onDragStart: function onDragStart(_ref5) {
      var xy = _ref5.xy;
      return onChangeStart(getSliderValue(bounds, direction, xy));
    },
    onDrag: function onDrag(_ref6) {
      var xy = _ref6.xy;
      return onChange(getSliderValue(bounds, direction, xy));
    },
    onDragEnd: function onDragEnd(_ref7) {
      var xy = _ref7.xy;
      return onChangeEnd(getSliderValue(bounds, direction, xy));
    },
    onHover: function onHover(_ref8) {
      var xy = _ref8.xy,
          active = _ref8.active;
      var value = getSliderValue(bounds, direction, xy);

      if (!active) {
        setIsHovering(false);
        onHoverEnd(value);
      } else if (!isHovering) {
        setIsHovering(true);
        onHoverStart(value);
      }

      _onHover(value, active);
    }
  }, {
    axis: direction === _constants.Direction.HORIZONTAL ? 'x' : 'y',
    filterTaps: true
  });
  return /*#__PURE__*/_react["default"].createElement("div", {
    ref: $el,
    className: className,
    style: _objectSpread({
      position: 'relative'
    }, style)
  }, children, /*#__PURE__*/_react["default"].createElement("div", _extends({}, bind(), {
    style: {
      position: 'absolute',
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      zIndex: overlayZIndex
    }
  })));
}

Slider.propTypes = {
  direction: _propTypes["default"].oneOf([_constants.Direction.HORIZONTAL, _constants.Direction.VERTICAL]),
  isEnabled: _propTypes["default"].bool,
  onIntent: _propTypes["default"].func,
  onIntentStart: _propTypes["default"].func,
  onIntentEnd: _propTypes["default"].func,
  onChange: _propTypes["default"].func,
  onChangeStart: _propTypes["default"].func,
  onChangeEnd: _propTypes["default"].func,
  onHover: _propTypes["default"].func,
  onHoverStart: _propTypes["default"].func,
  onHoverEnd: _propTypes["default"].func,
  children: _propTypes["default"].node,
  className: _propTypes["default"].string,
  style: _propTypes["default"].object,
  overlayZIndex: _propTypes["default"].number
};

function arePropsEqual(prevProps, nextProps) {
  for (var prop in nextProps) {
    if (nextProps[prop] !== prevProps[prop]) {
      return false;
    }
  }

  return true;
}

var _default = /*#__PURE__*/_react["default"].memo(Slider, arePropsEqual);

exports["default"] = _default;