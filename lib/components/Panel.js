'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PanelHeading = exports.PanelSection = undefined;

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _polished = require('polished');

var _constants = require('./constants');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

// this has to be outside so other ocmponents can access
var StyledPanelSection = _styledComponents2.default.div.withConfig({
  componentId: 's1dr9ihf-0'
})(['margin:0 -2rem;padding:1.5rem 2rem;border-bottom:1px solid ', ';:last-child{border-bottom:0;}'], _constants.palette.border);

var PanelSection = function PanelSection() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    styles: { div: '' }
  },
      styles = _ref.styles;

  if (styles && styles.div) {
    StyledPanelSection = StyledPanelSection.extend([styles.div]);
  }

  return function PanelSection(props) {
    var children = props.children,
        rest = _objectWithoutProperties(props, ['children']);

    return React.createElement(
      StyledPanelSection,
      rest,
      children
    );
  };
};

exports.PanelSection = PanelSection;
var PanelHeading = function PanelHeading() {
  var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    styles: { div: '' }
  },
      styles = _ref2.styles;

  var StyledDiv = _styledComponents2.default.div.withConfig({
    componentId: 's1dr9ihf-1'
  })(['background:linear-gradient( ', ' 0%,', ' 100% );border-radius:', ' ', ' 0 0;border-bottom:', ';margin:-2rem -2rem 2rem;padding:1rem 2rem;color:', ';font-weight:', ';font-size:', ';overflow-x:hidden;white-space:nowrap;text-overflow:ellipsis;+ ', '{margin-top:-2rem;}'], _constants.palette.lightGray, (0, _polished.darken)(0.04, _constants.palette.lightGray), _constants.globalRadius, _constants.globalRadius, _constants.globalBorder, _constants.palette.black, _constants.fontWeights.semibold, (0, _polished.rem)(16), StyledPanelSection);

  if (styles && styles.div) {
    StyledDiv = StyledDiv.extend([styles.div]);
  }

  return function PanelHeading(props) {
    var children = props.children,
        rest = _objectWithoutProperties(props, ['children']);

    return React.createElement(
      StyledDiv,
      rest,
      children
    );
  };
};

exports.PanelHeading = PanelHeading;

exports.default = function () {
  var _ref3 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    styles: { div: '' }
  },
      styles = _ref3.styles;

  var StyledDiv = _styledComponents2.default.div.withConfig({
    componentId: 's1dr9ihf-2'
  })(['background:', ';margin:0 0 1rem;padding:2rem;border:', ';border-radius:', ';overflow:hidden;> ', '{:last-child{margin-bottom:-2rem;}}'], _constants.palette.white, _constants.globalBorder, _constants.globalRadius, StyledPanelSection);

  if (styles && styles.div) {
    StyledDiv = StyledDiv.extend([styles.div]);
  }

  return function Panel(props) {
    var children = props.children,
        rest = _objectWithoutProperties(props, ['children']);

    return React.createElement(
      StyledDiv,
      rest,
      children
    );
  };
};