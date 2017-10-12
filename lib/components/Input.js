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

exports.default = ({
  styles
}) => {
  let StyledInput = _styledComponents2.default.input.withConfig({
    componentId: 's12f966f-0'
  })(['appearance:none;background-color:#fafbfc;border-color:', ';border-radius:0.25rem;border-style:solid;border-width:0.05rem;color:', ';display:block;width:100%;font-family:', ';height:2.6rem;margin-bottom:1rem;outline:0;padding:0.5rem;::placeholder{color:', ';}'], _constants.palette.lightGray, _constants.palette.black, _constants.fontStack, (0, _polished.transparentize)(0.2, _constants.palette.darkGray));

  if (styles && styles.input) {
    StyledInput = StyledInput.extend([(0, _styledComponents.css)([styles.input])]);
  }

  return function Input(_ref) {
    let { input, meta, placeholder } = _ref,
        rest = _objectWithoutProperties(_ref, ['input', 'meta', 'placeholder']);

    return React.createElement(
      'label',
      { htmlFor: rest.id || input.name },
      React.createElement(
        'span',
        null,
        React.createElement(StyledInput, _extends({}, input, { id: rest.id || input.name }))
      )
    );
  };
};