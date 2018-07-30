import "core-js/modules/web.dom.iterable";
import "core-js/modules/es6.array.iterator";
import "core-js/modules/es6.object.keys";
import "core-js/modules/es6.function.name";
import "core-js/modules/es6.object.assign";
import "core-js/modules/es6.string.bold";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import * as React from 'react';
import styled from 'styled-components';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import { DateTime } from 'luxon';
import { rem } from 'polished';
import { defaultStyleProps as defaultInputStyleProps, createStyledComponents as createInputStyledComponents } from './Input';
import { palette, fontWeights } from './constants';
export var defaultStyleProps = {
  captionFontSize: rem(20),
  color: palette.darkGray,
  disabledColor: palette.lightGray,
  fontSize: rem(14),
  fontWeight: fontWeights.semibold,
  navButtonColor: palette.darkGray,
  outsideColor: palette.mediumGray,
  overlayBackgroundColor: palette.white,
  todayButtonFontSize: rem(8),
  todayColor: palette.primary,
  todayFontWeight: fontWeights.bold,
  weekDayColor: palette.darkGray,
  weekDayFontSize: rem(14),
  weekNumberBorderColor: palette.lightGray,
  weekNumberColor: palette.darkGray,
  weekNumberFontSize: rem(8)
};

var formatDate = function formatDate(dateObject, format) {
  return DateTime.fromJSDate(dateObject).toFormat(format);
};

var parseDate = function parseDate(dateString, format) {
  var dateFromFormat = DateTime.fromFormat(dateString, format);

  if (dateFromFormat.isValid) {
    return dateFromFormat.toJSDate();
  }

  return undefined;
};

export var createStyledComponents = function createStyledComponents(styleProps) {
  var LabelComponent = styled.span.withConfig({
    componentId: "s43u0y-0"
  })(["font-size:", ";font-weight:", ";display:block;"], styleProps.fontSize, styleProps.fontWeight);
  var OverlayWrapperComponent = styled.div.withConfig({
    componentId: "s43u0y-1"
  })(["position:relative;"]);
  var OverlayComponent = styled.div.withConfig({
    componentId: "s43u0y-2"
  })(["left:0;z-index:1;position:absolute;background:", ";box-shadow:0 ", " ", " rgba(0,0,0,0.15);.DayPicker{display:inline-block;}.DayPicker-wrapper{position:relative;user-select:none;padding-bottom:1rem;flex-direction:row;}.DayPicker-Months{display:flex;flex-wrap:wrap;justify-content:center;}.DayPicker-Month{display:table;border-collapse:collapse;border-spacing:0;user-select:none;margin:0 1rem;margin-top:1rem;}.DayPicker-NavButton{position:absolute;cursor:pointer;top:1rem;right:1.5rem;margin-top:2px;color:", ";width:1.25rem;height:1.25rem;display:inline-block;background-size:50%;background-repeat:no-repeat;background-position:center;}.DayPicker-NavButton:hover{opacity:0.8;}.DayPicker-NavButton--prev{margin-right:1.5rem;background-image:url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAwCAYAAAB5R9gVAAAABGdBTUEAALGPC/xhBQAAAVVJREFUWAnN2G0KgjAYwPHpGfRkaZeqvgQaK+hY3SUHrk1YzNLay/OiEFp92I+/Mp2F2Mh2lLISWnflFjzH263RQjzMZ19wgs73ez0o1WmtW+dgA01VxrE3p6l2GLsnBy1VYQOtVSEH/atCCgqpQgKKqYIOiq2CBkqtggLKqQIKgqgCBjpJ2Y5CdJ+zrT9A7HHSTA1dxUdHgzCqJIEwq0SDsKsEg6iqBIEoq/wEcVRZBXFV+QJxV5mBtlDFB5VjYTaGZ2sf4R9PM7U9ZU+lLuaetPP/5Die3ToO1+u+MKtHs06qODB2zBnI/jBd4MPQm1VkY79Tb18gB+C62FdBFsZR6yeIo1YQiLJWMIiqVjQIu1YSCLNWFgijVjYIuhYYCKoWKAiiFgoopxYaKLUWOii2FgkophYp6F3r42W5A9s9OcgNvva8xQaysKXlFytoqdYmQH6tF3toSUo0INq9AAAAAElFTkSuQmCC');}.DayPicker-NavButton--next{background-image:url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAwCAYAAAB5R9gVAAAABGdBTUEAALGPC/xhBQAAAXRJREFUWAnN119ugjAcwPHWzJ1gnmxzB/BBE0n24m4xfNkTaOL7wOtsl3AXMMb+Vjaa1BG00N8fSEibPpAP3xAKKs2yjzTPH9RAjhEo9WzPr/Vm8zgE0+gXATAxxuxtqeJ9t5tIwv5AtQAApsfT6TPdbp+kUBcgVwvO51KqVhMkXKsVJFXrOkigVhCIs1Y4iKlWZxB1rX4gwlpRIIpa8SDkWmggrFq4IIRaJKCYWnSgnrXIQV1r8YD+1Vrn+bReagysIFfLABRt31v8oBu1xEBttfRbltmfjgEcWh9snUS2kNdBK6WN1vrOWxObWsz+fjxevsxmB1GQDfINWiev83nhaoiB/CoOU438oPrhXS0WpQ9xc1ZQWxWHqUYe0I0qrKCQKjygDlXIQV2r0IF6ViEBxVTBBSFUQQNhVYkHIVeJAtkNsbQ7c1LtzP6FsObhb2rCKv7NBIGoq4SDmKoEgTirXAcJVGkFSVVpgoSrXICGUMUH/QBZNSUy5XWUhwAAAABJRU5ErkJggg==');}.DayPicker-NavButton--interactionDisabled{display:none;}.DayPicker-Caption{padding:0 0.5rem;display:table-caption;text-align:left;margin-bottom:0.5rem;}.DayPicker-Caption > div{font-size:", ";font-weight:", ";}.DayPicker-Weekdays{margin-top:1rem;display:table-header-group;}.DayPicker-WeekdaysRow{display:table-row;}.DayPicker-Weekday{display:table-cell;padding:0.5rem;font-size:", ";text-align:center;color:", ";}.DayPicker-Weekday abbr[title]{border-bottom:none;text-decoration:none;}.DayPicker-Body{display:table-row-group;}.DayPicker-Week{display:table-row;}.DayPicker-Day{display:table-cell;padding:0.5rem;text-align:center;cursor:pointer;vertical-align:middle;border-radius:50%;}.DayPicker-WeekNumber{display:table-cell;padding:0.5rem;text-align:right;vertical-align:middle;min-width:1rem;font-size:", ";cursor:pointer;color:", ";border-right:", " solid ", ";}.DayPicker--interactionDisabled .DayPicker-Day{cursor:default;}.DayPicker-Footer{padding-top:0.5rem;}.DayPicker-TodayButton{border:none;background-image:none;background-color:transparent;box-shadow:none;cursor:pointer;color:", ";font-size:", ";}.DayPicker-Day--today{color:", ";font-weight:", ";}.DayPicker-Day--outside{cursor:default;color:", ";}.DayPicker-Day--disabled{color:", ";cursor:default;}"], styleProps.overlayBackgroundColor, rem(2), rem(5), styleProps.navButtonColor, styleProps.captionFontSize, styleProps.fontWeight, styleProps.weekDayFontSize, styleProps.weekDayColor, styleProps.weekNumberFontSize, styleProps.weekNumberColor, rem(1), styleProps.weekNumberBorderColor, styleProps.color, styleProps.todayButtonFontSize, styleProps.todayColor, styleProps.todayFontWeight, styleProps.outsideColor, styleProps.disabledColor);
  return Object.assign({}, createInputStyledComponents(defaultInputStyleProps), {
    LabelComponent: LabelComponent,
    OverlayWrapperComponent: OverlayWrapperComponent,
    OverlayComponent: OverlayComponent
  });
};

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
      rest = _objectWithoutPropertiesLoose(_ref, ["InputComponent", "LabelComponent", "OverlayWrapperComponent", "OverlayComponent", "input", "label", "dateFormat", "inputProps", "calendarProps"]);

  return React.createElement("label", {
    htmlFor: input.name
  }, label && React.createElement(LabelComponent, null, label), React.createElement(DayPickerInput, _extends({
    format: dateFormat,
    formatDate: formatDate,
    parseDate: parseDate,
    placeholder: "" + DateTime.local().toFormat(dateFormat),
    inputProps: Object.assign({}, input),
    component: function component(props) {
      return React.createElement(InputComponent, props);
    },
    onDayChange: function onDayChange(day) {
      return input.onChange(formatDate(day, dateFormat));
    },
    overlayComponent: function overlayComponent(_ref2) {
      var children = _ref2.children,
          props = _objectWithoutPropertiesLoose(_ref2, ["children"]);

      return React.createElement(OverlayWrapperComponent, props, React.createElement(OverlayComponent, null, children));
    },
    dayPickerProps: Object.assign({}, calendarProps)
  }, rest)));
}

DatePicker.defaultProps = {
  dateFormat: 'dd/LL/yyyy'
};
export var createComponent = function createComponent() {
  var defaultStyledComponents = createStyledComponents(defaultStyleProps);
  return function (props) {
    return React.createElement(DatePicker, Object.assign({}, defaultStyledComponents, props));
  };
};
export default {
  defaultStyleProps: defaultStyleProps,
  createStyledComponents: createStyledComponents,
  createComponent: createComponent
};