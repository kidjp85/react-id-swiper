'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var cn = exports.cn = function cn(className) {
    return typeof className === 'string' ? className.split('.').join(' ').trim() : '';
};