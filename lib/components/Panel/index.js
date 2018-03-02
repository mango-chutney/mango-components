"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PanelHeading = exports.PanelSection = exports.Panel = exports.default = void 0;

var Panel = _interopRequireWildcard(require("./Panel"));

exports.Panel = Panel;

var PanelSection = _interopRequireWildcard(require("./PanelSection"));

exports.PanelSection = PanelSection;

var PanelHeading = _interopRequireWildcard(require("./PanelHeading"));

exports.PanelHeading = PanelHeading;

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var _default = {
  Panel: Panel,
  PanelSection: PanelSection,
  PanelHeading: PanelHeading
};
exports.default = _default;