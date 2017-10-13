'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

const href = 'http://mangochutney.com.au/';

exports.default = ({
  styles,
  baseURL
}) => {
  let StyledLink = _styledComponents2.default.a.withConfig({
    componentId: 's11mrf0o-0'
  })(['background-repeat:no-repeat;width:180px;height:15px;display:inline-block;background-image:url("', '/img/mangochutney.svg");'], baseURL);

  let StyledDiv = _styledComponents2.default.div.withConfig({
    componentId: 's11mrf0o-1'
  })(['margin:2rem 0;text-align:center;']);

  if (styles && styles.div) {
    StyledDiv = StyledDiv.extend([styles.div]);
  }

  if (styles && styles.a) {
    StyledLink = StyledLink.extend([styles.a]);
  }

  return function MadeWithMangoChutney(props) {
    const { children } = props,
          rest = _objectWithoutProperties(props, ['children']);

    return React.createElement(
      StyledDiv,
      null,
      React.createElement(
        StyledLink,
        _extends({}, rest, {
          href: href,
          target: '_blank',
          rel: 'noopener noreferrer'
        }),
        children
      )
    );
  };
};