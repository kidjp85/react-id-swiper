(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("React"), require("ReactDOM"));
	else if(typeof define === 'function' && define.amd)
		define(["React", "ReactDOM"], factory);
	else if(typeof exports === 'object')
		exports["ReactIdSwiper"] = factory(require("React"), require("ReactDOM"));
	else
		root["ReactIdSwiper"] = factory(root["React"], root["ReactDOM"]);
})(typeof self !== 'undefined' ? self : this, function(__WEBPACK_EXTERNAL_MODULE_7__, __WEBPACK_EXTERNAL_MODULE_8__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

function makeEmptyFunction(arg) {
  return function () {
    return arg;
  };
}

/**
 * This function accepts and discards inputs; it has no side effects. This is
 * primarily useful idiomatically for overridable function endpoints which
 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
 */
var emptyFunction = function emptyFunction() {};

emptyFunction.thatReturns = makeEmptyFunction;
emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
emptyFunction.thatReturnsNull = makeEmptyFunction(null);
emptyFunction.thatReturnsThis = function () {
  return this;
};
emptyFunction.thatReturnsArgument = function (arg) {
  return arg;
};

module.exports = emptyFunction;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */



/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var validateFormat = function validateFormat(format) {};

if (process.env.NODE_ENV !== 'production') {
  validateFormat = function validateFormat(format) {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  };
}

function invariant(condition, format, a, b, c, d, e, f) {
  validateFormat(format);

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(format.replace(/%s/g, function () {
        return args[argIndex++];
      }));
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
}

module.exports = invariant;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */



var emptyFunction = __webpack_require__(1);

/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var warning = emptyFunction;

if (process.env.NODE_ENV !== 'production') {
  var printWarning = function printWarning(format) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  warning = function warning(condition, format) {
    if (format === undefined) {
      throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
    }

    if (format.indexOf('Failed Composite propType: ') === 0) {
      return; // Ignore CompositeComponent proptype check.
    }

    if (!condition) {
      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      printWarning.apply(undefined, [format].concat(args));
    }
  };
}

module.exports = warning;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(7);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(8);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _objectAssign = __webpack_require__(4);

var _objectAssign2 = _interopRequireDefault(_objectAssign);

var _propTypes = __webpack_require__(9);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _custom = __webpack_require__(13);

var _custom2 = _interopRequireDefault(_custom);

var _utils = __webpack_require__(14);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 NOTE: Custom version won't support those features below
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 - Virtual
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 - Keyboard
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 - Mouse wheel
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 - Zoom
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 - Lazy load image
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 - A11y
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 - Parallax
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 - History
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 - Hash-navigation
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 - Effect-cube
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 - Effect-flip
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 - Effect-coverflow
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 #Referer link: http://idangero.us/swiper/api/#custom-build
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               */

var ReactIdSwiper = function (_Component) {
  _inherits(ReactIdSwiper, _Component);

  // Proptypes
  function ReactIdSwiper(props) {
    _classCallCheck(this, ReactIdSwiper);

    var _this = _possibleConstructorReturn(this, (ReactIdSwiper.__proto__ || Object.getPrototypeOf(ReactIdSwiper)).call(this, props));

    _this.renderContent = _this.renderContent.bind(_this);
    return _this;
  }
  // Default props


  _createClass(ReactIdSwiper, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.buildSwiper();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      if (typeof this.swiper === 'undefined') return;
      var _props = this.props,
          rebuildOnUpdate = _props.rebuildOnUpdate,
          shouldSwiperUpdate = _props.shouldSwiperUpdate,
          activeSlideKey = _props.activeSlideKey;


      if (rebuildOnUpdate) {
        this.rebuildSwiper();
      } else if (shouldSwiperUpdate) {
        this.updateSwiper();

        var numSlides = this.swiper.slides.length;
        if (numSlides <= this.swiper.activeIndex) {
          var index = Math.max(numSlides - 1, 0);
          this.swiper.slideTo(index);
        }
      }

      if (activeSlideKey) {
        var activeSlideId = null;
        var id = 0;

        _react2.default.Children.forEach(this.props.children, function (child) {
          if (child) {
            if (child.key === activeSlideKey) {
              activeSlideId = id;
            }
            id += 1;
          }
        });

        if (activeSlideId !== null) {
          this.swiper.slideTo(activeSlideId);
        }
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (typeof this.swiper !== 'undefined') this.swiper.destroy(true, true);
      delete this.swiper;
    }
  }, {
    key: 'buildSwiper',
    value: function buildSwiper() {
      this.swiper = new _custom2.default(_reactDom2.default.findDOMNode(this), (0, _objectAssign2.default)({}, this.props));
    }
  }, {
    key: 'rebuildSwiper',
    value: function rebuildSwiper() {
      this.swiper.destroy(true, true);
      this.buildSwiper();
    }
  }, {
    key: 'updateSwiper',
    value: function updateSwiper() {
      if (typeof this.swiper !== 'undefined') this.swiper.update();
    }
  }, {
    key: 'renderContent',
    value: function renderContent(e) {
      if (!e) return false;

      var _props2 = this.props,
          slideClass = _props2.slideClass,
          noSwiping = _props2.noSwiping;

      var slideClassNames = [slideClass, e.props.className];
      if (noSwiping) slideClassNames.push('swiper-no-swiping');

      return _react2.default.cloneElement(e, _extends({}, e.props, {
        className: slideClassNames.join(' ').trim()
      }));
    }
  }, {
    key: 'render',
    value: function render() {
      var _props3 = this.props,
          ContainerEl = _props3.ContainerEl,
          WrapperEl = _props3.WrapperEl,
          containerClass = _props3.containerClass,
          wrapperClass = _props3.wrapperClass,
          children = _props3.children,
          rtl = _props3.rtl,
          scrollbar = _props3.scrollbar,
          renderScrollbar = _props3.renderScrollbar,
          pagination = _props3.pagination,
          renderPagination = _props3.renderPagination,
          navigation = _props3.navigation,
          renderPrevButton = _props3.renderPrevButton,
          renderNextButton = _props3.renderNextButton;


      return _react2.default.createElement(
        ContainerEl,
        { className: containerClass, dir: rtl && 'rtl' },
        _react2.default.createElement(
          WrapperEl,
          { className: wrapperClass },
          _react2.default.Children.map(children, this.renderContent)
        ),
        pagination && pagination.el && renderPagination(this.props),
        scrollbar && scrollbar.el && renderScrollbar(this.props),
        navigation && navigation.nextEl && renderNextButton(this.props),
        navigation && navigation.prevEl && renderPrevButton(this.props)
      );
    }
  }]);

  return ReactIdSwiper;
}(_react.Component);

ReactIdSwiper.defaultProps = {
  containerClass: 'swiper-container',
  wrapperClass: 'swiper-wrapper',
  slideClass: 'swiper-slide',
  ContainerEl: 'div',
  WrapperEl: 'div',
  renderScrollbar: function renderScrollbar(_ref) {
    var scrollbar = _ref.scrollbar;
    return _react2.default.createElement('div', { className: (0, _utils.cn)(scrollbar.el) });
  },
  renderPagination: function renderPagination(_ref2) {
    var pagination = _ref2.pagination;
    return _react2.default.createElement('div', { className: (0, _utils.cn)(pagination.el) });
  },
  renderPrevButton: function renderPrevButton(_ref3) {
    var navigation = _ref3.navigation;
    return _react2.default.createElement('div', { className: (0, _utils.cn)(navigation.prevEl) });
  },
  renderNextButton: function renderNextButton(_ref4) {
    var navigation = _ref4.navigation;
    return _react2.default.createElement('div', { className: (0, _utils.cn)(navigation.nextEl) });
  }
};
exports.default = ReactIdSwiper;

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_7__;

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_8__;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (process.env.NODE_ENV !== 'production') {
  var REACT_ELEMENT_TYPE = (typeof Symbol === 'function' &&
    Symbol.for &&
    Symbol.for('react.element')) ||
    0xeac7;

  var isValidElement = function(object) {
    return typeof object === 'object' &&
      object !== null &&
      object.$$typeof === REACT_ELEMENT_TYPE;
  };

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(10)(isValidElement, throwOnDirectAccess);
} else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = __webpack_require__(12)();
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var emptyFunction = __webpack_require__(1);
var invariant = __webpack_require__(2);
var warning = __webpack_require__(5);
var assign = __webpack_require__(4);

var ReactPropTypesSecret = __webpack_require__(3);
var checkPropTypes = __webpack_require__(11);

module.exports = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (process.env.NODE_ENV !== 'production') {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          invariant(
            false,
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
        } else if (process.env.NODE_ENV !== 'production' && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            warning(
              false,
              'You are manually calling a React.PropTypes validation ' +
              'function for the `%s` prop on `%s`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.',
              propFullName,
              componentName
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunction.thatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      process.env.NODE_ENV !== 'production' ? warning(false, 'Invalid argument supplied to oneOf, expected an instance of array.') : void 0;
      return emptyFunction.thatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues);
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + propValue + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (propValue.hasOwnProperty(key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
      process.env.NODE_ENV !== 'production' ? warning(false, 'Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;
      return emptyFunction.thatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        warning(
          false,
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received %s at index %s.',
          getPostfixForTypeWarning(checker),
          i
        );
        return emptyFunction.thatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = assign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



if (process.env.NODE_ENV !== 'production') {
  var invariant = __webpack_require__(2);
  var warning = __webpack_require__(5);
  var ReactPropTypesSecret = __webpack_require__(3);
  var loggedTypeFailures = {};
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (process.env.NODE_ENV !== 'production') {
    for (var typeSpecName in typeSpecs) {
      if (typeSpecs.hasOwnProperty(typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          invariant(typeof typeSpecs[typeSpecName] === 'function', '%s: %s type `%s` is invalid; it must be a function, usually from ' + 'the `prop-types` package, but received `%s`.', componentName || 'React class', location, typeSpecName, typeof typeSpecs[typeSpecName]);
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }
        warning(!error || error instanceof Error, '%s: type specification of %s `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error);
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          warning(false, 'Failed %s type: %s%s', location, error.message, stack != null ? stack : '');
        }
      }
    }
  }
}

module.exports = checkPropTypes;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var emptyFunction = __webpack_require__(1);
var invariant = __webpack_require__(2);
var ReactPropTypesSecret = __webpack_require__(3);

module.exports = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      // It is still safe when called from React.
      return;
    }
    invariant(
      false,
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
  };
  shim.isRequired = shim;
  function getShim() {
    return shim;
  };
  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim
  };

  ReactPropTypes.checkPropTypes = emptyFunction;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*
 NOTE: Custom version won't support those features
 - Virtual
 - Keyboard
 - Mouse wheel
 - Zoom
 - Lazy load image
 - A11y
 - History
 - Parallax
 - Hash-navigation
 - Effect-cube
 - Effect-flip
 - Effect-coverflow
*/

/**
 * Swiper 4.3.5
 * Most modern mobile touch slider and framework with hardware accelerated transitions
 * http://www.idangero.us/swiper/
 *
 * Copyright 2014-2018 Vladimir Kharlampidi
 *
 * Released under the MIT License
 *
 * Released on: September 2, 2018
 */
!function (e, t) {
  "object" == ( false ? "undefined" : _typeof(exports)) && "undefined" != typeof module ? module.exports = t() :  true ? !(__WEBPACK_AMD_DEFINE_FACTORY__ = (t),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : e.Swiper = t();
}(undefined, function () {
  "use strict";
  var f = "undefined" == typeof document ? { body: {}, addEventListener: function addEventListener() {}, removeEventListener: function removeEventListener() {}, activeElement: { blur: function blur() {}, nodeName: "" }, querySelector: function querySelector() {
      return null;
    }, querySelectorAll: function querySelectorAll() {
      return [];
    }, getElementById: function getElementById() {
      return null;
    }, createEvent: function createEvent() {
      return { initEvent: function initEvent() {} };
    }, createElement: function createElement() {
      return { children: [], childNodes: [], style: {}, setAttribute: function setAttribute() {}, getElementsByTagName: function getElementsByTagName() {
          return [];
        } };
    }, location: { hash: "" } } : document,
      H = "undefined" == typeof window ? { document: f, navigator: { userAgent: "" }, location: {}, history: {}, CustomEvent: function CustomEvent() {
      return this;
    }, addEventListener: function addEventListener() {}, removeEventListener: function removeEventListener() {}, getComputedStyle: function getComputedStyle() {
      return { getPropertyValue: function getPropertyValue() {
          return "";
        } };
    }, Image: function Image() {}, Date: function Date() {}, screen: {}, setTimeout: function setTimeout() {}, clearTimeout: function clearTimeout() {} } : window,
      l = function l(e) {
    for (var t = 0; t < e.length; t += 1) {
      this[t] = e[t];
    }return this.length = e.length, this;
  };function y(e, t) {
    var i = [],
        s = 0;if (e && !t && e instanceof l) return e;if (e) if ("string" == typeof e) {
      var a,
          r,
          n = e.trim();if (0 <= n.indexOf("<") && 0 <= n.indexOf(">")) {
        var o = "div";for (0 === n.indexOf("<li") && (o = "ul"), 0 === n.indexOf("<tr") && (o = "tbody"), 0 !== n.indexOf("<td") && 0 !== n.indexOf("<th") || (o = "tr"), 0 === n.indexOf("<tbody") && (o = "table"), 0 === n.indexOf("<option") && (o = "select"), (r = f.createElement(o)).innerHTML = n, s = 0; s < r.childNodes.length; s += 1) {
          i.push(r.childNodes[s]);
        }
      } else for (a = t || "#" !== e[0] || e.match(/[ .<>:~]/) ? (t || f).querySelectorAll(e.trim()) : [f.getElementById(e.trim().split("#")[1])], s = 0; s < a.length; s += 1) {
        a[s] && i.push(a[s]);
      }
    } else if (e.nodeType || e === H || e === f) i.push(e);else if (0 < e.length && e[0].nodeType) for (s = 0; s < e.length; s += 1) {
      i.push(e[s]);
    }return new l(i);
  }function r(e) {
    for (var t = [], i = 0; i < e.length; i += 1) {
      -1 === t.indexOf(e[i]) && t.push(e[i]);
    }return t;
  }y.fn = l.prototype, y.Class = l, y.Dom7 = l;var t = { addClass: function addClass(e) {
      if (void 0 === e) return this;for (var t = e.split(" "), i = 0; i < t.length; i += 1) {
        for (var s = 0; s < this.length; s += 1) {
          void 0 !== this[s].classList && this[s].classList.add(t[i]);
        }
      }return this;
    }, removeClass: function removeClass(e) {
      for (var t = e.split(" "), i = 0; i < t.length; i += 1) {
        for (var s = 0; s < this.length; s += 1) {
          void 0 !== this[s].classList && this[s].classList.remove(t[i]);
        }
      }return this;
    }, hasClass: function hasClass(e) {
      return !!this[0] && this[0].classList.contains(e);
    }, toggleClass: function toggleClass(e) {
      for (var t = e.split(" "), i = 0; i < t.length; i += 1) {
        for (var s = 0; s < this.length; s += 1) {
          void 0 !== this[s].classList && this[s].classList.toggle(t[i]);
        }
      }return this;
    }, attr: function attr(e, t) {
      var i = arguments;if (1 === arguments.length && "string" == typeof e) return this[0] ? this[0].getAttribute(e) : void 0;for (var s = 0; s < this.length; s += 1) {
        if (2 === i.length) this[s].setAttribute(e, t);else for (var a in e) {
          this[s][a] = e[a], this[s].setAttribute(a, e[a]);
        }
      }return this;
    }, removeAttr: function removeAttr(e) {
      for (var t = 0; t < this.length; t += 1) {
        this[t].removeAttribute(e);
      }return this;
    }, data: function data(e, t) {
      var i;if (void 0 !== t) {
        for (var s = 0; s < this.length; s += 1) {
          (i = this[s]).dom7ElementDataStorage || (i.dom7ElementDataStorage = {}), i.dom7ElementDataStorage[e] = t;
        }return this;
      }if (i = this[0]) {
        if (i.dom7ElementDataStorage && e in i.dom7ElementDataStorage) return i.dom7ElementDataStorage[e];var a = i.getAttribute("data-" + e);return a || void 0;
      }
    }, transform: function transform(e) {
      for (var t = 0; t < this.length; t += 1) {
        var i = this[t].style;i.webkitTransform = e, i.transform = e;
      }return this;
    }, transition: function transition(e) {
      "string" != typeof e && (e += "ms");for (var t = 0; t < this.length; t += 1) {
        var i = this[t].style;i.webkitTransitionDuration = e, i.transitionDuration = e;
      }return this;
    }, on: function on() {
      for (var e, t = [], i = arguments.length; i--;) {
        t[i] = arguments[i];
      }var s = t[0],
          r = t[1],
          n = t[2],
          a = t[3];function o(e) {
        var t = e.target;if (t) {
          var i = e.target.dom7EventData || [];if (i.indexOf(e) < 0 && i.unshift(e), y(t).is(r)) n.apply(t, i);else for (var s = y(t).parents(), a = 0; a < s.length; a += 1) {
            y(s[a]).is(r) && n.apply(s[a], i);
          }
        }
      }function l(e) {
        var t = e && e.target && e.target.dom7EventData || [];t.indexOf(e) < 0 && t.unshift(e), n.apply(this, t);
      }"function" == typeof t[1] && (s = (e = t)[0], n = e[1], a = e[2], r = void 0), a || (a = !1);for (var d, p = s.split(" "), c = 0; c < this.length; c += 1) {
        var u = this[c];if (r) for (d = 0; d < p.length; d += 1) {
          var h = p[d];u.dom7LiveListeners || (u.dom7LiveListeners = {}), u.dom7LiveListeners[h] || (u.dom7LiveListeners[h] = []), u.dom7LiveListeners[h].push({ listener: n, proxyListener: o }), u.addEventListener(h, o, a);
        } else for (d = 0; d < p.length; d += 1) {
          var v = p[d];u.dom7Listeners || (u.dom7Listeners = {}), u.dom7Listeners[v] || (u.dom7Listeners[v] = []), u.dom7Listeners[v].push({ listener: n, proxyListener: l }), u.addEventListener(v, l, a);
        }
      }return this;
    }, off: function off() {
      for (var e, t = [], i = arguments.length; i--;) {
        t[i] = arguments[i];
      }var s = t[0],
          a = t[1],
          r = t[2],
          n = t[3];"function" == typeof t[1] && (s = (e = t)[0], r = e[1], n = e[2], a = void 0), n || (n = !1);for (var o = s.split(" "), l = 0; l < o.length; l += 1) {
        for (var d = o[l], p = 0; p < this.length; p += 1) {
          var c = this[p],
              u = void 0;!a && c.dom7Listeners ? u = c.dom7Listeners[d] : a && c.dom7LiveListeners && (u = c.dom7LiveListeners[d]);for (var h = u.length - 1; 0 <= h; h -= 1) {
            var v = u[h];r && v.listener === r ? (c.removeEventListener(d, v.proxyListener, n), u.splice(h, 1)) : r || (c.removeEventListener(d, v.proxyListener, n), u.splice(h, 1));
          }
        }
      }return this;
    }, trigger: function trigger() {
      for (var e = [], t = arguments.length; t--;) {
        e[t] = arguments[t];
      }for (var i = e[0].split(" "), s = e[1], a = 0; a < i.length; a += 1) {
        for (var r = i[a], n = 0; n < this.length; n += 1) {
          var o = this[n],
              l = void 0;try {
            l = new H.CustomEvent(r, { detail: s, bubbles: !0, cancelable: !0 });
          } catch (e) {
            (l = f.createEvent("Event")).initEvent(r, !0, !0), l.detail = s;
          }o.dom7EventData = e.filter(function (e, t) {
            return 0 < t;
          }), o.dispatchEvent(l), o.dom7EventData = [], delete o.dom7EventData;
        }
      }return this;
    }, transitionEnd: function transitionEnd(t) {
      var i,
          s = ["webkitTransitionEnd", "transitionend"],
          a = this;function r(e) {
        if (e.target === this) for (t.call(this, e), i = 0; i < s.length; i += 1) {
          a.off(s[i], r);
        }
      }if (t) for (i = 0; i < s.length; i += 1) {
        a.on(s[i], r);
      }return this;
    }, outerWidth: function outerWidth(e) {
      if (0 < this.length) {
        if (e) {
          var t = this.styles();return this[0].offsetWidth + parseFloat(t.getPropertyValue("margin-right")) + parseFloat(t.getPropertyValue("margin-left"));
        }return this[0].offsetWidth;
      }return null;
    }, outerHeight: function outerHeight(e) {
      if (0 < this.length) {
        if (e) {
          var t = this.styles();return this[0].offsetHeight + parseFloat(t.getPropertyValue("margin-top")) + parseFloat(t.getPropertyValue("margin-bottom"));
        }return this[0].offsetHeight;
      }return null;
    }, offset: function offset() {
      if (0 < this.length) {
        var e = this[0],
            t = e.getBoundingClientRect(),
            i = f.body,
            s = e.clientTop || i.clientTop || 0,
            a = e.clientLeft || i.clientLeft || 0,
            r = e === H ? H.scrollY : e.scrollTop,
            n = e === H ? H.scrollX : e.scrollLeft;return { top: t.top + r - s, left: t.left + n - a };
      }return null;
    }, css: function css(e, t) {
      var i;if (1 === arguments.length) {
        if ("string" != typeof e) {
          for (i = 0; i < this.length; i += 1) {
            for (var s in e) {
              this[i].style[s] = e[s];
            }
          }return this;
        }if (this[0]) return H.getComputedStyle(this[0], null).getPropertyValue(e);
      }if (2 === arguments.length && "string" == typeof e) {
        for (i = 0; i < this.length; i += 1) {
          this[i].style[e] = t;
        }return this;
      }return this;
    }, each: function each(e) {
      if (!e) return this;for (var t = 0; t < this.length; t += 1) {
        if (!1 === e.call(this[t], t, this[t])) return this;
      }return this;
    }, html: function html(e) {
      if (void 0 === e) return this[0] ? this[0].innerHTML : void 0;for (var t = 0; t < this.length; t += 1) {
        this[t].innerHTML = e;
      }return this;
    }, text: function text(e) {
      if (void 0 === e) return this[0] ? this[0].textContent.trim() : null;for (var t = 0; t < this.length; t += 1) {
        this[t].textContent = e;
      }return this;
    }, is: function is(e) {
      var t,
          i,
          s = this[0];if (!s || void 0 === e) return !1;if ("string" == typeof e) {
        if (s.matches) return s.matches(e);if (s.webkitMatchesSelector) return s.webkitMatchesSelector(e);if (s.msMatchesSelector) return s.msMatchesSelector(e);for (t = y(e), i = 0; i < t.length; i += 1) {
          if (t[i] === s) return !0;
        }return !1;
      }if (e === f) return s === f;if (e === H) return s === H;if (e.nodeType || e instanceof l) {
        for (t = e.nodeType ? [e] : e, i = 0; i < t.length; i += 1) {
          if (t[i] === s) return !0;
        }return !1;
      }return !1;
    }, index: function index() {
      var e,
          t = this[0];if (t) {
        for (e = 0; null !== (t = t.previousSibling);) {
          1 === t.nodeType && (e += 1);
        }return e;
      }
    }, eq: function eq(e) {
      if (void 0 === e) return this;var t,
          i = this.length;return new l(i - 1 < e ? [] : e < 0 ? (t = i + e) < 0 ? [] : [this[t]] : [this[e]]);
    }, append: function append() {
      for (var e, t = [], i = arguments.length; i--;) {
        t[i] = arguments[i];
      }for (var s = 0; s < t.length; s += 1) {
        e = t[s];for (var a = 0; a < this.length; a += 1) {
          if ("string" == typeof e) {
            var r = f.createElement("div");for (r.innerHTML = e; r.firstChild;) {
              this[a].appendChild(r.firstChild);
            }
          } else if (e instanceof l) for (var n = 0; n < e.length; n += 1) {
            this[a].appendChild(e[n]);
          } else this[a].appendChild(e);
        }
      }return this;
    }, prepend: function prepend(e) {
      var t,
          i,
          s = this;for (t = 0; t < this.length; t += 1) {
        if ("string" == typeof e) {
          var a = f.createElement("div");for (a.innerHTML = e, i = a.childNodes.length - 1; 0 <= i; i -= 1) {
            s[t].insertBefore(a.childNodes[i], s[t].childNodes[0]);
          }
        } else if (e instanceof l) for (i = 0; i < e.length; i += 1) {
          s[t].insertBefore(e[i], s[t].childNodes[0]);
        } else s[t].insertBefore(e, s[t].childNodes[0]);
      }return this;
    }, next: function next(e) {
      return 0 < this.length ? e ? this[0].nextElementSibling && y(this[0].nextElementSibling).is(e) ? new l([this[0].nextElementSibling]) : new l([]) : this[0].nextElementSibling ? new l([this[0].nextElementSibling]) : new l([]) : new l([]);
    }, nextAll: function nextAll(e) {
      var t = [],
          i = this[0];if (!i) return new l([]);for (; i.nextElementSibling;) {
        var s = i.nextElementSibling;e ? y(s).is(e) && t.push(s) : t.push(s), i = s;
      }return new l(t);
    }, prev: function prev(e) {
      if (0 < this.length) {
        var t = this[0];return e ? t.previousElementSibling && y(t.previousElementSibling).is(e) ? new l([t.previousElementSibling]) : new l([]) : t.previousElementSibling ? new l([t.previousElementSibling]) : new l([]);
      }return new l([]);
    }, prevAll: function prevAll(e) {
      var t = [],
          i = this[0];if (!i) return new l([]);for (; i.previousElementSibling;) {
        var s = i.previousElementSibling;e ? y(s).is(e) && t.push(s) : t.push(s), i = s;
      }return new l(t);
    }, parent: function parent(e) {
      for (var t = [], i = 0; i < this.length; i += 1) {
        null !== this[i].parentNode && (e ? y(this[i].parentNode).is(e) && t.push(this[i].parentNode) : t.push(this[i].parentNode));
      }return y(r(t));
    }, parents: function parents(e) {
      for (var t = [], i = 0; i < this.length; i += 1) {
        for (var s = this[i].parentNode; s;) {
          e ? y(s).is(e) && t.push(s) : t.push(s), s = s.parentNode;
        }
      }return y(r(t));
    }, closest: function closest(e) {
      var t = this;return void 0 === e ? new l([]) : (t.is(e) || (t = t.parents(e).eq(0)), t);
    }, find: function find(e) {
      for (var t = [], i = 0; i < this.length; i += 1) {
        for (var s = this[i].querySelectorAll(e), a = 0; a < s.length; a += 1) {
          t.push(s[a]);
        }
      }return new l(t);
    }, children: function children(e) {
      for (var t = [], i = 0; i < this.length; i += 1) {
        for (var s = this[i].childNodes, a = 0; a < s.length; a += 1) {
          e ? 1 === s[a].nodeType && y(s[a]).is(e) && t.push(s[a]) : 1 === s[a].nodeType && t.push(s[a]);
        }
      }return new l(r(t));
    }, remove: function remove() {
      for (var e = 0; e < this.length; e += 1) {
        this[e].parentNode && this[e].parentNode.removeChild(this[e]);
      }return this;
    }, add: function add() {
      for (var e = [], t = arguments.length; t--;) {
        e[t] = arguments[t];
      }var i, s;for (i = 0; i < e.length; i += 1) {
        var a = y(e[i]);for (s = 0; s < a.length; s += 1) {
          this[this.length] = a[s], this.length += 1;
        }
      }return this;
    }, styles: function styles() {
      return this[0] ? H.getComputedStyle(this[0], null) : {};
    } };Object.keys(t).forEach(function (e) {
    y.fn[e] = t[e];
  });var e,
      i,
      s,
      N = { deleteProps: function deleteProps(e) {
      var t = e;Object.keys(t).forEach(function (e) {
        try {
          t[e] = null;
        } catch (e) {}try {
          delete t[e];
        } catch (e) {}
      });
    }, nextTick: function nextTick(e, t) {
      return void 0 === t && (t = 0), setTimeout(e, t);
    }, now: function now() {
      return Date.now();
    }, getTranslate: function getTranslate(e, t) {
      var i, s, a;void 0 === t && (t = "x");var r = H.getComputedStyle(e, null);return H.WebKitCSSMatrix ? (6 < (s = r.transform || r.webkitTransform).split(",").length && (s = s.split(", ").map(function (e) {
        return e.replace(",", ".");
      }).join(", ")), a = new H.WebKitCSSMatrix("none" === s ? "" : s)) : i = (a = r.MozTransform || r.OTransform || r.MsTransform || r.msTransform || r.transform || r.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,")).toString().split(","), "x" === t && (s = H.WebKitCSSMatrix ? a.m41 : 16 === i.length ? parseFloat(i[12]) : parseFloat(i[4])), "y" === t && (s = H.WebKitCSSMatrix ? a.m42 : 16 === i.length ? parseFloat(i[13]) : parseFloat(i[5])), s || 0;
    }, parseUrlQuery: function parseUrlQuery(e) {
      var t,
          i,
          s,
          a,
          r = {},
          n = e || H.location.href;if ("string" == typeof n && n.length) for (a = (i = (n = -1 < n.indexOf("?") ? n.replace(/\S*\?/, "") : "").split("&").filter(function (e) {
        return "" !== e;
      })).length, t = 0; t < a; t += 1) {
        s = i[t].replace(/#\S+/g, "").split("="), r[decodeURIComponent(s[0])] = void 0 === s[1] ? void 0 : decodeURIComponent(s[1]) || "";
      }return r;
    }, isObject: function isObject(e) {
      return "object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) && null !== e && e.constructor && e.constructor === Object;
    }, extend: function extend() {
      for (var e = [], t = arguments.length; t--;) {
        e[t] = arguments[t];
      }for (var i = Object(e[0]), s = 1; s < e.length; s += 1) {
        var a = e[s];if (null != a) for (var r = Object.keys(Object(a)), n = 0, o = r.length; n < o; n += 1) {
          var l = r[n],
              d = Object.getOwnPropertyDescriptor(a, l);void 0 !== d && d.enumerable && (N.isObject(i[l]) && N.isObject(a[l]) ? N.extend(i[l], a[l]) : !N.isObject(i[l]) && N.isObject(a[l]) ? (i[l] = {}, N.extend(i[l], a[l])) : i[l] = a[l]);
        }
      }return i;
    } },
      F = (s = f.createElement("div"), { touch: H.Modernizr && !0 === H.Modernizr.touch || !!("ontouchstart" in H || H.DocumentTouch && f instanceof H.DocumentTouch), pointerEvents: !(!H.navigator.pointerEnabled && !H.PointerEvent), prefixedPointerEvents: !!H.navigator.msPointerEnabled, transition: (i = s.style, "transition" in i || "webkitTransition" in i || "MozTransition" in i), transforms3d: H.Modernizr && !0 === H.Modernizr.csstransforms3d || (e = s.style, "webkitPerspective" in e || "MozPerspective" in e || "OPerspective" in e || "MsPerspective" in e || "perspective" in e), flexbox: function () {
      for (var e = s.style, t = "alignItems webkitAlignItems webkitBoxAlign msFlexAlign mozBoxAlign webkitFlexDirection msFlexDirection mozBoxDirection mozBoxOrient webkitBoxDirection webkitBoxOrient".split(" "), i = 0; i < t.length; i += 1) {
        if (t[i] in e) return !0;
      }return !1;
    }(), observer: "MutationObserver" in H || "WebkitMutationObserver" in H, passiveListener: function () {
      var e = !1;try {
        var t = Object.defineProperty({}, "passive", { get: function get() {
            e = !0;
          } });H.addEventListener("testPassiveListener", null, t);
      } catch (e) {}return e;
    }(), gestures: "ongesturestart" in H }),
      a = function a(e) {
    void 0 === e && (e = {});var t = this;t.params = e, t.eventsListeners = {}, t.params && t.params.on && Object.keys(t.params.on).forEach(function (e) {
      t.on(e, t.params.on[e]);
    });
  },
      n = { components: { configurable: !0 } };a.prototype.on = function (e, t, i) {
    var s = this;if ("function" != typeof t) return s;var a = i ? "unshift" : "push";return e.split(" ").forEach(function (e) {
      s.eventsListeners[e] || (s.eventsListeners[e] = []), s.eventsListeners[e][a](t);
    }), s;
  }, a.prototype.once = function (s, a, e) {
    var r = this;if ("function" != typeof a) return r;return r.on(s, function e() {
      for (var t = [], i = arguments.length; i--;) {
        t[i] = arguments[i];
      }a.apply(r, t), r.off(s, e);
    }, e);
  }, a.prototype.off = function (e, s) {
    var a = this;return a.eventsListeners && e.split(" ").forEach(function (i) {
      void 0 === s ? a.eventsListeners[i] = [] : a.eventsListeners[i].forEach(function (e, t) {
        e === s && a.eventsListeners[i].splice(t, 1);
      });
    }), a;
  }, a.prototype.emit = function () {
    for (var e = [], t = arguments.length; t--;) {
      e[t] = arguments[t];
    }var i,
        s,
        a,
        r = this;return r.eventsListeners && ("string" == typeof e[0] || Array.isArray(e[0]) ? (i = e[0], s = e.slice(1, e.length), a = r) : (i = e[0].events, s = e[0].data, a = e[0].context || r), (Array.isArray(i) ? i : i.split(" ")).forEach(function (e) {
      if (r.eventsListeners && r.eventsListeners[e]) {
        var t = [];r.eventsListeners[e].forEach(function (e) {
          t.push(e);
        }), t.forEach(function (e) {
          e.apply(a, s);
        });
      }
    })), r;
  }, a.prototype.useModulesParams = function (i) {
    var s = this;s.modules && Object.keys(s.modules).forEach(function (e) {
      var t = s.modules[e];t.params && N.extend(i, t.params);
    });
  }, a.prototype.useModules = function (s) {
    void 0 === s && (s = {});var a = this;a.modules && Object.keys(a.modules).forEach(function (e) {
      var i = a.modules[e],
          t = s[e] || {};i.instance && Object.keys(i.instance).forEach(function (e) {
        var t = i.instance[e];a[e] = "function" == typeof t ? t.bind(a) : t;
      }), i.on && a.on && Object.keys(i.on).forEach(function (e) {
        a.on(e, i.on[e]);
      }), i.create && i.create.bind(a)(t);
    });
  }, n.components.set = function (e) {
    this.use && this.use(e);
  }, a.installModule = function (t) {
    for (var e = [], i = arguments.length - 1; 0 < i--;) {
      e[i] = arguments[i + 1];
    }var s = this;s.prototype.modules || (s.prototype.modules = {});var a = t.name || Object.keys(s.prototype.modules).length + "_" + N.now();return (s.prototype.modules[a] = t).proto && Object.keys(t.proto).forEach(function (e) {
      s.prototype[e] = t.proto[e];
    }), t.static && Object.keys(t.static).forEach(function (e) {
      s[e] = t.static[e];
    }), t.install && t.install.apply(s, e), s;
  }, a.use = function (e) {
    for (var t = [], i = arguments.length - 1; 0 < i--;) {
      t[i] = arguments[i + 1];
    }var s = this;return Array.isArray(e) ? (e.forEach(function (e) {
      return s.installModule(e);
    }), s) : s.installModule.apply(s, [e].concat(t));
  }, Object.defineProperties(a, n);var o = { updateSize: function updateSize() {
      var e,
          t,
          i = this,
          s = i.$el;e = void 0 !== i.params.width ? i.params.width : s[0].clientWidth, t = void 0 !== i.params.height ? i.params.height : s[0].clientHeight, 0 === e && i.isHorizontal() || 0 === t && i.isVertical() || (e = e - parseInt(s.css("padding-left"), 10) - parseInt(s.css("padding-right"), 10), t = t - parseInt(s.css("padding-top"), 10) - parseInt(s.css("padding-bottom"), 10), N.extend(i, { width: e, height: t, size: i.isHorizontal() ? e : t }));
    }, updateSlides: function updateSlides() {
      var e = this,
          t = e.params,
          i = e.$wrapperEl,
          s = e.size,
          a = e.rtlTranslate,
          r = e.wrongRTL,
          n = e.virtual && t.virtual.enabled,
          o = n ? e.virtual.slides.length : e.slides.length,
          l = i.children("." + e.params.slideClass),
          d = n ? e.virtual.slides.length : l.length,
          p = [],
          c = [],
          u = [],
          h = t.slidesOffsetBefore;"function" == typeof h && (h = t.slidesOffsetBefore.call(e));var v = t.slidesOffsetAfter;"function" == typeof v && (v = t.slidesOffsetAfter.call(e));var f = e.snapGrid.length,
          m = e.snapGrid.length,
          g = t.spaceBetween,
          b = -h,
          T = 0,
          w = 0;if (void 0 !== s) {
        var y, x;"string" == typeof g && 0 <= g.indexOf("%") && (g = parseFloat(g.replace("%", "")) / 100 * s), e.virtualSize = -g, a ? l.css({ marginLeft: "", marginTop: "" }) : l.css({ marginRight: "", marginBottom: "" }), 1 < t.slidesPerColumn && (y = Math.floor(d / t.slidesPerColumn) === d / e.params.slidesPerColumn ? d : Math.ceil(d / t.slidesPerColumn) * t.slidesPerColumn, "auto" !== t.slidesPerView && "row" === t.slidesPerColumnFill && (y = Math.max(y, t.slidesPerView * t.slidesPerColumn)));for (var C, S = t.slidesPerColumn, E = y / S, M = E - (t.slidesPerColumn * E - d), k = 0; k < d; k += 1) {
          x = 0;var L = l.eq(k);if (1 < t.slidesPerColumn) {
            var P = void 0,
                D = void 0,
                z = void 0;"column" === t.slidesPerColumnFill ? (z = k - (D = Math.floor(k / S)) * S, (M < D || D === M && z === S - 1) && S <= (z += 1) && (z = 0, D += 1), P = D + z * y / S, L.css({ "-webkit-box-ordinal-group": P, "-moz-box-ordinal-group": P, "-ms-flex-order": P, "-webkit-order": P, order: P })) : D = k - (z = Math.floor(k / E)) * E, L.css("margin-" + (e.isHorizontal() ? "top" : "left"), 0 !== z && t.spaceBetween && t.spaceBetween + "px").attr("data-swiper-column", D).attr("data-swiper-row", z);
          }if ("none" !== L.css("display")) {
            if ("auto" === t.slidesPerView) {
              var O = H.getComputedStyle(L[0], null),
                  I = L[0].style.transform,
                  A = L[0].style.webkitTransform;I && (L[0].style.transform = "none"), A && (L[0].style.webkitTransform = "none"), x = e.isHorizontal() ? L[0].getBoundingClientRect().width + parseFloat(O.getPropertyValue("margin-left")) + parseFloat(O.getPropertyValue("margin-right")) : L[0].getBoundingClientRect().height + parseFloat(O.getPropertyValue("margin-top")) + parseFloat(O.getPropertyValue("margin-bottom")), I && (L[0].style.transform = I), A && (L[0].style.webkitTransform = A), t.roundLengths && (x = Math.floor(x));
            } else x = (s - (t.slidesPerView - 1) * g) / t.slidesPerView, t.roundLengths && (x = Math.floor(x)), l[k] && (e.isHorizontal() ? l[k].style.width = x + "px" : l[k].style.height = x + "px");l[k] && (l[k].swiperSlideSize = x), u.push(x), t.centeredSlides ? (b = b + x / 2 + T / 2 + g, 0 === T && 0 !== k && (b = b - s / 2 - g), 0 === k && (b = b - s / 2 - g), Math.abs(b) < .001 && (b = 0), t.roundLengths && (b = Math.floor(b)), w % t.slidesPerGroup == 0 && p.push(b), c.push(b)) : (t.roundLengths && (b = Math.floor(b)), w % t.slidesPerGroup == 0 && p.push(b), c.push(b), b = b + x + g), e.virtualSize += x + g, T = x, w += 1;
          }
        }if (e.virtualSize = Math.max(e.virtualSize, s) + v, a && r && ("slide" === t.effect || "coverflow" === t.effect) && i.css({ width: e.virtualSize + t.spaceBetween + "px" }), F.flexbox && !t.setWrapperSize || (e.isHorizontal() ? i.css({ width: e.virtualSize + t.spaceBetween + "px" }) : i.css({ height: e.virtualSize + t.spaceBetween + "px" })), 1 < t.slidesPerColumn && (e.virtualSize = (x + t.spaceBetween) * y, e.virtualSize = Math.ceil(e.virtualSize / t.slidesPerColumn) - t.spaceBetween, e.isHorizontal() ? i.css({ width: e.virtualSize + t.spaceBetween + "px" }) : i.css({ height: e.virtualSize + t.spaceBetween + "px" }), t.centeredSlides)) {
          C = [];for (var B = 0; B < p.length; B += 1) {
            var $ = p[B];t.roundLengths && ($ = Math.floor($)), p[B] < e.virtualSize + p[0] && C.push($);
          }p = C;
        }if (!t.centeredSlides) {
          C = [];for (var G = 0; G < p.length; G += 1) {
            var V = p[G];t.roundLengths && (V = Math.floor(V)), p[G] <= e.virtualSize - s && C.push(V);
          }p = C, 1 < Math.floor(e.virtualSize - s) - Math.floor(p[p.length - 1]) && p.push(e.virtualSize - s);
        }0 === p.length && (p = [0]), 0 !== t.spaceBetween && (e.isHorizontal() ? a ? l.css({ marginLeft: g + "px" }) : l.css({ marginRight: g + "px" }) : l.css({ marginBottom: g + "px" })), N.extend(e, { slides: l, snapGrid: p, slidesGrid: c, slidesSizesGrid: u }), d !== o && e.emit("slidesLengthChange"), p.length !== f && (e.params.watchOverflow && e.checkOverflow(), e.emit("snapGridLengthChange")), c.length !== m && e.emit("slidesGridLengthChange"), (t.watchSlidesProgress || t.watchSlidesVisibility) && e.updateSlidesOffset();
      }
    }, updateAutoHeight: function updateAutoHeight(e) {
      var t,
          i = this,
          s = [],
          a = 0;if ("number" == typeof e ? i.setTransition(e) : !0 === e && i.setTransition(i.params.speed), "auto" !== i.params.slidesPerView && 1 < i.params.slidesPerView) for (t = 0; t < Math.ceil(i.params.slidesPerView); t += 1) {
        var r = i.activeIndex + t;if (r > i.slides.length) break;s.push(i.slides.eq(r)[0]);
      } else s.push(i.slides.eq(i.activeIndex)[0]);for (t = 0; t < s.length; t += 1) {
        if (void 0 !== s[t]) {
          var n = s[t].offsetHeight;a = a < n ? n : a;
        }
      }a && i.$wrapperEl.css("height", a + "px");
    }, updateSlidesOffset: function updateSlidesOffset() {
      for (var e = this.slides, t = 0; t < e.length; t += 1) {
        e[t].swiperSlideOffset = this.isHorizontal() ? e[t].offsetLeft : e[t].offsetTop;
      }
    }, updateSlidesProgress: function updateSlidesProgress(e) {
      void 0 === e && (e = this && this.translate || 0);var t = this,
          i = t.params,
          s = t.slides,
          a = t.rtlTranslate;if (0 !== s.length) {
        void 0 === s[0].swiperSlideOffset && t.updateSlidesOffset();var r = -e;a && (r = e), s.removeClass(i.slideVisibleClass);for (var n = 0; n < s.length; n += 1) {
          var o = s[n],
              l = (r + (i.centeredSlides ? t.minTranslate() : 0) - o.swiperSlideOffset) / (o.swiperSlideSize + i.spaceBetween);if (i.watchSlidesVisibility) {
            var d = -(r - o.swiperSlideOffset),
                p = d + t.slidesSizesGrid[n];(0 <= d && d < t.size || 0 < p && p <= t.size || d <= 0 && p >= t.size) && s.eq(n).addClass(i.slideVisibleClass);
          }o.progress = a ? -l : l;
        }
      }
    }, updateProgress: function updateProgress(e) {
      void 0 === e && (e = this && this.translate || 0);var t = this,
          i = t.params,
          s = t.maxTranslate() - t.minTranslate(),
          a = t.progress,
          r = t.isBeginning,
          n = t.isEnd,
          o = r,
          l = n;0 === s ? n = r = !(a = 0) : (r = (a = (e - t.minTranslate()) / s) <= 0, n = 1 <= a), N.extend(t, { progress: a, isBeginning: r, isEnd: n }), (i.watchSlidesProgress || i.watchSlidesVisibility) && t.updateSlidesProgress(e), r && !o && t.emit("reachBeginning toEdge"), n && !l && t.emit("reachEnd toEdge"), (o && !r || l && !n) && t.emit("fromEdge"), t.emit("progress", a);
    }, updateSlidesClasses: function updateSlidesClasses() {
      var e,
          t = this,
          i = t.slides,
          s = t.params,
          a = t.$wrapperEl,
          r = t.activeIndex,
          n = t.realIndex,
          o = t.virtual && s.virtual.enabled;i.removeClass(s.slideActiveClass + " " + s.slideNextClass + " " + s.slidePrevClass + " " + s.slideDuplicateActiveClass + " " + s.slideDuplicateNextClass + " " + s.slideDuplicatePrevClass), (e = o ? t.$wrapperEl.find("." + s.slideClass + '[data-swiper-slide-index="' + r + '"]') : i.eq(r)).addClass(s.slideActiveClass), s.loop && (e.hasClass(s.slideDuplicateClass) ? a.children("." + s.slideClass + ":not(." + s.slideDuplicateClass + ')[data-swiper-slide-index="' + n + '"]').addClass(s.slideDuplicateActiveClass) : a.children("." + s.slideClass + "." + s.slideDuplicateClass + '[data-swiper-slide-index="' + n + '"]').addClass(s.slideDuplicateActiveClass));var l = e.nextAll("." + s.slideClass).eq(0).addClass(s.slideNextClass);s.loop && 0 === l.length && (l = i.eq(0)).addClass(s.slideNextClass);var d = e.prevAll("." + s.slideClass).eq(0).addClass(s.slidePrevClass);s.loop && 0 === d.length && (d = i.eq(-1)).addClass(s.slidePrevClass), s.loop && (l.hasClass(s.slideDuplicateClass) ? a.children("." + s.slideClass + ":not(." + s.slideDuplicateClass + ')[data-swiper-slide-index="' + l.attr("data-swiper-slide-index") + '"]').addClass(s.slideDuplicateNextClass) : a.children("." + s.slideClass + "." + s.slideDuplicateClass + '[data-swiper-slide-index="' + l.attr("data-swiper-slide-index") + '"]').addClass(s.slideDuplicateNextClass), d.hasClass(s.slideDuplicateClass) ? a.children("." + s.slideClass + ":not(." + s.slideDuplicateClass + ')[data-swiper-slide-index="' + d.attr("data-swiper-slide-index") + '"]').addClass(s.slideDuplicatePrevClass) : a.children("." + s.slideClass + "." + s.slideDuplicateClass + '[data-swiper-slide-index="' + d.attr("data-swiper-slide-index") + '"]').addClass(s.slideDuplicatePrevClass));
    }, updateActiveIndex: function updateActiveIndex(e) {
      var t,
          i = this,
          s = i.rtlTranslate ? i.translate : -i.translate,
          a = i.slidesGrid,
          r = i.snapGrid,
          n = i.params,
          o = i.activeIndex,
          l = i.realIndex,
          d = i.snapIndex,
          p = e;if (void 0 === p) {
        for (var c = 0; c < a.length; c += 1) {
          void 0 !== a[c + 1] ? s >= a[c] && s < a[c + 1] - (a[c + 1] - a[c]) / 2 ? p = c : s >= a[c] && s < a[c + 1] && (p = c + 1) : s >= a[c] && (p = c);
        }n.normalizeSlideIndex && (p < 0 || void 0 === p) && (p = 0);
      }if ((t = 0 <= r.indexOf(s) ? r.indexOf(s) : Math.floor(p / n.slidesPerGroup)) >= r.length && (t = r.length - 1), p !== o) {
        var u = parseInt(i.slides.eq(p).attr("data-swiper-slide-index") || p, 10);N.extend(i, { snapIndex: t, realIndex: u, previousIndex: o, activeIndex: p }), i.emit("activeIndexChange"), i.emit("snapIndexChange"), l !== u && i.emit("realIndexChange"), i.emit("slideChange");
      } else t !== d && (i.snapIndex = t, i.emit("snapIndexChange"));
    }, updateClickedSlide: function updateClickedSlide(e) {
      var t = this,
          i = t.params,
          s = y(e.target).closest("." + i.slideClass)[0],
          a = !1;if (s) for (var r = 0; r < t.slides.length; r += 1) {
        t.slides[r] === s && (a = !0);
      }if (!s || !a) return t.clickedSlide = void 0, void (t.clickedIndex = void 0);t.clickedSlide = s, t.virtual && t.params.virtual.enabled ? t.clickedIndex = parseInt(y(s).attr("data-swiper-slide-index"), 10) : t.clickedIndex = y(s).index(), i.slideToClickedSlide && void 0 !== t.clickedIndex && t.clickedIndex !== t.activeIndex && t.slideToClickedSlide();
    } };var d = { getTranslate: function getTranslate(e) {
      void 0 === e && (e = this.isHorizontal() ? "x" : "y");var t = this.params,
          i = this.rtlTranslate,
          s = this.translate,
          a = this.$wrapperEl;if (t.virtualTranslate) return i ? -s : s;var r = N.getTranslate(a[0], e);return i && (r = -r), r || 0;
    }, setTranslate: function setTranslate(e, t) {
      var i = this,
          s = i.rtlTranslate,
          a = i.params,
          r = i.$wrapperEl,
          n = i.progress,
          o = 0,
          l = 0;i.isHorizontal() ? o = s ? -e : e : l = e, a.roundLengths && (o = Math.floor(o), l = Math.floor(l)), a.virtualTranslate || (F.transforms3d ? r.transform("translate3d(" + o + "px, " + l + "px, 0px)") : r.transform("translate(" + o + "px, " + l + "px)")), i.previousTranslate = i.translate, i.translate = i.isHorizontal() ? o : l;var d = i.maxTranslate() - i.minTranslate();(0 === d ? 0 : (e - i.minTranslate()) / d) !== n && i.updateProgress(e), i.emit("setTranslate", i.translate, t);
    }, minTranslate: function minTranslate() {
      return -this.snapGrid[0];
    }, maxTranslate: function maxTranslate() {
      return -this.snapGrid[this.snapGrid.length - 1];
    } };var p = { setTransition: function setTransition(e, t) {
      this.$wrapperEl.transition(e), this.emit("setTransition", e, t);
    }, transitionStart: function transitionStart(e, t) {
      void 0 === e && (e = !0);var i = this,
          s = i.activeIndex,
          a = i.params,
          r = i.previousIndex;a.autoHeight && i.updateAutoHeight();var n = t;if (n || (n = r < s ? "next" : s < r ? "prev" : "reset"), i.emit("transitionStart"), e && s !== r) {
        if ("reset" === n) return void i.emit("slideResetTransitionStart");i.emit("slideChangeTransitionStart"), "next" === n ? i.emit("slideNextTransitionStart") : i.emit("slidePrevTransitionStart");
      }
    }, transitionEnd: function transitionEnd(e, t) {
      void 0 === e && (e = !0);var i = this,
          s = i.activeIndex,
          a = i.previousIndex;i.animating = !1, i.setTransition(0);var r = t;if (r || (r = a < s ? "next" : s < a ? "prev" : "reset"), i.emit("transitionEnd"), e && s !== a) {
        if ("reset" === r) return void i.emit("slideResetTransitionEnd");i.emit("slideChangeTransitionEnd"), "next" === r ? i.emit("slideNextTransitionEnd") : i.emit("slidePrevTransitionEnd");
      }
    } };var c = { slideTo: function slideTo(e, t, i, s) {
      void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === i && (i = !0);var a = this,
          r = e;r < 0 && (r = 0);var n = a.params,
          o = a.snapGrid,
          l = a.slidesGrid,
          d = a.previousIndex,
          p = a.activeIndex,
          c = a.rtlTranslate;if (a.animating && n.preventInteractionOnTransition) return !1;var u = Math.floor(r / n.slidesPerGroup);u >= o.length && (u = o.length - 1), (p || n.initialSlide || 0) === (d || 0) && i && a.emit("beforeSlideChangeStart");var h,
          v = -o[u];if (a.updateProgress(v), n.normalizeSlideIndex) for (var f = 0; f < l.length; f += 1) {
        -Math.floor(100 * v) >= Math.floor(100 * l[f]) && (r = f);
      }if (a.initialized && r !== p) {
        if (!a.allowSlideNext && v < a.translate && v < a.minTranslate()) return !1;if (!a.allowSlidePrev && v > a.translate && v > a.maxTranslate() && (p || 0) !== r) return !1;
      }return h = p < r ? "next" : r < p ? "prev" : "reset", c && -v === a.translate || !c && v === a.translate ? (a.updateActiveIndex(r), n.autoHeight && a.updateAutoHeight(), a.updateSlidesClasses(), "slide" !== n.effect && a.setTranslate(v), "reset" !== h && (a.transitionStart(i, h), a.transitionEnd(i, h)), !1) : (0 !== t && F.transition ? (a.setTransition(t), a.setTranslate(v), a.updateActiveIndex(r), a.updateSlidesClasses(), a.emit("beforeTransitionStart", t, s), a.transitionStart(i, h), a.animating || (a.animating = !0, a.onSlideToWrapperTransitionEnd || (a.onSlideToWrapperTransitionEnd = function (e) {
        a && !a.destroyed && e.target === this && (a.$wrapperEl[0].removeEventListener("transitionend", a.onSlideToWrapperTransitionEnd), a.$wrapperEl[0].removeEventListener("webkitTransitionEnd", a.onSlideToWrapperTransitionEnd), a.onSlideToWrapperTransitionEnd = null, delete a.onSlideToWrapperTransitionEnd, a.transitionEnd(i, h));
      }), a.$wrapperEl[0].addEventListener("transitionend", a.onSlideToWrapperTransitionEnd), a.$wrapperEl[0].addEventListener("webkitTransitionEnd", a.onSlideToWrapperTransitionEnd))) : (a.setTransition(0), a.setTranslate(v), a.updateActiveIndex(r), a.updateSlidesClasses(), a.emit("beforeTransitionStart", t, s), a.transitionStart(i, h), a.transitionEnd(i, h)), !0);
    }, slideToLoop: function slideToLoop(e, t, i, s) {
      void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === i && (i = !0);var a = e;return this.params.loop && (a += this.loopedSlides), this.slideTo(a, t, i, s);
    }, slideNext: function slideNext(e, t, i) {
      void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);var s = this,
          a = s.params,
          r = s.animating;return a.loop ? !r && (s.loopFix(), s._clientLeft = s.$wrapperEl[0].clientLeft, s.slideTo(s.activeIndex + a.slidesPerGroup, e, t, i)) : s.slideTo(s.activeIndex + a.slidesPerGroup, e, t, i);
    }, slidePrev: function slidePrev(e, t, i) {
      void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);var s = this,
          a = s.params,
          r = s.animating,
          n = s.snapGrid,
          o = s.slidesGrid,
          l = s.rtlTranslate;if (a.loop) {
        if (r) return !1;s.loopFix(), s._clientLeft = s.$wrapperEl[0].clientLeft;
      }function d(e) {
        return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e);
      }var p,
          c = d(l ? s.translate : -s.translate),
          u = n.map(function (e) {
        return d(e);
      }),
          h = (o.map(function (e) {
        return d(e);
      }), n[u.indexOf(c)], n[u.indexOf(c) - 1]);return void 0 !== h && (p = o.indexOf(h)) < 0 && (p = s.activeIndex - 1), s.slideTo(p, e, t, i);
    }, slideReset: function slideReset(e, t, i) {
      return void 0 === e && (e = this.params.speed), void 0 === t && (t = !0), this.slideTo(this.activeIndex, e, t, i);
    }, slideToClosest: function slideToClosest(e, t, i) {
      void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);var s = this,
          a = s.activeIndex,
          r = Math.floor(a / s.params.slidesPerGroup);if (r < s.snapGrid.length - 1) {
        var n = s.rtlTranslate ? s.translate : -s.translate,
            o = s.snapGrid[r];(s.snapGrid[r + 1] - o) / 2 < n - o && (a = s.params.slidesPerGroup);
      }return s.slideTo(a, e, t, i);
    }, slideToClickedSlide: function slideToClickedSlide() {
      var e,
          t = this,
          i = t.params,
          s = t.$wrapperEl,
          a = "auto" === i.slidesPerView ? t.slidesPerViewDynamic() : i.slidesPerView,
          r = t.clickedIndex;if (i.loop) {
        if (t.animating) return;e = parseInt(y(t.clickedSlide).attr("data-swiper-slide-index"), 10), i.centeredSlides ? r < t.loopedSlides - a / 2 || r > t.slides.length - t.loopedSlides + a / 2 ? (t.loopFix(), r = s.children("." + i.slideClass + '[data-swiper-slide-index="' + e + '"]:not(.' + i.slideDuplicateClass + ")").eq(0).index(), N.nextTick(function () {
          t.slideTo(r);
        })) : t.slideTo(r) : r > t.slides.length - a ? (t.loopFix(), r = s.children("." + i.slideClass + '[data-swiper-slide-index="' + e + '"]:not(.' + i.slideDuplicateClass + ")").eq(0).index(), N.nextTick(function () {
          t.slideTo(r);
        })) : t.slideTo(r);
      } else t.slideTo(r);
    } };var u = { loopCreate: function loopCreate() {
      var s = this,
          e = s.params,
          t = s.$wrapperEl;t.children("." + e.slideClass + "." + e.slideDuplicateClass).remove();var a = t.children("." + e.slideClass);if (e.loopFillGroupWithBlank) {
        var i = e.slidesPerGroup - a.length % e.slidesPerGroup;if (i !== e.slidesPerGroup) {
          for (var r = 0; r < i; r += 1) {
            var n = y(f.createElement("div")).addClass(e.slideClass + " " + e.slideBlankClass);t.append(n);
          }a = t.children("." + e.slideClass);
        }
      }"auto" !== e.slidesPerView || e.loopedSlides || (e.loopedSlides = a.length), s.loopedSlides = parseInt(e.loopedSlides || e.slidesPerView, 10), s.loopedSlides += e.loopAdditionalSlides, s.loopedSlides > a.length && (s.loopedSlides = a.length);var o = [],
          l = [];a.each(function (e, t) {
        var i = y(t);e < s.loopedSlides && l.push(t), e < a.length && e >= a.length - s.loopedSlides && o.push(t), i.attr("data-swiper-slide-index", e);
      });for (var d = 0; d < l.length; d += 1) {
        t.append(y(l[d].cloneNode(!0)).addClass(e.slideDuplicateClass));
      }for (var p = o.length - 1; 0 <= p; p -= 1) {
        t.prepend(y(o[p].cloneNode(!0)).addClass(e.slideDuplicateClass));
      }
    }, loopFix: function loopFix() {
      var e,
          t = this,
          i = t.params,
          s = t.activeIndex,
          a = t.slides,
          r = t.loopedSlides,
          n = t.allowSlidePrev,
          o = t.allowSlideNext,
          l = t.snapGrid,
          d = t.rtlTranslate;t.allowSlidePrev = !0, t.allowSlideNext = !0;var p = -l[s] - t.getTranslate();s < r ? (e = a.length - 3 * r + s, e += r, t.slideTo(e, 0, !1, !0) && 0 !== p && t.setTranslate((d ? -t.translate : t.translate) - p)) : ("auto" === i.slidesPerView && 2 * r <= s || s >= a.length - r) && (e = -a.length + s + r, e += r, t.slideTo(e, 0, !1, !0) && 0 !== p && t.setTranslate((d ? -t.translate : t.translate) - p));t.allowSlidePrev = n, t.allowSlideNext = o;
    }, loopDestroy: function loopDestroy() {
      var e = this.$wrapperEl,
          t = this.params,
          i = this.slides;e.children("." + t.slideClass + "." + t.slideDuplicateClass).remove(), i.removeAttr("data-swiper-slide-index");
    } };var h = { setGrabCursor: function setGrabCursor(e) {
      if (!(F.touch || !this.params.simulateTouch || this.params.watchOverflow && this.isLocked)) {
        var t = this.el;t.style.cursor = "move", t.style.cursor = e ? "-webkit-grabbing" : "-webkit-grab", t.style.cursor = e ? "-moz-grabbin" : "-moz-grab", t.style.cursor = e ? "grabbing" : "grab";
      }
    }, unsetGrabCursor: function unsetGrabCursor() {
      F.touch || this.params.watchOverflow && this.isLocked || (this.el.style.cursor = "");
    } };var v = { appendSlide: function appendSlide(e) {
      var t = this,
          i = t.$wrapperEl,
          s = t.params;if (s.loop && t.loopDestroy(), "object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) && "length" in e) for (var a = 0; a < e.length; a += 1) {
        e[a] && i.append(e[a]);
      } else i.append(e);s.loop && t.loopCreate(), s.observer && F.observer || t.update();
    }, prependSlide: function prependSlide(e) {
      var t = this,
          i = t.params,
          s = t.$wrapperEl,
          a = t.activeIndex;i.loop && t.loopDestroy();var r = a + 1;if ("object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) && "length" in e) {
        for (var n = 0; n < e.length; n += 1) {
          e[n] && s.prepend(e[n]);
        }r = a + e.length;
      } else s.prepend(e);i.loop && t.loopCreate(), i.observer && F.observer || t.update(), t.slideTo(r, 0, !1);
    }, addSlide: function addSlide(e, t) {
      var i = this,
          s = i.$wrapperEl,
          a = i.params,
          r = i.activeIndex;a.loop && (r -= i.loopedSlides, i.loopDestroy(), i.slides = s.children("." + a.slideClass));var n = i.slides.length;if (e <= 0) i.prependSlide(t);else if (n <= e) i.appendSlide(t);else {
        for (var o = e < r ? r + 1 : r, l = [], d = n - 1; e <= d; d -= 1) {
          var p = i.slides.eq(d);p.remove(), l.unshift(p);
        }if ("object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) && "length" in t) {
          for (var c = 0; c < t.length; c += 1) {
            t[c] && s.append(t[c]);
          }o = e < r ? r + t.length : r;
        } else s.append(t);for (var u = 0; u < l.length; u += 1) {
          s.append(l[u]);
        }a.loop && i.loopCreate(), a.observer && F.observer || i.update(), a.loop ? i.slideTo(o + i.loopedSlides, 0, !1) : i.slideTo(o, 0, !1);
      }
    }, removeSlide: function removeSlide(e) {
      var t = this,
          i = t.params,
          s = t.$wrapperEl,
          a = t.activeIndex;i.loop && (a -= t.loopedSlides, t.loopDestroy(), t.slides = s.children("." + i.slideClass));var r,
          n = a;if ("object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) && "length" in e) {
        for (var o = 0; o < e.length; o += 1) {
          r = e[o], t.slides[r] && t.slides.eq(r).remove(), r < n && (n -= 1);
        }n = Math.max(n, 0);
      } else r = e, t.slides[r] && t.slides.eq(r).remove(), r < n && (n -= 1), n = Math.max(n, 0);i.loop && t.loopCreate(), i.observer && F.observer || t.update(), i.loop ? t.slideTo(n + t.loopedSlides, 0, !1) : t.slideTo(n, 0, !1);
    }, removeAllSlides: function removeAllSlides() {
      for (var e = [], t = 0; t < this.slides.length; t += 1) {
        e.push(t);
      }this.removeSlide(e);
    } },
      m = function () {
    var e = H.navigator.userAgent,
        t = { ios: !1, android: !1, androidChrome: !1, desktop: !1, windows: !1, iphone: !1, ipod: !1, ipad: !1, cordova: H.cordova || H.phonegap, phonegap: H.cordova || H.phonegap },
        i = e.match(/(Windows Phone);?[\s\/]+([\d.]+)?/),
        s = e.match(/(Android);?[\s\/]+([\d.]+)?/),
        a = e.match(/(iPad).*OS\s([\d_]+)/),
        r = e.match(/(iPod)(.*OS\s([\d_]+))?/),
        n = !a && e.match(/(iPhone\sOS|iOS)\s([\d_]+)/);if (i && (t.os = "windows", t.osVersion = i[2], t.windows = !0), s && !i && (t.os = "android", t.osVersion = s[2], t.android = !0, t.androidChrome = 0 <= e.toLowerCase().indexOf("chrome")), (a || n || r) && (t.os = "ios", t.ios = !0), n && !r && (t.osVersion = n[2].replace(/_/g, "."), t.iphone = !0), a && (t.osVersion = a[2].replace(/_/g, "."), t.ipad = !0), r && (t.osVersion = r[3] ? r[3].replace(/_/g, ".") : null, t.iphone = !0), t.ios && t.osVersion && 0 <= e.indexOf("Version/") && "10" === t.osVersion.split(".")[0] && (t.osVersion = e.toLowerCase().split("version/")[1].split(" ")[0]), t.desktop = !(t.os || t.android || t.webView), t.webView = (n || a || r) && e.match(/.*AppleWebKit(?!.*Safari)/i), t.os && "ios" === t.os) {
      var o = t.osVersion.split("."),
          l = f.querySelector('meta[name="viewport"]');t.minimalUi = !t.webView && (r || n) && (1 * o[0] == 7 ? 1 <= 1 * o[1] : 7 < 1 * o[0]) && l && 0 <= l.getAttribute("content").indexOf("minimal-ui");
    }return t.pixelRatio = H.devicePixelRatio || 1, t;
  }();function g() {
    var e = this,
        t = e.params,
        i = e.el;if (!i || 0 !== i.offsetWidth) {
      t.breakpoints && e.setBreakpoint();var s = e.allowSlideNext,
          a = e.allowSlidePrev,
          r = e.snapGrid;if (e.allowSlideNext = !0, e.allowSlidePrev = !0, e.updateSize(), e.updateSlides(), t.freeMode) {
        var n = Math.min(Math.max(e.translate, e.maxTranslate()), e.minTranslate());e.setTranslate(n), e.updateActiveIndex(), e.updateSlidesClasses(), t.autoHeight && e.updateAutoHeight();
      } else e.updateSlidesClasses(), ("auto" === t.slidesPerView || 1 < t.slidesPerView) && e.isEnd && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0);e.allowSlidePrev = a, e.allowSlideNext = s, e.params.watchOverflow && r !== e.snapGrid && e.checkOverflow();
    }
  }var b = { attachEvents: function attachEvents() {
      var e = this,
          t = e.params,
          i = e.touchEvents,
          s = e.el,
          a = e.wrapperEl;e.onTouchStart = function (e) {
        var t = this,
            i = t.touchEventsData,
            s = t.params,
            a = t.touches;if (!t.animating || !s.preventInteractionOnTransition) {
          var r = e;if (r.originalEvent && (r = r.originalEvent), i.isTouchEvent = "touchstart" === r.type, (i.isTouchEvent || !("which" in r) || 3 !== r.which) && (!i.isTouched || !i.isMoved)) if (s.noSwiping && y(r.target).closest(s.noSwipingSelector ? s.noSwipingSelector : "." + s.noSwipingClass)[0]) t.allowClick = !0;else if (!s.swipeHandler || y(r).closest(s.swipeHandler)[0]) {
            a.currentX = "touchstart" === r.type ? r.targetTouches[0].pageX : r.pageX, a.currentY = "touchstart" === r.type ? r.targetTouches[0].pageY : r.pageY;var n = a.currentX,
                o = a.currentY,
                l = s.edgeSwipeDetection || s.iOSEdgeSwipeDetection,
                d = s.edgeSwipeThreshold || s.iOSEdgeSwipeThreshold;if (!l || !(n <= d || n >= H.screen.width - d)) {
              if (N.extend(i, { isTouched: !0, isMoved: !1, allowTouchCallbacks: !0, isScrolling: void 0, startMoving: void 0 }), a.startX = n, a.startY = o, i.touchStartTime = N.now(), t.allowClick = !0, t.updateSize(), t.swipeDirection = void 0, 0 < s.threshold && (i.allowThresholdMove = !1), "touchstart" !== r.type) {
                var p = !0;y(r.target).is(i.formElements) && (p = !1), f.activeElement && y(f.activeElement).is(i.formElements) && f.activeElement !== r.target && f.activeElement.blur(), p && t.allowTouchMove && r.preventDefault();
              }t.emit("touchStart", r);
            }
          }
        }
      }.bind(e), e.onTouchMove = function (e) {
        var t = this,
            i = t.touchEventsData,
            s = t.params,
            a = t.touches,
            r = t.rtlTranslate,
            n = e;if (n.originalEvent && (n = n.originalEvent), i.isTouched) {
          if (!i.isTouchEvent || "mousemove" !== n.type) {
            var o = "touchmove" === n.type ? n.targetTouches[0].pageX : n.pageX,
                l = "touchmove" === n.type ? n.targetTouches[0].pageY : n.pageY;if (n.preventedByNestedSwiper) return a.startX = o, void (a.startY = l);if (!t.allowTouchMove) return t.allowClick = !1, void (i.isTouched && (N.extend(a, { startX: o, startY: l, currentX: o, currentY: l }), i.touchStartTime = N.now()));if (i.isTouchEvent && s.touchReleaseOnEdges && !s.loop) if (t.isVertical()) {
              if (l < a.startY && t.translate <= t.maxTranslate() || l > a.startY && t.translate >= t.minTranslate()) return i.isTouched = !1, void (i.isMoved = !1);
            } else if (o < a.startX && t.translate <= t.maxTranslate() || o > a.startX && t.translate >= t.minTranslate()) return;if (i.isTouchEvent && f.activeElement && n.target === f.activeElement && y(n.target).is(i.formElements)) return i.isMoved = !0, void (t.allowClick = !1);if (i.allowTouchCallbacks && t.emit("touchMove", n), !(n.targetTouches && 1 < n.targetTouches.length)) {
              a.currentX = o, a.currentY = l;var d,
                  p = a.currentX - a.startX,
                  c = a.currentY - a.startY;if (!(t.params.threshold && Math.sqrt(Math.pow(p, 2) + Math.pow(c, 2)) < t.params.threshold)) if (void 0 === i.isScrolling && (t.isHorizontal() && a.currentY === a.startY || t.isVertical() && a.currentX === a.startX ? i.isScrolling = !1 : 25 <= p * p + c * c && (d = 180 * Math.atan2(Math.abs(c), Math.abs(p)) / Math.PI, i.isScrolling = t.isHorizontal() ? d > s.touchAngle : 90 - d > s.touchAngle)), i.isScrolling && t.emit("touchMoveOpposite", n), void 0 === i.startMoving && (a.currentX === a.startX && a.currentY === a.startY || (i.startMoving = !0)), i.isScrolling) i.isTouched = !1;else if (i.startMoving) {
                t.allowClick = !1, n.preventDefault(), s.touchMoveStopPropagation && !s.nested && n.stopPropagation(), i.isMoved || (s.loop && t.loopFix(), i.startTranslate = t.getTranslate(), t.setTransition(0), t.animating && t.$wrapperEl.trigger("webkitTransitionEnd transitionend"), i.allowMomentumBounce = !1, !s.grabCursor || !0 !== t.allowSlideNext && !0 !== t.allowSlidePrev || t.setGrabCursor(!0), t.emit("sliderFirstMove", n)), t.emit("sliderMove", n), i.isMoved = !0;var u = t.isHorizontal() ? p : c;a.diff = u, u *= s.touchRatio, r && (u = -u), t.swipeDirection = 0 < u ? "prev" : "next", i.currentTranslate = u + i.startTranslate;var h = !0,
                    v = s.resistanceRatio;if (s.touchReleaseOnEdges && (v = 0), 0 < u && i.currentTranslate > t.minTranslate() ? (h = !1, s.resistance && (i.currentTranslate = t.minTranslate() - 1 + Math.pow(-t.minTranslate() + i.startTranslate + u, v))) : u < 0 && i.currentTranslate < t.maxTranslate() && (h = !1, s.resistance && (i.currentTranslate = t.maxTranslate() + 1 - Math.pow(t.maxTranslate() - i.startTranslate - u, v))), h && (n.preventedByNestedSwiper = !0), !t.allowSlideNext && "next" === t.swipeDirection && i.currentTranslate < i.startTranslate && (i.currentTranslate = i.startTranslate), !t.allowSlidePrev && "prev" === t.swipeDirection && i.currentTranslate > i.startTranslate && (i.currentTranslate = i.startTranslate), 0 < s.threshold) {
                  if (!(Math.abs(u) > s.threshold || i.allowThresholdMove)) return void (i.currentTranslate = i.startTranslate);if (!i.allowThresholdMove) return i.allowThresholdMove = !0, a.startX = a.currentX, a.startY = a.currentY, i.currentTranslate = i.startTranslate, void (a.diff = t.isHorizontal() ? a.currentX - a.startX : a.currentY - a.startY);
                }s.followFinger && ((s.freeMode || s.watchSlidesProgress || s.watchSlidesVisibility) && (t.updateActiveIndex(), t.updateSlidesClasses()), s.freeMode && (0 === i.velocities.length && i.velocities.push({ position: a[t.isHorizontal() ? "startX" : "startY"], time: i.touchStartTime }), i.velocities.push({ position: a[t.isHorizontal() ? "currentX" : "currentY"], time: N.now() })), t.updateProgress(i.currentTranslate), t.setTranslate(i.currentTranslate));
              }
            }
          }
        } else i.startMoving && i.isScrolling && t.emit("touchMoveOpposite", n);
      }.bind(e), e.onTouchEnd = function (e) {
        var t = this,
            i = t.touchEventsData,
            s = t.params,
            a = t.touches,
            r = t.rtlTranslate,
            n = t.$wrapperEl,
            o = t.slidesGrid,
            l = t.snapGrid,
            d = e;if (d.originalEvent && (d = d.originalEvent), i.allowTouchCallbacks && t.emit("touchEnd", d), i.allowTouchCallbacks = !1, !i.isTouched) return i.isMoved && s.grabCursor && t.setGrabCursor(!1), i.isMoved = !1, void (i.startMoving = !1);s.grabCursor && i.isMoved && i.isTouched && (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) && t.setGrabCursor(!1);var p,
            c = N.now(),
            u = c - i.touchStartTime;if (t.allowClick && (t.updateClickedSlide(d), t.emit("tap", d), u < 300 && 300 < c - i.lastClickTime && (i.clickTimeout && clearTimeout(i.clickTimeout), i.clickTimeout = N.nextTick(function () {
          t && !t.destroyed && t.emit("click", d);
        }, 300)), u < 300 && c - i.lastClickTime < 300 && (i.clickTimeout && clearTimeout(i.clickTimeout), t.emit("doubleTap", d))), i.lastClickTime = N.now(), N.nextTick(function () {
          t.destroyed || (t.allowClick = !0);
        }), !i.isTouched || !i.isMoved || !t.swipeDirection || 0 === a.diff || i.currentTranslate === i.startTranslate) return i.isTouched = !1, i.isMoved = !1, void (i.startMoving = !1);if (i.isTouched = !1, i.isMoved = !1, i.startMoving = !1, p = s.followFinger ? r ? t.translate : -t.translate : -i.currentTranslate, s.freeMode) {
          if (p < -t.minTranslate()) return void t.slideTo(t.activeIndex);if (p > -t.maxTranslate()) return void (t.slides.length < l.length ? t.slideTo(l.length - 1) : t.slideTo(t.slides.length - 1));if (s.freeModeMomentum) {
            if (1 < i.velocities.length) {
              var h = i.velocities.pop(),
                  v = i.velocities.pop(),
                  f = h.position - v.position,
                  m = h.time - v.time;t.velocity = f / m, t.velocity /= 2, Math.abs(t.velocity) < s.freeModeMinimumVelocity && (t.velocity = 0), (150 < m || 300 < N.now() - h.time) && (t.velocity = 0);
            } else t.velocity = 0;t.velocity *= s.freeModeMomentumVelocityRatio, i.velocities.length = 0;var g = 1e3 * s.freeModeMomentumRatio,
                b = t.velocity * g,
                T = t.translate + b;r && (T = -T);var w,
                y,
                x = !1,
                C = 20 * Math.abs(t.velocity) * s.freeModeMomentumBounceRatio;if (T < t.maxTranslate()) s.freeModeMomentumBounce ? (T + t.maxTranslate() < -C && (T = t.maxTranslate() - C), w = t.maxTranslate(), x = !0, i.allowMomentumBounce = !0) : T = t.maxTranslate(), s.loop && s.centeredSlides && (y = !0);else if (T > t.minTranslate()) s.freeModeMomentumBounce ? (T - t.minTranslate() > C && (T = t.minTranslate() + C), w = t.minTranslate(), x = !0, i.allowMomentumBounce = !0) : T = t.minTranslate(), s.loop && s.centeredSlides && (y = !0);else if (s.freeModeSticky) {
              for (var S, E = 0; E < l.length; E += 1) {
                if (l[E] > -T) {
                  S = E;break;
                }
              }T = -(T = Math.abs(l[S] - T) < Math.abs(l[S - 1] - T) || "next" === t.swipeDirection ? l[S] : l[S - 1]);
            }if (y && t.once("transitionEnd", function () {
              t.loopFix();
            }), 0 !== t.velocity) g = r ? Math.abs((-T - t.translate) / t.velocity) : Math.abs((T - t.translate) / t.velocity);else if (s.freeModeSticky) return void t.slideToClosest();s.freeModeMomentumBounce && x ? (t.updateProgress(w), t.setTransition(g), t.setTranslate(T), t.transitionStart(!0, t.swipeDirection), t.animating = !0, n.transitionEnd(function () {
              t && !t.destroyed && i.allowMomentumBounce && (t.emit("momentumBounce"), t.setTransition(s.speed), t.setTranslate(w), n.transitionEnd(function () {
                t && !t.destroyed && t.transitionEnd();
              }));
            })) : t.velocity ? (t.updateProgress(T), t.setTransition(g), t.setTranslate(T), t.transitionStart(!0, t.swipeDirection), t.animating || (t.animating = !0, n.transitionEnd(function () {
              t && !t.destroyed && t.transitionEnd();
            }))) : t.updateProgress(T), t.updateActiveIndex(), t.updateSlidesClasses();
          } else if (s.freeModeSticky) return void t.slideToClosest();(!s.freeModeMomentum || u >= s.longSwipesMs) && (t.updateProgress(), t.updateActiveIndex(), t.updateSlidesClasses());
        } else {
          for (var M = 0, k = t.slidesSizesGrid[0], L = 0; L < o.length; L += s.slidesPerGroup) {
            void 0 !== o[L + s.slidesPerGroup] ? p >= o[L] && p < o[L + s.slidesPerGroup] && (k = o[(M = L) + s.slidesPerGroup] - o[L]) : p >= o[L] && (M = L, k = o[o.length - 1] - o[o.length - 2]);
          }var P = (p - o[M]) / k;if (u > s.longSwipesMs) {
            if (!s.longSwipes) return void t.slideTo(t.activeIndex);"next" === t.swipeDirection && (P >= s.longSwipesRatio ? t.slideTo(M + s.slidesPerGroup) : t.slideTo(M)), "prev" === t.swipeDirection && (P > 1 - s.longSwipesRatio ? t.slideTo(M + s.slidesPerGroup) : t.slideTo(M));
          } else {
            if (!s.shortSwipes) return void t.slideTo(t.activeIndex);"next" === t.swipeDirection && t.slideTo(M + s.slidesPerGroup), "prev" === t.swipeDirection && t.slideTo(M);
          }
        }
      }.bind(e), e.onClick = function (e) {
        this.allowClick || (this.params.preventClicks && e.preventDefault(), this.params.preventClicksPropagation && this.animating && (e.stopPropagation(), e.stopImmediatePropagation()));
      }.bind(e);var r = "container" === t.touchEventsTarget ? s : a,
          n = !!t.nested;if (F.touch || !F.pointerEvents && !F.prefixedPointerEvents) {
        if (F.touch) {
          var o = !("touchstart" !== i.start || !F.passiveListener || !t.passiveListeners) && { passive: !0, capture: !1 };r.addEventListener(i.start, e.onTouchStart, o), r.addEventListener(i.move, e.onTouchMove, F.passiveListener ? { passive: !1, capture: n } : n), r.addEventListener(i.end, e.onTouchEnd, o);
        }(t.simulateTouch && !m.ios && !m.android || t.simulateTouch && !F.touch && m.ios) && (r.addEventListener("mousedown", e.onTouchStart, !1), f.addEventListener("mousemove", e.onTouchMove, n), f.addEventListener("mouseup", e.onTouchEnd, !1));
      } else r.addEventListener(i.start, e.onTouchStart, !1), f.addEventListener(i.move, e.onTouchMove, n), f.addEventListener(i.end, e.onTouchEnd, !1);(t.preventClicks || t.preventClicksPropagation) && r.addEventListener("click", e.onClick, !0), e.on(m.ios || m.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", g, !0);
    }, detachEvents: function detachEvents() {
      var e = this,
          t = e.params,
          i = e.touchEvents,
          s = e.el,
          a = e.wrapperEl,
          r = "container" === t.touchEventsTarget ? s : a,
          n = !!t.nested;if (F.touch || !F.pointerEvents && !F.prefixedPointerEvents) {
        if (F.touch) {
          var o = !("onTouchStart" !== i.start || !F.passiveListener || !t.passiveListeners) && { passive: !0, capture: !1 };r.removeEventListener(i.start, e.onTouchStart, o), r.removeEventListener(i.move, e.onTouchMove, n), r.removeEventListener(i.end, e.onTouchEnd, o);
        }(t.simulateTouch && !m.ios && !m.android || t.simulateTouch && !F.touch && m.ios) && (r.removeEventListener("mousedown", e.onTouchStart, !1), f.removeEventListener("mousemove", e.onTouchMove, n), f.removeEventListener("mouseup", e.onTouchEnd, !1));
      } else r.removeEventListener(i.start, e.onTouchStart, !1), f.removeEventListener(i.move, e.onTouchMove, n), f.removeEventListener(i.end, e.onTouchEnd, !1);(t.preventClicks || t.preventClicksPropagation) && r.removeEventListener("click", e.onClick, !0), e.off(m.ios || m.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", g);
    } };var T,
      w = { setBreakpoint: function setBreakpoint() {
      var e = this,
          t = e.activeIndex,
          i = e.initialized,
          s = e.loopedSlides;void 0 === s && (s = 0);var a = e.params,
          r = a.breakpoints;if (r && (!r || 0 !== Object.keys(r).length)) {
        var n = e.getBreakpoint(r);if (n && e.currentBreakpoint !== n) {
          var o = n in r ? r[n] : e.originalParams,
              l = a.loop && o.slidesPerView !== a.slidesPerView;N.extend(e.params, o), N.extend(e, { allowTouchMove: e.params.allowTouchMove, allowSlideNext: e.params.allowSlideNext, allowSlidePrev: e.params.allowSlidePrev }), e.currentBreakpoint = n, l && i && (e.loopDestroy(), e.loopCreate(), e.updateSlides(), e.slideTo(t - s + e.loopedSlides, 0, !1)), e.emit("breakpoint", o);
        }
      }
    }, getBreakpoint: function getBreakpoint(e) {
      if (e) {
        var t = !1,
            i = [];Object.keys(e).forEach(function (e) {
          i.push(e);
        }), i.sort(function (e, t) {
          return parseInt(e, 10) - parseInt(t, 10);
        });for (var s = 0; s < i.length; s += 1) {
          var a = i[s];a >= H.innerWidth && !t && (t = a);
        }return t || "max";
      }
    } },
      x = { isIE: !!H.navigator.userAgent.match(/Trident/g) || !!H.navigator.userAgent.match(/MSIE/g), isEdge: !!H.navigator.userAgent.match(/Edge/g), isSafari: (T = H.navigator.userAgent.toLowerCase(), 0 <= T.indexOf("safari") && T.indexOf("chrome") < 0 && T.indexOf("android") < 0), isUiWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(H.navigator.userAgent) };var C = { init: !0, direction: "horizontal", touchEventsTarget: "container", initialSlide: 0, speed: 300, preventInteractionOnTransition: !1, edgeSwipeDetection: !1, edgeSwipeThreshold: 20, freeMode: !1, freeModeMomentum: !0, freeModeMomentumRatio: 1, freeModeMomentumBounce: !0, freeModeMomentumBounceRatio: 1, freeModeMomentumVelocityRatio: 1, freeModeSticky: !1, freeModeMinimumVelocity: .02, autoHeight: !1, setWrapperSize: !1, virtualTranslate: !1, effect: "slide", breakpoints: void 0, spaceBetween: 0, slidesPerView: 1, slidesPerColumn: 1, slidesPerColumnFill: "column", slidesPerGroup: 1, centeredSlides: !1, slidesOffsetBefore: 0, slidesOffsetAfter: 0, normalizeSlideIndex: !0, watchOverflow: !1, roundLengths: !1, touchRatio: 1, touchAngle: 45, simulateTouch: !0, shortSwipes: !0, longSwipes: !0, longSwipesRatio: .5, longSwipesMs: 300, followFinger: !0, allowTouchMove: !0, threshold: 0, touchMoveStopPropagation: !0, touchReleaseOnEdges: !1, uniqueNavElements: !0, resistance: !0, resistanceRatio: .85, watchSlidesProgress: !1, watchSlidesVisibility: !1, grabCursor: !1, preventClicks: !0, preventClicksPropagation: !0, slideToClickedSlide: !1, preloadImages: !0, updateOnImagesReady: !0, loop: !1, loopAdditionalSlides: 0, loopedSlides: null, loopFillGroupWithBlank: !1, allowSlidePrev: !0, allowSlideNext: !0, swipeHandler: null, noSwiping: !0, noSwipingClass: "swiper-no-swiping", noSwipingSelector: null, passiveListeners: !0, containerModifierClass: "swiper-container-", slideClass: "swiper-slide", slideBlankClass: "swiper-slide-invisible-blank", slideActiveClass: "swiper-slide-active", slideDuplicateActiveClass: "swiper-slide-duplicate-active", slideVisibleClass: "swiper-slide-visible", slideDuplicateClass: "swiper-slide-duplicate", slideNextClass: "swiper-slide-next", slideDuplicateNextClass: "swiper-slide-duplicate-next", slidePrevClass: "swiper-slide-prev", slideDuplicatePrevClass: "swiper-slide-duplicate-prev", wrapperClass: "swiper-wrapper", runCallbacksOnInit: !0 },
      S = { update: o, translate: d, transition: p, slide: c, loop: u, grabCursor: h, manipulation: v, events: b, breakpoints: w, checkOverflow: { checkOverflow: function checkOverflow() {
        var e = this,
            t = e.isLocked;e.isLocked = 1 === e.snapGrid.length, e.allowSlideNext = !e.isLocked, e.allowSlidePrev = !e.isLocked, t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock"), t && t !== e.isLocked && (e.isEnd = !1, e.navigation.update());
      } }, classes: { addClasses: function addClasses() {
        var t = this.classNames,
            i = this.params,
            e = this.rtl,
            s = this.$el,
            a = [];a.push(i.direction), i.freeMode && a.push("free-mode"), F.flexbox || a.push("no-flexbox"), i.autoHeight && a.push("autoheight"), e && a.push("rtl"), 1 < i.slidesPerColumn && a.push("multirow"), m.android && a.push("android"), m.ios && a.push("ios"), (x.isIE || x.isEdge) && (F.pointerEvents || F.prefixedPointerEvents) && a.push("wp8-" + i.direction), a.forEach(function (e) {
          t.push(i.containerModifierClass + e);
        }), s.addClass(t.join(" "));
      }, removeClasses: function removeClasses() {
        var e = this.$el,
            t = this.classNames;e.removeClass(t.join(" "));
      } }, images: { loadImage: function loadImage(e, t, i, s, a, r) {
        var n;function o() {
          r && r();
        }e.complete && a ? o() : t ? ((n = new H.Image()).onload = o, n.onerror = o, s && (n.sizes = s), i && (n.srcset = i), t && (n.src = t)) : o();
      }, preloadImages: function preloadImages() {
        var e = this;function t() {
          null != e && e && !e.destroyed && (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1), e.imagesLoaded === e.imagesToLoad.length && (e.params.updateOnImagesReady && e.update(), e.emit("imagesReady")));
        }e.imagesToLoad = e.$el.find("img");for (var i = 0; i < e.imagesToLoad.length; i += 1) {
          var s = e.imagesToLoad[i];e.loadImage(s, s.currentSrc || s.getAttribute("src"), s.srcset || s.getAttribute("srcset"), s.sizes || s.getAttribute("sizes"), !0, t);
        }
      } } },
      E = {},
      M = function (u) {
    function h() {
      for (var e, t, a, i = [], s = arguments.length; s--;) {
        i[s] = arguments[s];
      }1 === i.length && i[0].constructor && i[0].constructor === Object ? a = i[0] : (t = (e = i)[0], a = e[1]), a || (a = {}), a = N.extend({}, a), t && !a.el && (a.el = t), u.call(this, a), Object.keys(S).forEach(function (t) {
        Object.keys(S[t]).forEach(function (e) {
          h.prototype[e] || (h.prototype[e] = S[t][e]);
        });
      });var r = this;void 0 === r.modules && (r.modules = {}), Object.keys(r.modules).forEach(function (e) {
        var t = r.modules[e];if (t.params) {
          var i = Object.keys(t.params)[0],
              s = t.params[i];if ("object" != (typeof s === "undefined" ? "undefined" : _typeof(s))) return;if (!(i in a && "enabled" in s)) return;!0 === a[i] && (a[i] = { enabled: !0 }), "object" != _typeof(a[i]) || "enabled" in a[i] || (a[i].enabled = !0), a[i] || (a[i] = { enabled: !1 });
        }
      });var n = N.extend({}, C);r.useModulesParams(n), r.params = N.extend({}, n, E, a), r.originalParams = N.extend({}, r.params), r.passedParams = N.extend({}, a);var o = (r.$ = y)(r.params.el);if (t = o[0]) {
        if (1 < o.length) {
          var l = [];return o.each(function (e, t) {
            var i = N.extend({}, a, { el: t });l.push(new h(i));
          }), l;
        }t.swiper = r, o.data("swiper", r);var d,
            p,
            c = o.children("." + r.params.wrapperClass);return N.extend(r, { $el: o, el: t, $wrapperEl: c, wrapperEl: c[0], classNames: [], slides: y(), slidesGrid: [], snapGrid: [], slidesSizesGrid: [], isHorizontal: function isHorizontal() {
            return "horizontal" === r.params.direction;
          }, isVertical: function isVertical() {
            return "vertical" === r.params.direction;
          }, rtl: "rtl" === t.dir.toLowerCase() || "rtl" === o.css("direction"), rtlTranslate: "horizontal" === r.params.direction && ("rtl" === t.dir.toLowerCase() || "rtl" === o.css("direction")), wrongRTL: "-webkit-box" === c.css("display"), activeIndex: 0, realIndex: 0, isBeginning: !0, isEnd: !1, translate: 0, previousTranslate: 0, progress: 0, velocity: 0, animating: !1, allowSlideNext: r.params.allowSlideNext, allowSlidePrev: r.params.allowSlidePrev, touchEvents: (d = ["touchstart", "touchmove", "touchend"], p = ["mousedown", "mousemove", "mouseup"], F.pointerEvents ? p = ["pointerdown", "pointermove", "pointerup"] : F.prefixedPointerEvents && (p = ["MSPointerDown", "MSPointerMove", "MSPointerUp"]), r.touchEventsTouch = { start: d[0], move: d[1], end: d[2] }, r.touchEventsDesktop = { start: p[0], move: p[1], end: p[2] }, F.touch || !r.params.simulateTouch ? r.touchEventsTouch : r.touchEventsDesktop), touchEventsData: { isTouched: void 0, isMoved: void 0, allowTouchCallbacks: void 0, touchStartTime: void 0, isScrolling: void 0, currentTranslate: void 0, startTranslate: void 0, allowThresholdMove: void 0, formElements: "input, select, option, textarea, button, video", lastClickTime: N.now(), clickTimeout: void 0, velocities: [], allowMomentumBounce: void 0, isTouchEvent: void 0, startMoving: void 0 }, allowClick: !0, allowTouchMove: r.params.allowTouchMove, touches: { startX: 0, startY: 0, currentX: 0, currentY: 0, diff: 0 }, imagesToLoad: [], imagesLoaded: 0 }), r.useModules(), r.params.init && r.init(), r;
      }
    }u && (h.__proto__ = u);var e = { extendedDefaults: { configurable: !0 }, defaults: { configurable: !0 }, Class: { configurable: !0 }, $: { configurable: !0 } };return ((h.prototype = Object.create(u && u.prototype)).constructor = h).prototype.slidesPerViewDynamic = function () {
      var e = this,
          t = e.params,
          i = e.slides,
          s = e.slidesGrid,
          a = e.size,
          r = e.activeIndex,
          n = 1;if (t.centeredSlides) {
        for (var o, l = i[r].swiperSlideSize, d = r + 1; d < i.length; d += 1) {
          i[d] && !o && (n += 1, a < (l += i[d].swiperSlideSize) && (o = !0));
        }for (var p = r - 1; 0 <= p; p -= 1) {
          i[p] && !o && (n += 1, a < (l += i[p].swiperSlideSize) && (o = !0));
        }
      } else for (var c = r + 1; c < i.length; c += 1) {
        s[c] - s[r] < a && (n += 1);
      }return n;
    }, h.prototype.update = function () {
      var i = this;if (i && !i.destroyed) {
        var e = i.snapGrid,
            t = i.params;t.breakpoints && i.setBreakpoint(), i.updateSize(), i.updateSlides(), i.updateProgress(), i.updateSlidesClasses(), i.params.freeMode ? (s(), i.params.autoHeight && i.updateAutoHeight()) : (("auto" === i.params.slidesPerView || 1 < i.params.slidesPerView) && i.isEnd && !i.params.centeredSlides ? i.slideTo(i.slides.length - 1, 0, !1, !0) : i.slideTo(i.activeIndex, 0, !1, !0)) || s(), t.watchOverflow && e !== i.snapGrid && i.checkOverflow(), i.emit("update");
      }function s() {
        var e = i.rtlTranslate ? -1 * i.translate : i.translate,
            t = Math.min(Math.max(e, i.maxTranslate()), i.minTranslate());i.setTranslate(t), i.updateActiveIndex(), i.updateSlidesClasses();
      }
    }, h.prototype.init = function () {
      var e = this;e.initialized || (e.emit("beforeInit"), e.params.breakpoints && e.setBreakpoint(), e.addClasses(), e.params.loop && e.loopCreate(), e.updateSize(), e.updateSlides(), e.params.watchOverflow && e.checkOverflow(), e.params.grabCursor && e.setGrabCursor(), e.params.preloadImages && e.preloadImages(), e.params.loop ? e.slideTo(e.params.initialSlide + e.loopedSlides, 0, e.params.runCallbacksOnInit) : e.slideTo(e.params.initialSlide, 0, e.params.runCallbacksOnInit), e.attachEvents(), e.initialized = !0, e.emit("init"));
    }, h.prototype.destroy = function (e, t) {
      void 0 === e && (e = !0), void 0 === t && (t = !0);var i = this,
          s = i.params,
          a = i.$el,
          r = i.$wrapperEl,
          n = i.slides;return void 0 === i.params || i.destroyed || (i.emit("beforeDestroy"), i.initialized = !1, i.detachEvents(), s.loop && i.loopDestroy(), t && (i.removeClasses(), a.removeAttr("style"), r.removeAttr("style"), n && n.length && n.removeClass([s.slideVisibleClass, s.slideActiveClass, s.slideNextClass, s.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index").removeAttr("data-swiper-column").removeAttr("data-swiper-row")), i.emit("destroy"), Object.keys(i.eventsListeners).forEach(function (e) {
        i.off(e);
      }), !1 !== e && (i.$el[0].swiper = null, i.$el.data("swiper", null), N.deleteProps(i)), i.destroyed = !0), null;
    }, h.extendDefaults = function (e) {
      N.extend(E, e);
    }, e.extendedDefaults.get = function () {
      return E;
    }, e.defaults.get = function () {
      return C;
    }, e.Class.get = function () {
      return u;
    }, e.$.get = function () {
      return y;
    }, Object.defineProperties(h, e), h;
  }(a),
      k = { name: "device", proto: { device: m }, static: { device: m } },
      L = { name: "support", proto: { support: F }, static: { support: F } },
      P = { name: "browser", proto: { browser: x }, static: { browser: x } },
      D = { name: "resize", create: function create() {
      var e = this;N.extend(e, { resize: { resizeHandler: function resizeHandler() {
            e && !e.destroyed && e.initialized && (e.emit("beforeResize"), e.emit("resize"));
          }, orientationChangeHandler: function orientationChangeHandler() {
            e && !e.destroyed && e.initialized && e.emit("orientationchange");
          } } });
    }, on: { init: function init() {
        H.addEventListener("resize", this.resize.resizeHandler), H.addEventListener("orientationchange", this.resize.orientationChangeHandler);
      }, destroy: function destroy() {
        H.removeEventListener("resize", this.resize.resizeHandler), H.removeEventListener("orientationchange", this.resize.orientationChangeHandler);
      } } },
      z = { func: H.MutationObserver || H.WebkitMutationObserver, attach: function attach(e, t) {
      void 0 === t && (t = {});var i = this,
          s = new z.func(function (e) {
        if (1 !== e.length) {
          var t = function t() {
            i.emit("observerUpdate", e[0]);
          };H.requestAnimationFrame ? H.requestAnimationFrame(t) : H.setTimeout(t, 0);
        } else i.emit("observerUpdate", e[0]);
      });s.observe(e, { attributes: void 0 === t.attributes || t.attributes, childList: void 0 === t.childList || t.childList, characterData: void 0 === t.characterData || t.characterData }), i.observer.observers.push(s);
    }, init: function init() {
      var e = this;if (F.observer && e.params.observer) {
        if (e.params.observeParents) for (var t = e.$el.parents(), i = 0; i < t.length; i += 1) {
          e.observer.attach(t[i]);
        }e.observer.attach(e.$el[0], { childList: !1 }), e.observer.attach(e.$wrapperEl[0], { attributes: !1 });
      }
    }, destroy: function destroy() {
      this.observer.observers.forEach(function (e) {
        e.disconnect();
      }), this.observer.observers = [];
    } },
      O = { update: function update() {
      var e = this,
          t = e.params.navigation;if (!e.params.loop) {
        var i = e.navigation,
            s = i.$nextEl,
            a = i.$prevEl;a && 0 < a.length && (e.isBeginning ? a.addClass(t.disabledClass) : a.removeClass(t.disabledClass), a[e.params.watchOverflow && e.isLocked ? "addClass" : "removeClass"](t.lockClass)), s && 0 < s.length && (e.isEnd ? s.addClass(t.disabledClass) : s.removeClass(t.disabledClass), s[e.params.watchOverflow && e.isLocked ? "addClass" : "removeClass"](t.lockClass));
      }
    }, init: function init() {
      var e,
          t,
          i = this,
          s = i.params.navigation;(s.nextEl || s.prevEl) && (s.nextEl && (e = y(s.nextEl), i.params.uniqueNavElements && "string" == typeof s.nextEl && 1 < e.length && 1 === i.$el.find(s.nextEl).length && (e = i.$el.find(s.nextEl))), s.prevEl && (t = y(s.prevEl), i.params.uniqueNavElements && "string" == typeof s.prevEl && 1 < t.length && 1 === i.$el.find(s.prevEl).length && (t = i.$el.find(s.prevEl))), e && 0 < e.length && e.on("click", function (e) {
        e.preventDefault(), i.isEnd && !i.params.loop || i.slideNext();
      }), t && 0 < t.length && t.on("click", function (e) {
        e.preventDefault(), i.isBeginning && !i.params.loop || i.slidePrev();
      }), N.extend(i.navigation, { $nextEl: e, nextEl: e && e[0], $prevEl: t, prevEl: t && t[0] }));
    }, destroy: function destroy() {
      var e = this.navigation,
          t = e.$nextEl,
          i = e.$prevEl;t && t.length && (t.off("click"), t.removeClass(this.params.navigation.disabledClass)), i && i.length && (i.off("click"), i.removeClass(this.params.navigation.disabledClass));
    } },
      I = { update: function update() {
      var e = this,
          t = e.rtl,
          a = e.params.pagination;if (a.el && e.pagination.el && e.pagination.$el && 0 !== e.pagination.$el.length) {
        var r,
            i = e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : e.slides.length,
            s = e.pagination.$el,
            n = e.params.loop ? Math.ceil((i - 2 * e.loopedSlides) / e.params.slidesPerGroup) : e.snapGrid.length;if (e.params.loop ? ((r = Math.ceil((e.activeIndex - e.loopedSlides) / e.params.slidesPerGroup)) > i - 1 - 2 * e.loopedSlides && (r -= i - 2 * e.loopedSlides), n - 1 < r && (r -= n), r < 0 && "bullets" !== e.params.paginationType && (r = n + r)) : r = void 0 !== e.snapIndex ? e.snapIndex : e.activeIndex || 0, "bullets" === a.type && e.pagination.bullets && 0 < e.pagination.bullets.length) {
          var o,
              l,
              d,
              p = e.pagination.bullets;if (a.dynamicBullets && (e.pagination.bulletSize = p.eq(0)[e.isHorizontal() ? "outerWidth" : "outerHeight"](!0), s.css(e.isHorizontal() ? "width" : "height", e.pagination.bulletSize * (a.dynamicMainBullets + 4) + "px"), 1 < a.dynamicMainBullets && void 0 !== e.previousIndex && (e.pagination.dynamicBulletIndex += r - e.previousIndex, e.pagination.dynamicBulletIndex > a.dynamicMainBullets - 1 ? e.pagination.dynamicBulletIndex = a.dynamicMainBullets - 1 : e.pagination.dynamicBulletIndex < 0 && (e.pagination.dynamicBulletIndex = 0)), o = r - e.pagination.dynamicBulletIndex, d = ((l = o + (Math.min(p.length, a.dynamicMainBullets) - 1)) + o) / 2), p.removeClass(a.bulletActiveClass + " " + a.bulletActiveClass + "-next " + a.bulletActiveClass + "-next-next " + a.bulletActiveClass + "-prev " + a.bulletActiveClass + "-prev-prev " + a.bulletActiveClass + "-main"), 1 < s.length) p.each(function (e, t) {
            var i = y(t),
                s = i.index();s === r && i.addClass(a.bulletActiveClass), a.dynamicBullets && (o <= s && s <= l && i.addClass(a.bulletActiveClass + "-main"), s === o && i.prev().addClass(a.bulletActiveClass + "-prev").prev().addClass(a.bulletActiveClass + "-prev-prev"), s === l && i.next().addClass(a.bulletActiveClass + "-next").next().addClass(a.bulletActiveClass + "-next-next"));
          });else if (p.eq(r).addClass(a.bulletActiveClass), a.dynamicBullets) {
            for (var c = p.eq(o), u = p.eq(l), h = o; h <= l; h += 1) {
              p.eq(h).addClass(a.bulletActiveClass + "-main");
            }c.prev().addClass(a.bulletActiveClass + "-prev").prev().addClass(a.bulletActiveClass + "-prev-prev"), u.next().addClass(a.bulletActiveClass + "-next").next().addClass(a.bulletActiveClass + "-next-next");
          }if (a.dynamicBullets) {
            var v = Math.min(p.length, a.dynamicMainBullets + 4),
                f = (e.pagination.bulletSize * v - e.pagination.bulletSize) / 2 - d * e.pagination.bulletSize,
                m = t ? "right" : "left";p.css(e.isHorizontal() ? m : "top", f + "px");
          }
        }if ("fraction" === a.type && (s.find("." + a.currentClass).text(a.formatFractionCurrent(r + 1)), s.find("." + a.totalClass).text(a.formatFractionTotal(n))), "progressbar" === a.type) {
          var g;g = a.progressbarOpposite ? e.isHorizontal() ? "vertical" : "horizontal" : e.isHorizontal() ? "horizontal" : "vertical";var b = (r + 1) / n,
              T = 1,
              w = 1;"horizontal" === g ? T = b : w = b, s.find("." + a.progressbarFillClass).transform("translate3d(0,0,0) scaleX(" + T + ") scaleY(" + w + ")").transition(e.params.speed);
        }"custom" === a.type && a.renderCustom ? (s.html(a.renderCustom(e, r + 1, n)), e.emit("paginationRender", e, s[0])) : e.emit("paginationUpdate", e, s[0]), s[e.params.watchOverflow && e.isLocked ? "addClass" : "removeClass"](a.lockClass);
      }
    }, render: function render() {
      var e = this,
          t = e.params.pagination;if (t.el && e.pagination.el && e.pagination.$el && 0 !== e.pagination.$el.length) {
        var i = e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : e.slides.length,
            s = e.pagination.$el,
            a = "";if ("bullets" === t.type) {
          for (var r = e.params.loop ? Math.ceil((i - 2 * e.loopedSlides) / e.params.slidesPerGroup) : e.snapGrid.length, n = 0; n < r; n += 1) {
            t.renderBullet ? a += t.renderBullet.call(e, n, t.bulletClass) : a += "<" + t.bulletElement + ' class="' + t.bulletClass + '"></' + t.bulletElement + ">";
          }s.html(a), e.pagination.bullets = s.find("." + t.bulletClass);
        }"fraction" === t.type && (a = t.renderFraction ? t.renderFraction.call(e, t.currentClass, t.totalClass) : '<span class="' + t.currentClass + '"></span> / <span class="' + t.totalClass + '"></span>', s.html(a)), "progressbar" === t.type && (a = t.renderProgressbar ? t.renderProgressbar.call(e, t.progressbarFillClass) : '<span class="' + t.progressbarFillClass + '"></span>', s.html(a)), "custom" !== t.type && e.emit("paginationRender", e.pagination.$el[0]);
      }
    }, init: function init() {
      var i = this,
          e = i.params.pagination;if (e.el) {
        var t = y(e.el);0 !== t.length && (i.params.uniqueNavElements && "string" == typeof e.el && 1 < t.length && 1 === i.$el.find(e.el).length && (t = i.$el.find(e.el)), "bullets" === e.type && e.clickable && t.addClass(e.clickableClass), t.addClass(e.modifierClass + e.type), "bullets" === e.type && e.dynamicBullets && (t.addClass("" + e.modifierClass + e.type + "-dynamic"), i.pagination.dynamicBulletIndex = 0, e.dynamicMainBullets < 1 && (e.dynamicMainBullets = 1)), "progressbar" === e.type && e.progressbarOpposite && t.addClass(e.progressbarOppositeClass), e.clickable && t.on("click", "." + e.bulletClass, function (e) {
          e.preventDefault();var t = y(this).index() * i.params.slidesPerGroup;i.params.loop && (t += i.loopedSlides), i.slideTo(t);
        }), N.extend(i.pagination, { $el: t, el: t[0] }));
      }
    }, destroy: function destroy() {
      var e = this,
          t = e.params.pagination;if (t.el && e.pagination.el && e.pagination.$el && 0 !== e.pagination.$el.length) {
        var i = e.pagination.$el;i.removeClass(t.hiddenClass), i.removeClass(t.modifierClass + t.type), e.pagination.bullets && e.pagination.bullets.removeClass(t.bulletActiveClass), t.clickable && i.off("click", "." + t.bulletClass);
      }
    } },
      A = { setTranslate: function setTranslate() {
      var e = this;if (e.params.scrollbar.el && e.scrollbar.el) {
        var t = e.scrollbar,
            i = e.rtlTranslate,
            s = e.progress,
            a = t.dragSize,
            r = t.trackSize,
            n = t.$dragEl,
            o = t.$el,
            l = e.params.scrollbar,
            d = a,
            p = (r - a) * s;i ? 0 < (p = -p) ? (d = a - p, p = 0) : r < -p + a && (d = r + p) : p < 0 ? (d = a + p, p = 0) : r < p + a && (d = r - p), e.isHorizontal() ? (F.transforms3d ? n.transform("translate3d(" + p + "px, 0, 0)") : n.transform("translateX(" + p + "px)"), n[0].style.width = d + "px") : (F.transforms3d ? n.transform("translate3d(0px, " + p + "px, 0)") : n.transform("translateY(" + p + "px)"), n[0].style.height = d + "px"), l.hide && (clearTimeout(e.scrollbar.timeout), o[0].style.opacity = 1, e.scrollbar.timeout = setTimeout(function () {
          o[0].style.opacity = 0, o.transition(400);
        }, 1e3));
      }
    }, setTransition: function setTransition(e) {
      this.params.scrollbar.el && this.scrollbar.el && this.scrollbar.$dragEl.transition(e);
    }, updateSize: function updateSize() {
      var e = this;if (e.params.scrollbar.el && e.scrollbar.el) {
        var t = e.scrollbar,
            i = t.$dragEl,
            s = t.$el;i[0].style.width = "", i[0].style.height = "";var a,
            r = e.isHorizontal() ? s[0].offsetWidth : s[0].offsetHeight,
            n = e.size / e.virtualSize,
            o = n * (r / e.size);a = "auto" === e.params.scrollbar.dragSize ? r * n : parseInt(e.params.scrollbar.dragSize, 10), e.isHorizontal() ? i[0].style.width = a + "px" : i[0].style.height = a + "px", s[0].style.display = 1 <= n ? "none" : "", e.params.scrollbarHide && (s[0].style.opacity = 0), N.extend(t, { trackSize: r, divider: n, moveDivider: o, dragSize: a }), t.$el[e.params.watchOverflow && e.isLocked ? "addClass" : "removeClass"](e.params.scrollbar.lockClass);
      }
    }, setDragPosition: function setDragPosition(e) {
      var t,
          i = this,
          s = i.scrollbar,
          a = i.rtlTranslate,
          r = s.$el,
          n = s.dragSize,
          o = s.trackSize;t = ((i.isHorizontal() ? "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX || e.clientX : "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY || e.clientY) - r.offset()[i.isHorizontal() ? "left" : "top"] - n / 2) / (o - n), t = Math.max(Math.min(t, 1), 0), a && (t = 1 - t);var l = i.minTranslate() + (i.maxTranslate() - i.minTranslate()) * t;i.updateProgress(l), i.setTranslate(l), i.updateActiveIndex(), i.updateSlidesClasses();
    }, onDragStart: function onDragStart(e) {
      var t = this,
          i = t.params.scrollbar,
          s = t.scrollbar,
          a = t.$wrapperEl,
          r = s.$el,
          n = s.$dragEl;t.scrollbar.isTouched = !0, e.preventDefault(), e.stopPropagation(), a.transition(100), n.transition(100), s.setDragPosition(e), clearTimeout(t.scrollbar.dragTimeout), r.transition(0), i.hide && r.css("opacity", 1), t.emit("scrollbarDragStart", e);
    }, onDragMove: function onDragMove(e) {
      var t = this.scrollbar,
          i = this.$wrapperEl,
          s = t.$el,
          a = t.$dragEl;this.scrollbar.isTouched && (e.preventDefault ? e.preventDefault() : e.returnValue = !1, t.setDragPosition(e), i.transition(0), s.transition(0), a.transition(0), this.emit("scrollbarDragMove", e));
    }, onDragEnd: function onDragEnd(e) {
      var t = this,
          i = t.params.scrollbar,
          s = t.scrollbar.$el;t.scrollbar.isTouched && (t.scrollbar.isTouched = !1, i.hide && (clearTimeout(t.scrollbar.dragTimeout), t.scrollbar.dragTimeout = N.nextTick(function () {
        s.css("opacity", 0), s.transition(400);
      }, 1e3)), t.emit("scrollbarDragEnd", e), i.snapOnRelease && t.slideToClosest());
    }, enableDraggable: function enableDraggable() {
      var e = this;if (e.params.scrollbar.el) {
        var t = e.scrollbar,
            i = e.touchEvents,
            s = e.touchEventsDesktop,
            a = e.params,
            r = t.$el[0],
            n = !(!F.passiveListener || !a.passiveListeners) && { passive: !1, capture: !1 },
            o = !(!F.passiveListener || !a.passiveListeners) && { passive: !0, capture: !1 };F.touch || !F.pointerEvents && !F.prefixedPointerEvents ? (F.touch && (r.addEventListener(i.start, e.scrollbar.onDragStart, n), r.addEventListener(i.move, e.scrollbar.onDragMove, n), r.addEventListener(i.end, e.scrollbar.onDragEnd, o)), (a.simulateTouch && !m.ios && !m.android || a.simulateTouch && !F.touch && m.ios) && (r.addEventListener("mousedown", e.scrollbar.onDragStart, n), f.addEventListener("mousemove", e.scrollbar.onDragMove, n), f.addEventListener("mouseup", e.scrollbar.onDragEnd, o))) : (r.addEventListener(s.start, e.scrollbar.onDragStart, n), f.addEventListener(s.move, e.scrollbar.onDragMove, n), f.addEventListener(s.end, e.scrollbar.onDragEnd, o));
      }
    }, disableDraggable: function disableDraggable() {
      var e = this;if (e.params.scrollbar.el) {
        var t = e.scrollbar,
            i = e.touchEvents,
            s = e.touchEventsDesktop,
            a = e.params,
            r = t.$el[0],
            n = !(!F.passiveListener || !a.passiveListeners) && { passive: !1, capture: !1 },
            o = !(!F.passiveListener || !a.passiveListeners) && { passive: !0, capture: !1 };F.touch || !F.pointerEvents && !F.prefixedPointerEvents ? (F.touch && (r.removeEventListener(i.start, e.scrollbar.onDragStart, n), r.removeEventListener(i.move, e.scrollbar.onDragMove, n), r.removeEventListener(i.end, e.scrollbar.onDragEnd, o)), (a.simulateTouch && !m.ios && !m.android || a.simulateTouch && !F.touch && m.ios) && (r.removeEventListener("mousedown", e.scrollbar.onDragStart, n), f.removeEventListener("mousemove", e.scrollbar.onDragMove, n), f.removeEventListener("mouseup", e.scrollbar.onDragEnd, o))) : (r.removeEventListener(s.start, e.scrollbar.onDragStart, n), f.removeEventListener(s.move, e.scrollbar.onDragMove, n), f.removeEventListener(s.end, e.scrollbar.onDragEnd, o));
      }
    }, init: function init() {
      var e = this;if (e.params.scrollbar.el) {
        var t = e.scrollbar,
            i = e.$el,
            s = e.params.scrollbar,
            a = y(s.el);e.params.uniqueNavElements && "string" == typeof s.el && 1 < a.length && 1 === i.find(s.el).length && (a = i.find(s.el));var r = a.find("." + e.params.scrollbar.dragClass);0 === r.length && (r = y('<div class="' + e.params.scrollbar.dragClass + '"></div>'), a.append(r)), N.extend(t, { $el: a, el: a[0], $dragEl: r, dragEl: r[0] }), s.draggable && t.enableDraggable();
      }
    }, destroy: function destroy() {
      this.scrollbar.disableDraggable();
    } },
      B = { LinearSpline: function LinearSpline(e, t) {
      var i,
          s,
          a,
          r,
          n,
          o = function o(e, t) {
        for (s = -1, i = e.length; 1 < i - s;) {
          e[a = i + s >> 1] <= t ? s = a : i = a;
        }return i;
      };return this.x = e, this.y = t, this.lastIndex = e.length - 1, this.interpolate = function (e) {
        return e ? (n = o(this.x, e), r = n - 1, (e - this.x[r]) * (this.y[n] - this.y[r]) / (this.x[n] - this.x[r]) + this.y[r]) : 0;
      }, this;
    }, getInterpolateFunction: function getInterpolateFunction(e) {
      var t = this;t.controller.spline || (t.controller.spline = t.params.loop ? new B.LinearSpline(t.slidesGrid, e.slidesGrid) : new B.LinearSpline(t.snapGrid, e.snapGrid));
    }, setTranslate: function setTranslate(e, t) {
      var i,
          s,
          a = this,
          r = a.controller.control;function n(e) {
        var t = a.rtlTranslate ? -a.translate : a.translate;"slide" === a.params.controller.by && (a.controller.getInterpolateFunction(e), s = -a.controller.spline.interpolate(-t)), s && "container" !== a.params.controller.by || (i = (e.maxTranslate() - e.minTranslate()) / (a.maxTranslate() - a.minTranslate()), s = (t - a.minTranslate()) * i + e.minTranslate()), a.params.controller.inverse && (s = e.maxTranslate() - s), e.updateProgress(s), e.setTranslate(s, a), e.updateActiveIndex(), e.updateSlidesClasses();
      }if (Array.isArray(r)) for (var o = 0; o < r.length; o += 1) {
        r[o] !== t && r[o] instanceof M && n(r[o]);
      } else r instanceof M && t !== r && n(r);
    }, setTransition: function setTransition(t, e) {
      var i,
          s = this,
          a = s.controller.control;function r(e) {
        e.setTransition(t, s), 0 !== t && (e.transitionStart(), e.params.autoHeight && N.nextTick(function () {
          e.updateAutoHeight();
        }), e.$wrapperEl.transitionEnd(function () {
          a && (e.params.loop && "slide" === s.params.controller.by && e.loopFix(), e.transitionEnd());
        }));
      }if (Array.isArray(a)) for (i = 0; i < a.length; i += 1) {
        a[i] !== e && a[i] instanceof M && r(a[i]);
      } else a instanceof M && e !== a && r(a);
    } },
      $ = { run: function run() {
      var e = this,
          t = e.slides.eq(e.activeIndex),
          i = e.params.autoplay.delay;t.attr("data-swiper-autoplay") && (i = t.attr("data-swiper-autoplay") || e.params.autoplay.delay), e.autoplay.timeout = N.nextTick(function () {
        e.params.autoplay.reverseDirection ? e.params.loop ? (e.loopFix(), e.slidePrev(e.params.speed, !0, !0), e.emit("autoplay")) : e.isBeginning ? e.params.autoplay.stopOnLastSlide ? e.autoplay.stop() : (e.slideTo(e.slides.length - 1, e.params.speed, !0, !0), e.emit("autoplay")) : (e.slidePrev(e.params.speed, !0, !0), e.emit("autoplay")) : e.params.loop ? (e.loopFix(), e.slideNext(e.params.speed, !0, !0), e.emit("autoplay")) : e.isEnd ? e.params.autoplay.stopOnLastSlide ? e.autoplay.stop() : (e.slideTo(0, e.params.speed, !0, !0), e.emit("autoplay")) : (e.slideNext(e.params.speed, !0, !0), e.emit("autoplay"));
      }, i);
    }, start: function start() {
      var e = this;return void 0 === e.autoplay.timeout && !e.autoplay.running && (e.autoplay.running = !0, e.emit("autoplayStart"), e.autoplay.run(), !0);
    }, stop: function stop() {
      var e = this;return !!e.autoplay.running && void 0 !== e.autoplay.timeout && (e.autoplay.timeout && (clearTimeout(e.autoplay.timeout), e.autoplay.timeout = void 0), e.autoplay.running = !1, e.emit("autoplayStop"), !0);
    }, pause: function pause(e) {
      var t = this;t.autoplay.running && (t.autoplay.paused || (t.autoplay.timeout && clearTimeout(t.autoplay.timeout), t.autoplay.paused = !0, 0 !== e && t.params.autoplay.waitForTransition ? (t.$wrapperEl[0].addEventListener("transitionend", t.autoplay.onTransitionEnd), t.$wrapperEl[0].addEventListener("webkitTransitionEnd", t.autoplay.onTransitionEnd)) : (t.autoplay.paused = !1, t.autoplay.run())));
    } },
      G = { setTranslate: function setTranslate() {
      for (var e = this, t = e.slides, i = 0; i < t.length; i += 1) {
        var s = e.slides.eq(i),
            a = -s[0].swiperSlideOffset;e.params.virtualTranslate || (a -= e.translate);var r = 0;e.isHorizontal() || (r = a, a = 0);var n = e.params.fadeEffect.crossFade ? Math.max(1 - Math.abs(s[0].progress), 0) : 1 + Math.min(Math.max(s[0].progress, -1), 0);s.css({ opacity: n }).transform("translate3d(" + a + "px, " + r + "px, 0px)");
      }
    }, setTransition: function setTransition(e) {
      var i = this,
          t = i.slides,
          s = i.$wrapperEl;if (t.transition(e), i.params.virtualTranslate && 0 !== e) {
        var a = !1;t.transitionEnd(function () {
          if (!a && i && !i.destroyed) {
            a = !0, i.animating = !1;for (var e = ["webkitTransitionEnd", "transitionend"], t = 0; t < e.length; t += 1) {
              s.trigger(e[t]);
            }
          }
        });
      }
    } },
      V = [k, L, P, D, { name: "observer", params: { observer: !1, observeParents: !1 }, create: function create() {
      N.extend(this, { observer: { init: z.init.bind(this), attach: z.attach.bind(this), destroy: z.destroy.bind(this), observers: [] } });
    }, on: { init: function init() {
        this.observer.init();
      }, destroy: function destroy() {
        this.observer.destroy();
      } } }, { name: "navigation", params: { navigation: { nextEl: null, prevEl: null, hideOnClick: !1, disabledClass: "swiper-button-disabled", hiddenClass: "swiper-button-hidden", lockClass: "swiper-button-lock" } }, create: function create() {
      N.extend(this, { navigation: { init: O.init.bind(this), update: O.update.bind(this), destroy: O.destroy.bind(this) } });
    }, on: { init: function init() {
        this.navigation.init(), this.navigation.update();
      }, toEdge: function toEdge() {
        this.navigation.update();
      }, fromEdge: function fromEdge() {
        this.navigation.update();
      }, destroy: function destroy() {
        this.navigation.destroy();
      }, click: function click(e) {
        var t = this.navigation,
            i = t.$nextEl,
            s = t.$prevEl;!this.params.navigation.hideOnClick || y(e.target).is(s) || y(e.target).is(i) || (i && i.toggleClass(this.params.navigation.hiddenClass), s && s.toggleClass(this.params.navigation.hiddenClass));
      } } }, { name: "pagination", params: { pagination: { el: null, bulletElement: "span", clickable: !1, hideOnClick: !1, renderBullet: null, renderProgressbar: null, renderFraction: null, renderCustom: null, progressbarOpposite: !1, type: "bullets", dynamicBullets: !1, dynamicMainBullets: 1, formatFractionCurrent: function formatFractionCurrent(e) {
          return e;
        }, formatFractionTotal: function formatFractionTotal(e) {
          return e;
        }, bulletClass: "swiper-pagination-bullet", bulletActiveClass: "swiper-pagination-bullet-active", modifierClass: "swiper-pagination-", currentClass: "swiper-pagination-current", totalClass: "swiper-pagination-total", hiddenClass: "swiper-pagination-hidden", progressbarFillClass: "swiper-pagination-progressbar-fill", progressbarOppositeClass: "swiper-pagination-progressbar-opposite", clickableClass: "swiper-pagination-clickable", lockClass: "swiper-pagination-lock" } }, create: function create() {
      var e = this;N.extend(e, { pagination: { init: I.init.bind(e), render: I.render.bind(e), update: I.update.bind(e), destroy: I.destroy.bind(e), dynamicBulletIndex: 0 } });
    }, on: { init: function init() {
        this.pagination.init(), this.pagination.render(), this.pagination.update();
      }, activeIndexChange: function activeIndexChange() {
        this.params.loop ? this.pagination.update() : void 0 === this.snapIndex && this.pagination.update();
      }, snapIndexChange: function snapIndexChange() {
        this.params.loop || this.pagination.update();
      }, slidesLengthChange: function slidesLengthChange() {
        this.params.loop && (this.pagination.render(), this.pagination.update());
      }, snapGridLengthChange: function snapGridLengthChange() {
        this.params.loop || (this.pagination.render(), this.pagination.update());
      }, destroy: function destroy() {
        this.pagination.destroy();
      }, click: function click(e) {
        var t = this;t.params.pagination.el && t.params.pagination.hideOnClick && 0 < t.pagination.$el.length && !y(e.target).hasClass(t.params.pagination.bulletClass) && t.pagination.$el.toggleClass(t.params.pagination.hiddenClass);
      } } }, { name: "scrollbar", params: { scrollbar: { el: null, dragSize: "auto", hide: !1, draggable: !1, snapOnRelease: !0, lockClass: "swiper-scrollbar-lock", dragClass: "swiper-scrollbar-drag" } }, create: function create() {
      var e = this;N.extend(e, { scrollbar: { init: A.init.bind(e), destroy: A.destroy.bind(e), updateSize: A.updateSize.bind(e), setTranslate: A.setTranslate.bind(e), setTransition: A.setTransition.bind(e), enableDraggable: A.enableDraggable.bind(e), disableDraggable: A.disableDraggable.bind(e), setDragPosition: A.setDragPosition.bind(e), onDragStart: A.onDragStart.bind(e), onDragMove: A.onDragMove.bind(e), onDragEnd: A.onDragEnd.bind(e), isTouched: !1, timeout: null, dragTimeout: null } });
    }, on: { init: function init() {
        this.scrollbar.init(), this.scrollbar.updateSize(), this.scrollbar.setTranslate();
      }, update: function update() {
        this.scrollbar.updateSize();
      }, resize: function resize() {
        this.scrollbar.updateSize();
      }, observerUpdate: function observerUpdate() {
        this.scrollbar.updateSize();
      }, setTranslate: function setTranslate() {
        this.scrollbar.setTranslate();
      }, setTransition: function setTransition(e) {
        this.scrollbar.setTransition(e);
      }, destroy: function destroy() {
        this.scrollbar.destroy();
      } } }, { name: "controller", params: { controller: { control: void 0, inverse: !1, by: "slide" } }, create: function create() {
      var e = this;N.extend(e, { controller: { control: e.params.controller.control, getInterpolateFunction: B.getInterpolateFunction.bind(e), setTranslate: B.setTranslate.bind(e), setTransition: B.setTransition.bind(e) } });
    }, on: { update: function update() {
        this.controller.control && this.controller.spline && (this.controller.spline = void 0, delete this.controller.spline);
      }, resize: function resize() {
        this.controller.control && this.controller.spline && (this.controller.spline = void 0, delete this.controller.spline);
      }, observerUpdate: function observerUpdate() {
        this.controller.control && this.controller.spline && (this.controller.spline = void 0, delete this.controller.spline);
      }, setTranslate: function setTranslate(e, t) {
        this.controller.control && this.controller.setTranslate(e, t);
      }, setTransition: function setTransition(e, t) {
        this.controller.control && this.controller.setTransition(e, t);
      } } }, { name: "autoplay", params: { autoplay: { enabled: !1, delay: 3e3, waitForTransition: !0, disableOnInteraction: !0, stopOnLastSlide: !1, reverseDirection: !1 } }, create: function create() {
      var t = this;N.extend(t, { autoplay: { running: !1, paused: !1, run: $.run.bind(t), start: $.start.bind(t), stop: $.stop.bind(t), pause: $.pause.bind(t), onTransitionEnd: function onTransitionEnd(e) {
            t && !t.destroyed && t.$wrapperEl && e.target === this && (t.$wrapperEl[0].removeEventListener("transitionend", t.autoplay.onTransitionEnd), t.$wrapperEl[0].removeEventListener("webkitTransitionEnd", t.autoplay.onTransitionEnd), t.autoplay.paused = !1, t.autoplay.running ? t.autoplay.run() : t.autoplay.stop());
          } } });
    }, on: { init: function init() {
        this.params.autoplay.enabled && this.autoplay.start();
      }, beforeTransitionStart: function beforeTransitionStart(e, t) {
        this.autoplay.running && (t || !this.params.autoplay.disableOnInteraction ? this.autoplay.pause(e) : this.autoplay.stop());
      }, sliderFirstMove: function sliderFirstMove() {
        this.autoplay.running && (this.params.autoplay.disableOnInteraction ? this.autoplay.stop() : this.autoplay.pause());
      }, destroy: function destroy() {
        this.autoplay.running && this.autoplay.stop();
      } } }, { name: "effect-fade", params: { fadeEffect: { crossFade: !1 } }, create: function create() {
      N.extend(this, { fadeEffect: { setTranslate: G.setTranslate.bind(this), setTransition: G.setTransition.bind(this) } });
    }, on: { beforeInit: function beforeInit() {
        var e = this;if ("fade" === e.params.effect) {
          e.classNames.push(e.params.containerModifierClass + "fade");var t = { slidesPerView: 1, slidesPerColumn: 1, slidesPerGroup: 1, watchSlidesProgress: !0, spaceBetween: 0, virtualTranslate: !0 };N.extend(e.params, t), N.extend(e.originalParams, t);
        }
      }, setTranslate: function setTranslate() {
        "fade" === this.params.effect && this.fadeEffect.setTranslate();
      }, setTransition: function setTransition(e) {
        "fade" === this.params.effect && this.fadeEffect.setTransition(e);
      } } }];return void 0 === M.use && (M.use = M.Class.use, M.installModule = M.Class.installModule), M.use(V), M;
});
//# sourceMappingURL=swiper.min.js.map

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var cn = exports.cn = function cn(className) {
    return typeof className === 'string' ? className.split('.').join(' ').trim() : '';
};

/***/ })
/******/ ]);
});