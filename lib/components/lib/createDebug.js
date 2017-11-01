'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (namespace) {
  return (0, _debug2.default)(_package.name + ':' + namespace);
};

var _debug = require('debug');

var _debug2 = _interopRequireDefault(_debug);

var _package = require('../../package.json');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }