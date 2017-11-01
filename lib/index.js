'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _AnchorButton = require('./components/AnchorButton');

var AnchorButton = _interopRequireWildcard(_AnchorButton);

var _Button = require('./components/Button');

var Button = _interopRequireWildcard(_Button);

var _Input = require('./components/Input');

var _Input2 = _interopRequireDefault(_Input);

var _MadeWithMangoChutney = require('./components/MadeWithMangoChutney');

var _MadeWithMangoChutney2 = _interopRequireDefault(_MadeWithMangoChutney);

var _Panel = require('./components/Panel');

var _Panel2 = _interopRequireDefault(_Panel);

var _Tootlip = require('./components/Tootlip');

var Tootlip = _interopRequireWildcard(_Tootlip);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var components = {
  AnchorButton: AnchorButton,
  Button: Button,
  Input: _Input2.default,
  MadeWithMangoChutney: _MadeWithMangoChutney2.default,
  Panel: _Panel2.default,
  PanelHeading: _Panel.PanelHeading,
  PanelSection: _Panel.PanelSection,
  Tootlip: Tootlip
};

exports.default = components;