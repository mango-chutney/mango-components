"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.createComponent = exports.createStyledComponents = exports.defaultStyleProps = void 0;

require("core-js/modules/es6.object.assign");

require("core-js/modules/web.dom.iterable");

require("core-js/modules/es6.array.iterator");

require("core-js/modules/es6.object.keys");

require("core-js/modules/es6.function.name");

require("core-js/modules/es6.string.bold");

var React = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _DayPickerInput = _interopRequireDefault(require("react-day-picker/DayPickerInput"));

var _luxon = require("luxon");

var _polished = require("polished");

var _Input = require("./Input");

var _constants = require("./constants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var defaultStyleProps = {
  captionFontSize: (0, _polished.rem)(20),
  color: _constants.palette.darkGray,
  disabledColor: _constants.palette.lightGray,
  fontSize: (0, _polished.rem)(14),
  fontWeight: _constants.fontWeights.semibold,
  navButtonColor: _constants.palette.darkGray,
  outsideColor: _constants.palette.mediumGray,
  overlayBackgroundColor: _constants.palette.white,
  todayButtonFontSize: (0, _polished.rem)(8),
  todayColor: _constants.palette.primary,
  todayFontWeight: _constants.fontWeights.bold,
  weekDayColor: _constants.palette.darkGray,
  weekDayFontSize: (0, _polished.rem)(14),
  weekNumberBorderColor: _constants.palette.lightGray,
  weekNumberColor: _constants.palette.darkGray,
  weekNumberFontSize: (0, _polished.rem)(8)
};
exports.defaultStyleProps = defaultStyleProps;

var formatDate = function formatDate(dateObject, format) {
  return _luxon.DateTime.fromJSDate(dateObject).toFormat(format);
};

var parseDate = function parseDate(dateString, format) {
  var dateFromFormat = _luxon.DateTime.fromFormat(dateString, format);

  if (dateFromFormat.isValid) {
    return dateFromFormat.toJSDate();
  }

  return undefined;
};

var createStyledComponents = function createStyledComponents(styleProps) {
  var LabelComponent = _styledComponents.default.span.withConfig({
    componentId: "s43u0y-0"
  })(["font-size:", ";font-weight:", ";display:block;"], styleProps.fontSize, styleProps.fontWeight);

  var OverlayWrapperComponent = _styledComponents.default.div.withConfig({
    componentId: "s43u0y-1"
  })(["position:relative;"]);

  var OverlayComponent = _styledComponents.default.div.withConfig({
    componentId: "s43u0y-2"
  })(["left:0;z-index:1;position:absolute;background:", ";box-shadow:0 ", " ", " rgba(0,0,0,0.15);.DayPicker{display:inline-block;}.DayPicker-wrapper{position:relative;user-select:none;padding-bottom:1rem;flex-direction:row;}.DayPicker-Months{display:flex;flex-wrap:wrap;justify-content:center;}.DayPicker-Month{display:table;border-collapse:collapse;border-spacing:0;user-select:none;margin:0 1rem;margin-top:1rem;}.DayPicker-NavButton{position:absolute;cursor:pointer;top:1rem;right:1.5rem;margin-top:2px;color:", ";width:1.25rem;height:1.25rem;display:inline-block;background-size:50%;background-repeat:no-repeat;background-position:center;}.DayPicker-NavButton:hover{opacity:0.8;}.DayPicker-NavButton--prev{margin-right:1.5rem;background-image:url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAwCAYAAAB5R9gVAAAABGdBTUEAALGPC/xhBQAAAVVJREFUWAnN2G0KgjAYwPHpGfRkaZeqvgQaK+hY3SUHrk1YzNLay/OiEFp92I+/Mp2F2Mh2lLISWnflFjzH263RQjzMZ19wgs73ez0o1WmtW+dgA01VxrE3p6l2GLsnBy1VYQOtVSEH/atCCgqpQgKKqYIOiq2CBkqtggLKqQIKgqgCBjpJ2Y5CdJ+zrT9A7HHSTA1dxUdHgzCqJIEwq0SDsKsEg6iqBIEoq/wEcVRZBXFV+QJxV5mBtlDFB5VjYTaGZ2sf4R9PM7U9ZU+lLuaetPP/5Die3ToO1+u+MKtHs06qODB2zBnI/jBd4MPQm1VkY79Tb18gB+C62FdBFsZR6yeIo1YQiLJWMIiqVjQIu1YSCLNWFgijVjYIuhYYCKoWKAiiFgoopxYaKLUWOii2FgkophYp6F3r42W5A9s9OcgNvva8xQaysKXlFytoqdYmQH6tF3toSUo0INq9AAAAAElFTkSuQmCC');}.DayPicker-NavButton--next{background-image:url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAwCAYAAAB5R9gVAAAABGdBTUEAALGPC/xhBQAAAXRJREFUWAnN119ugjAcwPHWzJ1gnmxzB/BBE0n24m4xfNkTaOL7wOtsl3AXMMb+Vjaa1BG00N8fSEibPpAP3xAKKs2yjzTPH9RAjhEo9WzPr/Vm8zgE0+gXATAxxuxtqeJ9t5tIwv5AtQAApsfT6TPdbp+kUBcgVwvO51KqVhMkXKsVJFXrOkigVhCIs1Y4iKlWZxB1rX4gwlpRIIpa8SDkWmggrFq4IIRaJKCYWnSgnrXIQV1r8YD+1Vrn+bReagysIFfLABRt31v8oBu1xEBttfRbltmfjgEcWh9snUS2kNdBK6WN1vrOWxObWsz+fjxevsxmB1GQDfINWiev83nhaoiB/CoOU438oPrhXS0WpQ9xc1ZQWxWHqUYe0I0qrKCQKjygDlXIQV2r0IF6ViEBxVTBBSFUQQNhVYkHIVeJAtkNsbQ7c1LtzP6FsObhb2rCKv7NBIGoq4SDmKoEgTirXAcJVGkFSVVpgoSrXICGUMUH/QBZNSUy5XWUhwAAAABJRU5ErkJggg==');}.DayPicker-NavButton--interactionDisabled{display:none;}.DayPicker-Caption{padding:0 0.5rem;display:table-caption;text-align:left;margin-bottom:0.5rem;}.DayPicker-Caption > div{font-size:", ";font-weight:", ";}.DayPicker-Weekdays{margin-top:1rem;display:table-header-group;}.DayPicker-WeekdaysRow{display:table-row;}.DayPicker-Weekday{display:table-cell;padding:0.5rem;font-size:", ";text-align:center;color:", ";}.DayPicker-Weekday abbr[title]{border-bottom:none;text-decoration:none;}.DayPicker-Body{display:table-row-group;}.DayPicker-Week{display:table-row;}.DayPicker-Day{display:table-cell;padding:0.5rem;text-align:center;cursor:pointer;vertical-align:middle;border-radius:50%;}.DayPicker-WeekNumber{display:table-cell;padding:0.5rem;text-align:right;vertical-align:middle;min-width:1rem;font-size:", ";cursor:pointer;color:", ";border-right:", " solid ", ";}.DayPicker--interactionDisabled .DayPicker-Day{cursor:default;}.DayPicker-Footer{padding-top:0.5rem;}.DayPicker-TodayButton{border:none;background-image:none;background-color:transparent;box-shadow:none;cursor:pointer;color:", ";font-size:", ";}.DayPicker-Day--today{color:", ";font-weight:", ";}.DayPicker-Day--outside{cursor:default;color:", ";}.DayPicker-Day--disabled{color:", ";cursor:default;}"], styleProps.overlayBackgroundColor, (0, _polished.rem)(2), (0, _polished.rem)(5), styleProps.navButtonColor, styleProps.captionFontSize, styleProps.fontWeight, styleProps.weekDayFontSize, styleProps.weekDayColor, styleProps.weekNumberFontSize, styleProps.weekNumberColor, (0, _polished.rem)(1), styleProps.weekNumberBorderColor, styleProps.color, styleProps.todayButtonFontSize, styleProps.todayColor, styleProps.todayFontWeight, styleProps.outsideColor, styleProps.disabledColor);

  return _objectSpread({}, (0, _Input.createStyledComponents)(_Input.defaultStyleProps), {
    LabelComponent: LabelComponent,
    OverlayWrapperComponent: OverlayWrapperComponent,
    OverlayComponent: OverlayComponent
  });
};

exports.createStyledComponents = createStyledComponents;

function DatePicker(_ref) {
  var InputComponent = _ref.InputComponent,
      LabelComponent = _ref.LabelComponent,
      OverlayWrapperComponent = _ref.OverlayWrapperComponent,
      OverlayComponent = _ref.OverlayComponent,
      input = _ref.input,
      label = _ref.label,
      dateFormat = _ref.dateFormat,
      inputProps = _ref.inputProps,
      calendarProps = _ref.calendarProps,
      rest = _objectWithoutProperties(_ref, ["InputComponent", "LabelComponent", "OverlayWrapperComponent", "OverlayComponent", "input", "label", "dateFormat", "inputProps", "calendarProps"]);

  return React.createElement("label", {
    htmlFor: input.name
  }, label && React.createElement(LabelComponent, null, label), React.createElement(_DayPickerInput.default, _extends({
    format: dateFormat,
    formatDate: formatDate,
    parseDate: parseDate,
    placeholder: "".concat(_luxon.DateTime.local().toFormat(dateFormat)),
    inputProps: _objectSpread({}, input),
    component: function component(props) {
      return React.createElement(InputComponent, props);
    },
    onDayChange: function onDayChange(day) {
      return input.onChange(formatDate(day, dateFormat));
    },
    overlayComponent: function overlayComponent(_ref2) {
      var children = _ref2.children,
          props = _objectWithoutProperties(_ref2, ["children"]);

      return React.createElement(OverlayWrapperComponent, props, React.createElement(OverlayComponent, null, children));
    },
    dayPickerProps: _objectSpread({}, calendarProps)
  }, rest)));
}

DatePicker.defaultProps = {
  dateFormat: 'dd/LL/yyyy'
};

var createComponent = function createComponent() {
  var defaultStyledComponents = createStyledComponents(defaultStyleProps);
  return function (props) {
    return React.createElement(DatePicker, _objectSpread({}, defaultStyledComponents, props));
  };
};

exports.createComponent = createComponent;
var _default = {
  defaultStyleProps: defaultStyleProps,
  createStyledComponents: createStyledComponents,
  createComponent: createComponent
};
exports.default = _default;