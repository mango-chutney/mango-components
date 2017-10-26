'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _polished = require('polished');

var _constants = require('./constants');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

exports.default = function () {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    styles: { input: '', label: '' }
  },
      styles = _ref.styles;

  var StyledInput = _styledComponents2.default.input.withConfig({
    componentId: 'uw5gvy-0'
  })(['appearance:none;background-color:', ';border-color:', ';border-radius:0.25rem;border-style:solid;border-width:0.05rem;color:', ';display:block;font-family:', ';height:2.6rem;margin-bottom:1rem;outline:0;padding:0.5rem 1rem;transition:border-color 300ms ease;width:100%;::placeholder{color:', ';}:active,:focus{border-color:', ';}'], _constants.palette.lightGray, _constants.palette.border, _constants.palette.black, _constants.fontStack, (0, _polished.transparentize)(0.2, _constants.palette.darkGray), _constants.palette.black);

  var StyledLabel = _styledComponents2.default.span.withConfig({
    componentId: 'uw5gvy-1'
  })(['font-size:', ';font-weight:', ';'], (0, _polished.rem)(14), _constants.fontWeights.semibold);

  if (styles && styles.input) {
    StyledInput = StyledInput.extend([styles.input]);
  }

  if (styles && styles.label) {
    StyledLabel = StyledLabel.extend([styles.label]);
  }

  return function Input(_ref2) {
    var input = _ref2.input,
        meta = _ref2.meta,
        label = _ref2.label,
        placeholder = _ref2.placeholder,
        rest = _objectWithoutProperties(_ref2, ['input', 'meta', 'label', 'placeholder']);

    return React.createElement(
      'label',
      { htmlFor: rest.id || input && input.name },
      label && React.createElement(
        StyledLabel,
        null,
        label
      ),
      React.createElement(
        'span',
        null,
        React.createElement(StyledInput, _extends({}, input, {
          id: rest.id || input && input.name,
          placeholder: placeholder
        }))
      )
    );
  };
};