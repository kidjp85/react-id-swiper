"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cn = void 0;

var cn = function cn(className) {
  return typeof className === 'string' ? className.split('.').join(' ').trim() : '';
};

exports.cn = cn;