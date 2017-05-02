'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _swiper = require('swiper');

var _swiper2 = _interopRequireDefault(_swiper);

var _objectAssign = require('object-assign');

var _objectAssign2 = _interopRequireDefault(_objectAssign);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ReactIdSwiper = function (_React$Component) {
  _inherits(ReactIdSwiper, _React$Component);

  function ReactIdSwiper(props) {
    _classCallCheck(this, ReactIdSwiper);

    var _this = _possibleConstructorReturn(this, (ReactIdSwiper.__proto__ || Object.getPrototypeOf(ReactIdSwiper)).call(this, props));

    _this.renderContent = _this.renderContent.bind(_this);
    return _this;
  }

  _createClass(ReactIdSwiper, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.swiper = (0, _swiper2.default)(_reactDom2.default.findDOMNode(this), (0, _objectAssign2.default)({}, this.props));
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (this.props.rebuildOnUpdate && typeof this.swiper !== 'undefined') {
        this.swiper.destroy(true, true);
        this.swiper = (0, _swiper2.default)(_reactDom2.default.findDOMNode(this), (0, _objectAssign2.default)({}, nextProps));
      }
    }
  }, {
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps) {
      return nextProps.children !== this.props.children;
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      if (this.props.rebuildOnUpdate && typeof this.swiper !== 'undefined') {
        this.swiper.destroy(true, true);
        this.swiper = (0, _swiper2.default)(_reactDom2.default.findDOMNode(this), (0, _objectAssign2.default)({}, this.props));
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (typeof this.swiper !== 'undefined') this.swiper.destroy(true, true);
      delete this.swiper;
    }
  }, {
    key: 'validateClass',
    value: function validateClass(className) {
      if (typeof className !== 'string') return '';
      return className.replace(/\.|#/g, ' ').trim();
    }
  }, {
    key: 'renderScrollBar',
    value: function renderScrollBar() {
      if (!this.props.scrollbar) return false;
      var scrollbarCustomizedClass = this.validateClass(this.props.scrollbarCustomizedClass);
      var scrollbarClass = this.validateClass(this.props.scrollbar);

      return _react2.default.createElement('div', { className: [scrollbarClass, scrollbarCustomizedClass].join(' ') });
    }
  }, {
    key: 'renderPagination',
    value: function renderPagination() {
      if (!this.props.pagination) return false;
      var paginationCustomizedClass = this.validateClass(this.props.paginationCustomizedClass);
      var paginationClass = this.validateClass(this.props.pagination);

      return _react2.default.createElement('div', { className: [paginationClass, paginationCustomizedClass].join(' ') });
    }
  }, {
    key: 'renderNextButton',
    value: function renderNextButton() {
      if (!this.props.nextButton) return false;
      var nextButtonCustomizedClass = this.validateClass(this.props.nextButtonCustomizedClass);
      var nextButtonClass = this.validateClass(this.props.nextButton);

      return _react2.default.createElement('div', { className: [nextButtonClass, nextButtonCustomizedClass].join(' ') });
    }
  }, {
    key: 'renderPrevButton',
    value: function renderPrevButton() {
      if (!this.props.prevButton) return false;
      var prevButtonCustomizedClass = this.validateClass(this.props.prevButtonCustomizedClass);
      var prevButtonClass = this.validateClass(this.props.prevButton);

      return _react2.default.createElement('div', { className: [prevButtonClass, prevButtonCustomizedClass].join(' ') });
    }
  }, {
    key: 'renderContent',
    value: function renderContent(e) {
      var _props = this.props,
          slideClass = _props.slideClass,
          noSwiping = _props.noSwiping;

      var noSwipingClass = noSwiping ? 'swiper-no-swiping' : '';

      return _react2.default.cloneElement(e, { className: [slideClass, e.props.className, noSwipingClass].join(' ') });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          containerClass = _props2.containerClass,
          wrapperClass = _props2.wrapperClass,
          children = _props2.children;


      return _react2.default.createElement(
        'div',
        { className: containerClass },
        _react2.default.createElement(
          'div',
          { className: wrapperClass },
          _react2.default.Children.map(children, this.renderContent)
        ),
        this.renderPagination(),
        this.renderScrollBar(),
        this.renderNextButton(),
        this.renderPrevButton()
      );
    }
  }]);

  return ReactIdSwiper;
}(_react2.default.Component);

ReactIdSwiper.defaultProps = {
  containerClass: 'swiper-container',
  wrapperClass: 'swiper-wrapper',
  slideClass: 'swiper-slide'
};
ReactIdSwiper.propTypes = {
  containerClass: _propTypes2.default.string,
  wrapperClass: _propTypes2.default.string,
  children: _propTypes2.default.oneOfType([_propTypes2.default.node, _propTypes2.default.element]),
  rebuildOnUpdate: _propTypes2.default.bool,
  initialSlide: _propTypes2.default.number,
  direction: _propTypes2.default.string,
  speed: _propTypes2.default.number,
  setWrapperSize: _propTypes2.default.bool,
  virtualTranslate: _propTypes2.default.bool,
  width: _propTypes2.default.number,
  height: _propTypes2.default.number,
  autoHeight: _propTypes2.default.bool,
  roundLengths: _propTypes2.default.bool,
  nested: _propTypes2.default.bool,
  autoplay: _propTypes2.default.number,
  autoplayStopOnLast: _propTypes2.default.bool,
  autoplayDisableOnInteraction: _propTypes2.default.bool,
  watchSlidesProgress: _propTypes2.default.bool,
  watchSlidesVisibility: _propTypes2.default.bool,
  freeMode: _propTypes2.default.bool,
  freeModeMomentum: _propTypes2.default.bool,
  freeModeMomentumRatio: _propTypes2.default.number,
  freeModeMomentumBounce: _propTypes2.default.bool,
  freeModeMomentumBounceRatio: _propTypes2.default.number,
  freeModeMinimumVelocity: _propTypes2.default.number,
  freeModeSticky: _propTypes2.default.bool,
  effect: _propTypes2.default.string,
  fade: _propTypes2.default.object,
  cube: _propTypes2.default.object,
  coverflow: _propTypes2.default.object,
  flip: _propTypes2.default.object,
  parallax: _propTypes2.default.bool,
  spaceBetween: _propTypes2.default.number,
  slidesPerColumn: _propTypes2.default.number,
  slidesPerColumnFill: _propTypes2.default.string,
  slidesPerGroup: _propTypes2.default.number,
  centeredSlides: _propTypes2.default.bool,
  slidesOffsetBefore: _propTypes2.default.number,
  slidesOffsetAfter: _propTypes2.default.number,
  grabCursor: _propTypes2.default.bool,
  touchEventsTarget: _propTypes2.default.string,
  touchRatio: _propTypes2.default.number,
  touchAngle: _propTypes2.default.number,
  simulateTouch: _propTypes2.default.bool,
  shortSwipes: _propTypes2.default.bool,
  longSwipes: _propTypes2.default.bool,
  longSwipesRatio: _propTypes2.default.number,
  longSwipesMs: _propTypes2.default.number,
  followFinger: _propTypes2.default.bool,
  onlyExternal: _propTypes2.default.bool,
  threshold: _propTypes2.default.number,
  touchMoveStopPropagation: _propTypes2.default.bool,
  iOSEdgeSwipeDetection: _propTypes2.default.bool,
  iOSEdgeSwipeThreshold: _propTypes2.default.number,
  resistance: _propTypes2.default.bool,
  resistanceRatio: _propTypes2.default.number,
  preventClicks: _propTypes2.default.bool,
  preventClicksPropagation: _propTypes2.default.bool,
  slideToClickedSlide: _propTypes2.default.bool,
  allowSwipeToPrev: _propTypes2.default.bool,
  allowSwipeToNext: _propTypes2.default.bool,
  noSwiping: _propTypes2.default.bool,
  noSwipingClass: _propTypes2.default.string,
  uniqueNavElements: _propTypes2.default.bool,
  pagination: _propTypes2.default.string,
  paginationType: _propTypes2.default.string,
  paginationHide: _propTypes2.default.bool,
  paginationClickable: _propTypes2.default.bool,
  paginationElement: _propTypes2.default.string,
  paginationBulletRender: _propTypes2.default.func,
  paginationFractionRender: _propTypes2.default.func,
  paginationProgressRender: _propTypes2.default.func,
  paginationCustomRender: _propTypes2.default.func,
  scrollbar: _propTypes2.default.string,
  scrollbarHide: _propTypes2.default.bool,
  scrollbarDraggable: _propTypes2.default.bool,
  scrollbarSnapOnRelease: _propTypes2.default.bool,
  prevButton: _propTypes2.default.string,
  nextButton: _propTypes2.default.string,
  a11y: _propTypes2.default.bool,
  prevSlideMessage: _propTypes2.default.string,
  nextSlideMessage: _propTypes2.default.string,
  firstSlideMessage: _propTypes2.default.string,
  lastSlideMessage: _propTypes2.default.string,
  paginationBulletMessage: _propTypes2.default.string,
  keyboardControl: _propTypes2.default.bool,
  mousewheelControl: _propTypes2.default.bool,
  mousewheelForceToAxis: _propTypes2.default.bool,
  mousewheelReleaseOnEdges: _propTypes2.default.bool,
  mousewheelInvert: _propTypes2.default.bool,
  mousewheelSensitivity: _propTypes2.default.number,
  hashnav: _propTypes2.default.bool,
  preloadImages: _propTypes2.default.bool,
  updateOnImagesReady: _propTypes2.default.bool,
  lazyLoading: _propTypes2.default.bool,
  lazyLoadingInPrevNext: _propTypes2.default.bool,
  lazyLoadingInPrevNextAmount: _propTypes2.default.number,
  lazyLoadingOnTransitionStart: _propTypes2.default.bool,
  loop: _propTypes2.default.bool,
  loopAdditionalSlides: _propTypes2.default.number,
  loopedSlides: _propTypes2.default.number,
  controlInverse: _propTypes2.default.bool,
  controlBy: _propTypes2.default.string,
  observer: _propTypes2.default.bool,
  observeParents: _propTypes2.default.bool,
  breakpoints: _propTypes2.default.object,
  runCallbacksOnInit: _propTypes2.default.bool,
  onInit: _propTypes2.default.func,
  onSlideChangeStart: _propTypes2.default.func,
  onSlideChangeEnd: _propTypes2.default.func,
  onSlideNextStart: _propTypes2.default.func,
  onSlideNextEnd: _propTypes2.default.func,
  onSlidePrevStart: _propTypes2.default.func,
  onSlidePrevEnd: _propTypes2.default.func,
  onTransitionStart: _propTypes2.default.func,
  onTransitionEnd: _propTypes2.default.func,
  onTouchStart: _propTypes2.default.func,
  onTouchMove: _propTypes2.default.func,
  onTouchMoveOpposite: _propTypes2.default.func,
  onSliderMove: _propTypes2.default.func,
  onTouchEnd: _propTypes2.default.func,
  onClick: _propTypes2.default.func,
  onTap: _propTypes2.default.func,
  onDoubleTap: _propTypes2.default.func,
  onImagesReady: _propTypes2.default.func,
  onProgress: _propTypes2.default.func,
  onReachBeginning: _propTypes2.default.func,
  onReachEnd: _propTypes2.default.func,
  onDestroy: _propTypes2.default.func,
  onSetTranslate: _propTypes2.default.func,
  onSetTransition: _propTypes2.default.func,
  onAutoplay: _propTypes2.default.func,
  onAutoplayStart: _propTypes2.default.func,
  onAutoplayStop: _propTypes2.default.func,
  onLazyImageLoad: _propTypes2.default.func,
  onLazyImageReady: _propTypes2.default.func,
  onPaginationRendered: _propTypes2.default.func,
  slideClass: _propTypes2.default.string,
  slideActiveClass: _propTypes2.default.string,
  slideVisibleClass: _propTypes2.default.string,
  slideDuplicateClass: _propTypes2.default.string,
  slideNextClass: _propTypes2.default.string,
  slidePrevClass: _propTypes2.default.string,
  bulletClass: _propTypes2.default.string,
  bulletActiveClass: _propTypes2.default.string,
  paginationHiddenClass: _propTypes2.default.string,
  paginationCurrentClass: _propTypes2.default.string,
  paginationTotalClass: _propTypes2.default.string,
  paginationProgressbarClass: _propTypes2.default.string,
  buttonDisabledClass: _propTypes2.default.string,
  prevButtonCustomizedClass: _propTypes2.default.string,
  nextButtonCustomizedClass: _propTypes2.default.string,
  paginationCustomizedClass: _propTypes2.default.string,
  scrollbarCustomizedClass: _propTypes2.default.string
};
exports.default = ReactIdSwiper;