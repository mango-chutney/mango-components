"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.createComponent = exports.createStyledComponents = exports.defaultStyleProps = void 0;

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/web.dom.iterable");

require("core-js/modules/es6.array.iterator");

require("core-js/modules/es6.object.keys");

require("core-js/modules/es6.string.bold");

var React = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _DayPickerInput = _interopRequireDefault(require("react-day-picker/DayPickerInput"));

var _luxon = require("luxon");

var _polished = require("polished");

var _Input = require("../Input");

var _constants = require("../constants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

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

var createStyledComponents = function createStyledComponents(styleProps) {
  var OverlayWrapperComponent = _styledComponents.default.div.withConfig({
    componentId: "s1bmr7pd-0"
  })(["position:relative;"]);

  var OverlayComponent = _styledComponents.default.div.withConfig({
    componentId: "s1bmr7pd-1"
  })(["left:0;z-index:1;position:absolute;background:", ";box-shadow:0 ", " ", " rgba(0,0,0,0.15);.DayPicker{display:inline-block;}.DayPicker-wrapper{position:relative;user-select:none;padding-bottom:1rem;flex-direction:row;}.DayPicker-Months{display:flex;flex-wrap:wrap;justify-content:center;}.DayPicker-Month{display:table;border-collapse:collapse;border-spacing:0;user-select:none;margin:0 1rem;margin-top:1rem;}.DayPicker-NavButton{position:absolute;cursor:pointer;top:1rem;right:1.5rem;margin-top:2px;color:", ";width:1.25rem;height:1.25rem;display:inline-block;background-size:50%;background-repeat:no-repeat;background-position:center;}.DayPicker-NavButton:hover{opacity:0.8;}.DayPicker-NavButton--prev{margin-right:1.5rem;nnbackground-image:url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAwCAYAAAB5R9gVAAAABGdBTUEAALGPC/xhBQAAAVVJREFUWAnN2G0KgjAYwPHpGfRkaZeqvgQaK+hY3SUHrk1YzNLay/OiEFp92I+/Mp2F2Mh2lLISWnflFjzH263RQjzMZ19wgs73ez0o1WmtW+dgA01VxrE3p6l2GLsnBy1VYQOtVSEH/atCCgqpQgKKqYIOiq2CBkqtggLKqQIKgqgCBjpJ2Y5CdJ+zrT9A7HHSTA1dxUdHgzCqJIEwq0SDsKsEg6iqBIEoq/wEcVRZBXFV+QJxV5mBtlDFB5VjYTaGZ2sf4R9PM7U9ZU+lLuaetPP/5Die3ToO1+u+MKtHs06qODB2zBnI/jBd4MPQm1VkY79Tb18gB+C62FdBFsZR6yeIo1YQiLJWMIiqVjQIu1YSCLNWFgijVjYIuhYYCKoWKAiiFgoopxYaKLUWOii2FgkophYp6F3r42W5A9s9OcgNvva8xQaysKXlFytoqdYmQH6tF3toSUo0INq9AAAAAElFTkSuQmCC');}.DayPicker-NavButton--next{background-image:url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAwCAYAAAB5R9gVAAAABGdBTUEAALGPC/xhBQAAAXRJREFUWAnN119ugjAcwPHWzJ1gnmxzB/BBE0n24m4xfNkTaOL7wOtsl3AXMMb+Vjaa1BG00N8fSEibPpAP3xAKKs2yjzTPH9RAjhEo9WzPr/Vm8zgE0+gXATAxxuxtqeJ9t5tIwv5AtQAApsfT6TPdbp+kUBcgVwvO51KqVhMkXKsVJFXrOkigVhCIs1Y4iKlWZxB1rX4gwlpRIIpa8SDkWmggrFq4IIRaJKCYWnSgnrXIQV1r8YD+1Vrn+bReagysIFfLABRt31v8oBu1xEBttfRbltmfjgEcWh9snUS2kNdBK6WN1vrOWxObWsz+fjxevsxmB1GQDfINWiev83nhaoiB/CoOU438oPrhXS0WpQ9xc1ZQWxWHqUYe0I0qrKCQKjygDlXIQV2r0IF6ViEBxVTBBSFUQQNhVYkHIVeJAtkNsbQ7c1LtzP6FsObhb2rCKv7NBIGoq4SDmKoEgTirXAcJVGkFSVVpgoSrXICGUMUH/QBZNSUy5XWUhwAAAABJRU5ErkJggg==');}.DayPicker-NavButton--interactionDisabled{display:none;}.DayPicker-Caption{padding:0 0.5rem;display:table-caption;text-align:left;margin-bottom:0.5rem;}.DayPicker-Caption > div{font-size:", ";font-weight:", ";}.DayPicker-Weekdays{margin-top:1rem;display:table-header-group;}.DayPicker-WeekdaysRow{display:table-row;}.DayPicker-Weekday{display:table-cell;padding:0.5rem;font-size:", ";text-align:center;color:", ";}.DayPicker-Weekday abbr[title]{border-bottom:none;text-decoration:none;}.DayPicker-Body{display:table-row-group;}.DayPicker-Week{display:table-row;}.DayPicker-Day{display:table-cell;padding:0.5rem;text-align:center;cursor:pointer;vertical-align:middle;border-radius:50%;}.DayPicker-WeekNumber{display:table-cell;padding:0.5rem;text-align:right;vertical-align:middle;min-width:1rem;font-size:", ";cursor:pointer;color:", ";border-right:", " solid ", ";}.DayPicker--interactionDisabled .DayPicker-Day{cursor:default;}.DayPicker-Footer{padding-top:0.5rem;}.DayPicker-TodayButton{border:none;background-image:none;background-color:transparent;box-shadow:none;cursor:pointer;color:", ";font-size:", ";}.DayPicker-Day--today{color:", ";font-weight:", ";}.DayPicker-Day--outside{cursor:default;color:", ";}.DayPicker-Day--disabled{color:", ";cursor:default;}"], styleProps.overlayBackgroundColor, (0, _polished.rem)(2), (0, _polished.rem)(5), styleProps.navButtonColor, styleProps.captionFontSize, styleProps.fontWeight, styleProps.weekDayFontSize, styleProps.weekDayColor, styleProps.weekNumberFontSize, styleProps.weekNumberColor, (0, _polished.rem)(1), styleProps.weekNumberBorderColor, styleProps.color, styleProps.todayButtonFontSize, styleProps.todayColor, styleProps.todayFontWeight, styleProps.outsideColor, styleProps.disabledColor);

  return {
    OverlayWrapperComponent: OverlayWrapperComponent,
    OverlayComponent: OverlayComponent
  };
};

exports.createStyledComponents = createStyledComponents;

var DatePicker =
/*#__PURE__*/
function (_React$Component) {
  _inherits(DatePicker, _React$Component);

  function DatePicker() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, DatePicker);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(DatePicker)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "datePickerRef", React.createRef());

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleOnDayChange", function (day) {
      var _this$props = _this.props,
          dateFormat = _this$props.dateFormat,
          formatDate = _this$props.formatDate,
          input = _this$props.input,
          onDayChange = _this$props.onDayChange;

      if (day) {
        input.onChange(formatDate(day, dateFormat));

        if (_this.datePickerRef.current) {
          _this.datePickerRef.current.hideDayPicker();
        }
      }

      if (onDayChange && typeof onDayChange === 'function') {
        onDayChange(day);
      }
    });

    return _this;
  }

  _createClass(DatePicker, [{
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          InputComponent = _this$props2.InputComponent,
          OverlayWrapperComponent = _this$props2.OverlayWrapperComponent,
          OverlayComponent = _this$props2.OverlayComponent,
          classNames = _this$props2.classNames,
          clickUnselectsDay = _this$props2.clickUnselectsDay,
          component = _this$props2.component,
          dateFormat = _this$props2.dateFormat,
          dayPickerProps = _this$props2.dayPickerProps,
          format = _this$props2.format,
          formatDate = _this$props2.formatDate,
          hideOnDayClick = _this$props2.hideOnDayClick,
          inputProps = _this$props2.inputProps,
          keepFocus = _this$props2.keepFocus,
          onBlur = _this$props2.onBlur,
          onChange = _this$props2.onChange,
          onClick = _this$props2.onClick,
          onDayChange = _this$props2.onDayChange,
          onFocus = _this$props2.onFocus,
          onKeyUp = _this$props2.onKeyUp,
          overlayComponent = _this$props2.overlayComponent,
          parseDate = _this$props2.parseDate,
          placeholder = _this$props2.placeholder,
          showOverlay = _this$props2.showOverlay,
          value = _this$props2.value,
          input = _this$props2.input,
          meta = _this$props2.meta,
          rest = _objectWithoutProperties(_this$props2, ["InputComponent", "OverlayWrapperComponent", "OverlayComponent", "classNames", "clickUnselectsDay", "component", "dateFormat", "dayPickerProps", "format", "formatDate", "hideOnDayClick", "inputProps", "keepFocus", "onBlur", "onChange", "onClick", "onDayChange", "onFocus", "onKeyUp", "overlayComponent", "parseDate", "placeholder", "showOverlay", "value", "input", "meta"]);

      var ComposedOverlayComponent = function ComposedOverlayComponent(_ref) {
        var children = _ref.children,
            overlayProps = _objectWithoutProperties(_ref, ["children"]);

        return React.createElement(OverlayWrapperComponent, overlayProps, React.createElement(OverlayComponent, null, children));
      };

      var fieldProps = _objectSpread({}, inputProps, rest, {
        input: input,
        meta: meta,
        // Currently this component doesn't provide a good experience if you try
        // to edit the value yourself.  Just make it read only for now, so the
        // only way to manipulate it is by using the picker.
        readOnly: true,
        autoComplete: 'off'
      });

      var composedDatePickerProps = {
        ref: this.datePickerRef,
        value: value,
        // this will always be undefined if used as a Field child
        inputProps: fieldProps,
        placeholder: placeholder || formatDate(new Date(), dateFormat),
        format: dateFormat,
        formatDate: formatDate,
        parseDate: parseDate,
        showOverlay: showOverlay,
        dayPickerProps: dayPickerProps,
        hideOnDayClick: hideOnDayClick,
        clickUnselectsDay: clickUnselectsDay,
        keepFocus: keepFocus,
        component: InputComponent,
        overlayComponent: ComposedOverlayComponent,
        classNames: classNames,
        onDayChange: this.handleOnDayChange,
        onChange: onChange,
        onClick: onClick,
        onFocus: onFocus,
        onBlur: onBlur,
        onKeyUp: onKeyUp
      };
      return React.createElement(_DayPickerInput.default, composedDatePickerProps);
    }
  }]);

  return DatePicker;
}(React.Component);

_defineProperty(DatePicker, "defaultProps", {
  dateFormat: 'dd/LL/yyyy',
  formatDate: function formatDate(date, format) {
    return _luxon.DateTime.fromJSDate(date).toFormat(format);
  },
  parseDate: function parseDate(date, format) {
    var dateFromFormat = _luxon.DateTime.fromFormat(date, format);

    if (dateFromFormat.isValid) {
      return dateFromFormat.toJSDate();
    }

    return undefined;
  }
});

var createComponent = function createComponent() {
  var defaultStyledComponents = createStyledComponents(defaultStyleProps);
  var InputComponent = (0, _Input.createComponent)();
  return function (props) {
    return React.createElement(DatePicker, _objectSpread({
      InputComponent: InputComponent
    }, defaultStyledComponents, props));
  };
};

exports.createComponent = createComponent;
var _default = {
  defaultStyleProps: defaultStyleProps,
  createStyledComponents: createStyledComponents,
  createComponent: createComponent
};
exports.default = _default;