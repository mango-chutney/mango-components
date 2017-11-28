'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createComponent = exports.createStyledComponents = exports.defaultStyleProps = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.Checkbox = Checkbox;

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _polished = require('polished');

var _constants = require('./constants');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var defaultStyleProps = exports.defaultStyleProps = {
  checkboxSize: 20
};

var createStyledComponents = exports.createStyledComponents = function createStyledComponents(styleProps) {
  var DivComponent = _styledComponents2.default.div.withConfig({
    componentId: 's8lhos9-0'
  })(['position:relative;margin-bottom:1rem;text-align:left;display:inline-block;']);

  // most label stuff in checkboxto get :checked property
  var LabelComponent = _styledComponents2.default.label.withConfig({
    componentId: 's8lhos9-1'
  })(['cursor:pointer;border:1px solid transparent;display:block;font-size:1rem;font-weight:', ';height:', ';line-height:', ';padding:0rem 2rem;&::before,&::after{position:absolute;width:', ';height:', ';cursor:pointer;content:\'\';display:inline-block;border-radius:4px;top:0;left:0;}&::before{border:1px solid ', ';background:', ';}&::after{border:1px solid transparent;line-height:', ';margin-top:', ';text-align:center;transform:scale(0);}'], _constants.fontWeights.semibold, (0, _polished.rem)(styleProps.checkboxSize), (0, _polished.rem)(styleProps.checkboxSize), (0, _polished.rem)(styleProps.checkboxSize), (0, _polished.rem)(styleProps.checkboxSize), _constants.palette.border, _constants.palette.lightGray, (0, _polished.rem)(styleProps.checkboxSize), (0, _polished.rem)(styleProps.checkboxSize * 0.1));

  var CheckboxComponent = _styledComponents2.default.input.withConfig({
    componentId: 's8lhos9-2'
  })(['opacity:0;width:0;position:absolute;&[disabled]{cursor:pointer;}:checked + label{&::before{background:', ';border-color:', ';transition:background-color 0.3s;}&::after{content:url(\'data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHhtbG5zOnhsaW5rPSdodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rJyBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSd4TWlkWU1pZCcgd2lkdGg9JzE2LjUnIGhlaWdodD0nMTUnIHZpZXdCb3g9JzAgMCAxNi41IDE1Jz48cGF0aCBmaWxsPScjZmZmJyBmaWxsLXJ1bGU9J2V2ZW5vZGQnIGQ9J00xNi41MTUsMS4wNzEgQzE2LjM5OSwwLjgyNyAxNS45MTQsLTAuMDMwIDE1LjUxNSwwLjAwMSBDMTQuMjg5LDAuNzY1IDEyLjY5MywyLjM1NCAxMS42MzgsMy4zNjIgQzkuNTI4LDUuMzc4IDcuNTAzLDcuNDg2IDUuNTA4LDkuNjI0IEwxLjUxNiw1Ljg5NyBMMC4wMDUsNy40ODYgQzIuMjAwLDkuODM3IDQuNTY3LDEyLjM3MyA2LjUwNSwxNS4wMDAgQzguOTg2LDEwLjYzMiAxMy4wMzUsNC4zNzAgMTYuNTE1LDEuMDcxIEwxNi41MTUsMS4wNzEgWicvPjwvc3ZnPg==\');transition:all 0.25s;transform:scale(0.75);}}'], _constants.palette.primary, (0, _polished.darken)(0.05, _constants.palette.primary));

  return { LabelComponent: LabelComponent, CheckboxComponent: CheckboxComponent, DivComponent: DivComponent };
};

function Checkbox(_ref) {
  var CheckboxComponent = _ref.CheckboxComponent,
      LabelComponent = _ref.LabelComponent,
      DivComponent = _ref.DivComponent,
      input = _ref.input,
      meta = _ref.meta,
      label = _ref.label,
      rest = _objectWithoutProperties(_ref, ['CheckboxComponent', 'LabelComponent', 'DivComponent', 'input', 'meta', 'label']);

  return React.createElement(
    DivComponent,
    null,
    React.createElement(CheckboxComponent, _extends({}, input, {
      id: rest.id || input && input.name,
      type: 'checkbox'
    }, rest)),
    React.createElement(
      LabelComponent,
      { htmlFor: rest.id || input && input.name },
      label && React.createElement(
        'span',
        null,
        label
      )
    )
  );
}

var createComponent = exports.createComponent = function createComponent() {
  var defaultStyledComponents = createStyledComponents(defaultStyleProps);
  return function (props) {
    return React.createElement(Checkbox, _extends({}, props, defaultStyledComponents));
  };
};

exports.default = {
  defaultStyleProps: defaultStyleProps,
  createStyledComponents: createStyledComponents,
  createComponent: createComponent
};