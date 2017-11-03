'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PanelHeading = exports.PanelSection = exports.Panel = undefined;

var _Panel = require('./Panel');

var Panel = _interopRequireWildcard(_Panel);

var _PanelSection = require('./PanelSection');

var PanelSection = _interopRequireWildcard(_PanelSection);

var _PanelHeading = require('./PanelHeading');

var PanelHeading = _interopRequireWildcard(_PanelHeading);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

exports.Panel = Panel;
exports.PanelSection = PanelSection;
exports.PanelHeading = PanelHeading;
exports.default = { Panel: Panel, PanelSection: PanelSection, PanelHeading: PanelHeading };