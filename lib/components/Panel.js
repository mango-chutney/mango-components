'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PanelHeading = undefined;

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _polished = require('polished');

var _constants = require('./constants');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

const href = 'http://mangochutney.com.au/';

exports.default = ({ styles }) => {
  let StyledDiv = _styledComponents2.default.div.withConfig({
    componentId: 's19rrb4w-0'
  })(['background:', ';margin:0 0 1rem;padding:2rem;border:', ';border-radius:', ';overflow:hidden;'], _constants.palette.white, _constants.globalBorder, _constants.globalRadius);

  if (styles && styles.div) {
    StyledDiv = StyledDiv.extend([styles.div]);
  }

  return function Panel(props) {
    const { children } = props,
          rest = _objectWithoutProperties(props, ['children']);

    return React.createElement(
      StyledDiv,
      rest,
      children
    );
  };
};

const PanelHeading = ({ styles }) => {
  let StyledDiv = _styledComponents2.default.div.withConfig({
    componentId: 's19rrb4w-1'
  })(['background:linear-gradient( ', ' 0%,', ' 100% );border-radius:', ' ', ' 0 0;border-bottom:', ';margin:-2rem -2rem 2rem;padding:1rem 2rem;color:', ';font-weight:', ';font-size:', ';overflow-x:hidden;white-space:nowrap;text-overflow:ellipsis;'], _constants.palette.lightGray, (0, _polished.darken)(0.04, _constants.palette.lightGray), _constants.globalRadius, _constants.globalRadius, _constants.globalBorder, _constants.palette.black, _constants.fontWeights.semibold, (0, _polished.rem)(16));

  if (styles && styles.div) {
    StyledDiv = StyledDiv.extend([styles.div]);
  }

  return function PanelHeading(props) {
    const { children } = props,
          rest = _objectWithoutProperties(props, ['children']);

    return React.createElement(
      StyledDiv,
      rest,
      children
    );
  };
};
exports.PanelHeading = PanelHeading;