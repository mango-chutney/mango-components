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
  var WrapperComponent = _styledComponents2.default.div.withConfig({
    componentId: 's1yit0ub-0'
  })(['position:relative;margin-bottom:1rem;text-align:left;display:inline-block;']);

  // some label stuff in checkbox to get :checked property
  var LabelComponent = _styledComponents2.default.label.withConfig({
    componentId: 's1yit0ub-1'
  })(['cursor:pointer;font-weight:', ';display:inline-block;font-size:1rem;> div{min-height:', ';line-height:', ';position:relative;border:1px solid transparent;display:block;&::before,&::after{width:', ';height:', ';cursor:pointer;content:\'\';display:inline-block;border-radius:4px;vertical-align:middle;}&::before{border:1px solid ', ';background:', ';margin-right:1rem;}&::after{position:absolute;left:0;border:1px solid transparent;line-height:', ';margin-top:', ';text-align:center;transform:scale(0);}}'], _constants.fontWeights.semibold, (0, _polished.rem)(styleProps.checkboxSize), (0, _polished.rem)(styleProps.checkboxSize), (0, _polished.rem)(styleProps.checkboxSize), (0, _polished.rem)(styleProps.checkboxSize), _constants.palette.border, _constants.palette.lightGray, (0, _polished.rem)(styleProps.checkboxSize), (0, _polished.rem)(styleProps.checkboxSize * 0.1));

  var InputComponent = _styledComponents2.default.input.withConfig({
    componentId: 's1yit0ub-2'
  })(['opacity:0;width:0;position:absolute;&[disabled]{cursor:pointer;}:checked + label > div{&::before{background:', ';border-color:', ';transition:background-color 0.3s;}&::after{content:url(\'data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHhtbG5zOnhsaW5rPSdodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rJyBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSd4TWlkWU1pZCcgd2lkdGg9JzE2LjUnIGhlaWdodD0nMTUnIHZpZXdCb3g9JzAgMCAxNi41IDE1Jz48cGF0aCBmaWxsPScjZmZmJyBmaWxsLXJ1bGU9J2V2ZW5vZGQnIGQ9J00xNi41MTUsMS4wNzEgQzE2LjM5OSwwLjgyNyAxNS45MTQsLTAuMDMwIDE1LjUxNSwwLjAwMSBDMTQuMjg5LDAuNzY1IDEyLjY5MywyLjM1NCAxMS42MzgsMy4zNjIgQzkuNTI4LDUuMzc4IDcuNTAzLDcuNDg2IDUuNTA4LDkuNjI0IEwxLjUxNiw1Ljg5NyBMMC4wMDUsNy40ODYgQzIuMjAwLDkuODM3IDQuNTY3LDEyLjM3MyA2LjUwNSwxNS4wMDAgQzguOTg2LDEwLjYzMiAxMy4wMzUsNC4zNzAgMTYuNTE1LDEuMDcxIEwxNi41MTUsMS4wNzEgWicvPjwvc3ZnPg==\');transition:all 0.25s;transform:scale(0.75);}}'], _constants.palette.primary, (0, _polished.darken)(0.05, _constants.palette.primary));

  return { LabelComponent: LabelComponent, InputComponent: InputComponent, WrapperComponent: WrapperComponent };
};

function Checkbox(_ref) {
  var InputComponent = _ref.InputComponent,
      LabelComponent = _ref.LabelComponent,
      WrapperComponent = _ref.WrapperComponent,
      children = _ref.children,
      input = _ref.input,
      meta = _ref.meta,
      label = _ref.label,
      rest = _objectWithoutProperties(_ref, ['InputComponent', 'LabelComponent', 'WrapperComponent', 'children', 'input', 'meta', 'label']);

  return React.createElement(
    WrapperComponent,
    null,
    React.createElement(InputComponent, _extends({}, input, {
      id: rest.id || input && input.name,
      type: 'checkbox'
    }, rest)),
    React.createElement(
      LabelComponent,
      { htmlFor: rest.id || input && input.name },
      React.createElement(
        'div',
        null,
        children || label || ''
      )
    )
  );
}

var createComponent = exports.createComponent = function createComponent() {
  var defaultStyledComponents = createStyledComponents(defaultStyleProps);
  return function (props) {
    return React.createElement(Checkbox, _extends({}, defaultStyledComponents, props));
  };
};

exports.default = {
  defaultStyleProps: defaultStyleProps,
  createStyledComponents: createStyledComponents,
  createComponent: createComponent
};