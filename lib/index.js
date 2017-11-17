'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _swiper = require('swiper/dist/js/swiper.js');

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

  // Default props
  function ReactIdSwiper(props) {
    _classCallCheck(this, ReactIdSwiper);

    var _this = _possibleConstructorReturn(this, (ReactIdSwiper.__proto__ || Object.getPrototypeOf(ReactIdSwiper)).call(this, props));

    _this.renderContent = _this.renderContent.bind(_this);
    return _this;
  }

  // Proptypes


  _createClass(ReactIdSwiper, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.swiper = new _swiper2.default(_reactDom2.default.findDOMNode(this), (0, _objectAssign2.default)({}, this.props));
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (this.props.rebuildOnUpdate && typeof this.swiper !== 'undefined') {
        this.rebuildSwiper();
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
      var _this2 = this;

      if (this.props.rebuildOnUpdate && typeof this.swiper !== 'undefined') {
        this.rebuildSwiper();
      } else if (this.props.shouldSwiperUpdate && typeof this.swiper !== 'undefined') {
        this.swiper.update();

        var numSlides = this.swiper.slides.length;
        if (numSlides <= this.swiper.activeIndex) {
          var index = Math.max(numSlides - 1, 0);
          this.swiper.slideTo(index);
        }
      }

      if (this.props.activeSlideKey) {
        var activeSlideId = null;
        var id = 0;
        _react2.default.Children.forEach(this.props.children, function (child) {
          if (child) {
            if (child.key === _this2.props.activeSlideKey) {
              activeSlideId = id;
            }
            id++;
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
    key: 'rebuildSwiper',
    value: function rebuildSwiper() {
      this.swiper.destroy(true, true);
      this.swiper = new _swiper2.default(_reactDom2.default.findDOMNode(this), (0, _objectAssign2.default)({}, this.props));
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
      if (!this.props.scrollbar || !this.props.scrollbar.el) return false;
      var scrollbarCustomizedClass = this.validateClass(this.props.scrollbarCustomizedClass);
      var scrollbarClass = this.validateClass(this.props.scrollbar.el);

      return _react2.default.createElement('div', { className: [scrollbarClass, scrollbarCustomizedClass].join(' ') });
    }
  }, {
    key: 'renderPagination',
    value: function renderPagination() {
      if (!this.props.pagination || !this.props.pagination.el) return false;
      var paginationCustomizedClass = this.validateClass(this.props.paginationCustomizedClass);
      var paginationClass = this.validateClass(this.props.pagination.el);

      return _react2.default.createElement('div', { className: [paginationClass, paginationCustomizedClass].join(' ') });
    }
  }, {
    key: 'renderNextButton',
    value: function renderNextButton() {
      if (!this.props.navigation || !this.props.navigation.nextEl) return false;
      var nextButtonCustomizedClass = this.validateClass(this.props.nextButtonCustomizedClass);
      var nextButtonClass = this.validateClass(this.props.navigation.nextEl);

      return _react2.default.createElement('div', { className: [nextButtonClass, nextButtonCustomizedClass].join(' ') });
    }
  }, {
    key: 'renderPrevButton',
    value: function renderPrevButton() {
      if (!this.props.navigation || !this.props.navigation.prevEl) return false;
      var prevButtonCustomizedClass = this.validateClass(this.props.prevButtonCustomizedClass);
      var prevButtonClass = this.validateClass(this.props.navigation.prevEl);

      return _react2.default.createElement('div', { className: [prevButtonClass, prevButtonCustomizedClass].join(' ') });
    }
  }, {
    key: 'renderParallax',
    value: function renderParallax() {
      if (!this.props.parallax || !this.props.parallaxEl) return false;

      var parallaxBgClass = this.validateClass(this.props.parallaxEl.el);
      return _react2.default.createElement('div', { className: parallaxBgClass, 'data-swiper-parallax': this.props.parallaxEl.value });
    }
  }, {
    key: 'renderContent',
    value: function renderContent(e) {
      if (!e) return null;

      var _props = this.props,
          slideClass = _props.slideClass,
          noSwiping = _props.noSwiping;

      var noSwipingClass = noSwiping ? 'swiper-no-swiping' : '';
      var childProps = _extends({}, e.props, {
        className: [slideClass, e.props.className, noSwipingClass].join(' ')
      });

      return _react2.default.cloneElement(e, _extends({}, childProps));
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          containerClass = _props2.containerClass,
          wrapperClass = _props2.wrapperClass,
          children = _props2.children,
          rtl = _props2.rtl;

      var rtlProp = rtl ? { dir: 'rtl' } : {};

      return _react2.default.createElement(
        'div',
        _extends({ className: containerClass }, rtlProp),
        this.renderParallax(),
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
  slideClass: 'swiper-slide' };
ReactIdSwiper.propTypes = {
  // react-id-swiper original parameter
  containerClass: _propTypes2.default.string,
  wrapperClass: _propTypes2.default.string,
  children: _propTypes2.default.oneOfType([_propTypes2.default.node, _propTypes2.default.element]),
  rebuildOnUpdate: _propTypes2.default.bool,
  shouldSwiperUpdate: _propTypes2.default.bool,
  prevButtonCustomizedClass: _propTypes2.default.string,
  nextButtonCustomizedClass: _propTypes2.default.string,
  paginationCustomizedClass: _propTypes2.default.string,
  scrollbarCustomizedClass: _propTypes2.default.string,
  activeSlideKey: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
  // parallax
  parallax: _propTypes2.default.bool,
  parallaxEl: _propTypes2.default.shape({
    el: _propTypes2.default.string,
    value: _propTypes2.default.string
  }),

  // swiper parameter
  init: _propTypes2.default.bool,
  initialSlide: _propTypes2.default.number,
  direction: _propTypes2.default.string,
  rtl: _propTypes2.default.bool,
  speed: _propTypes2.default.number,
  setWrapperSize: _propTypes2.default.bool,
  virtualTranslate: _propTypes2.default.bool,
  width: _propTypes2.default.number,
  height: _propTypes2.default.number,
  autoHeight: _propTypes2.default.bool,
  roundLengths: _propTypes2.default.bool,
  nested: _propTypes2.default.bool,
  uniqueNavElements: _propTypes2.default.bool,
  effect: _propTypes2.default.string,
  runCallbacksOnInit: _propTypes2.default.bool,

  // slides grid
  spaceBetween: _propTypes2.default.number,
  slidesPerView: _propTypes2.default.any,
  slidesPerColumn: _propTypes2.default.number,
  slidesPerColumnFill: _propTypes2.default.string,
  slidesPerGroup: _propTypes2.default.number,
  centeredSlides: _propTypes2.default.bool,
  slidesOffsetBefore: _propTypes2.default.number,
  slidesOffsetAfter: _propTypes2.default.number,
  normalizeSlideIndex: _propTypes2.default.bool,

  // grab cursor
  grabCursor: _propTypes2.default.bool,

  // touches
  touchEventsTarget: _propTypes2.default.string,
  touchRatio: _propTypes2.default.number,
  touchAngle: _propTypes2.default.number,
  simulateTouch: _propTypes2.default.bool,
  shortSwipes: _propTypes2.default.bool,
  longSwipes: _propTypes2.default.bool,
  longSwipesRatio: _propTypes2.default.number,
  longSwipesMs: _propTypes2.default.number,
  followFinger: _propTypes2.default.bool,
  allowTouchMove: _propTypes2.default.bool,
  threshold: _propTypes2.default.number,
  touchMoveStopPropagation: _propTypes2.default.bool,
  iOSEdgeSwipeDetection: _propTypes2.default.bool,
  iOSEdgeSwipeThreshold: _propTypes2.default.number,
  touchReleaseOnEdges: _propTypes2.default.bool,
  passiveListeners: _propTypes2.default.bool,

  // touch resistance
  resistance: _propTypes2.default.bool,
  resistanceRatio: _propTypes2.default.number,

  // swiping / no swiping
  allowSlidePrev: _propTypes2.default.bool,
  allowSlideNext: _propTypes2.default.bool,
  noSwiping: _propTypes2.default.bool,
  noSwipingClass: _propTypes2.default.string,
  swipeHandler: _propTypes2.default.any,

  // clicks
  preventClicks: _propTypes2.default.bool,
  preventClicksPropagation: _propTypes2.default.bool,
  slideToClickedSlide: _propTypes2.default.bool,

  // freemode
  freeMode: _propTypes2.default.bool,
  freeModeMomentum: _propTypes2.default.bool,
  freeModeMomentumRatio: _propTypes2.default.number,
  freeModeMomentumVelocityRatio: _propTypes2.default.number,
  freeModeMomentumBounce: _propTypes2.default.bool,
  freeModeMomentumBounceRatio: _propTypes2.default.number,
  freeModeMinimumVelocity: _propTypes2.default.number,
  freeModeSticky: _propTypes2.default.bool,

  // progress
  watchSlidesProgress: _propTypes2.default.bool,
  watchSlidesVisibility: _propTypes2.default.bool,

  // images
  preloadImages: _propTypes2.default.bool,
  updateOnImagesReady: _propTypes2.default.bool,

  // loop
  loop: _propTypes2.default.bool,
  loopAdditionalSlides: _propTypes2.default.number,
  loopedSlides: _propTypes2.default.number,
  loopFillGroupWithBlank: _propTypes2.default.bool,

  // breakpoints
  breakpoints: _propTypes2.default.object,

  // observer
  observer: _propTypes2.default.bool,
  observeParents: _propTypes2.default.bool,

  // namespace
  containerModifierClass: _propTypes2.default.string,
  slideClass: _propTypes2.default.string,
  slideActiveClass: _propTypes2.default.string,
  slideDuplicatedActiveClass: _propTypes2.default.string,
  slideVisibleClass: _propTypes2.default.string,
  slideDuplicateClass: _propTypes2.default.string,
  slideNextClass: _propTypes2.default.string,
  slideDuplicatedNextClass: _propTypes2.default.string,
  slidePrevClass: _propTypes2.default.string,
  slideDuplicatedPrevClass: _propTypes2.default.string,

  // autoplay
  autoplay: _propTypes2.default.oneOfType([_propTypes2.default.bool, _propTypes2.default.shape({
    delay: _propTypes2.default.number,
    stopOnLast: _propTypes2.default.bool,
    disableOnInteraction: _propTypes2.default.bool
  })]),

  // pagination
  pagination: _propTypes2.default.shape({
    el: _propTypes2.default.string,
    type: _propTypes2.default.string,
    bulletElement: _propTypes2.default.string,
    dynamicBullets: _propTypes2.default.bool,
    hideOnClick: _propTypes2.default.bool,
    clickable: _propTypes2.default.bool,
    renderBullet: _propTypes2.default.func,
    renderFraction: _propTypes2.default.func,
    renderProgressbar: _propTypes2.default.func,
    renderCustom: _propTypes2.default.func,
    bulletClass: _propTypes2.default.string,
    bulletActiveClass: _propTypes2.default.string,
    modifierClass: _propTypes2.default.string,
    currentClass: _propTypes2.default.string,
    totalClass: _propTypes2.default.string,
    hiddenClass: _propTypes2.default.string,
    progressbarFillClass: _propTypes2.default.string,
    clickableClass: _propTypes2.default.string
  }),

  // scrollbar
  scrollbar: _propTypes2.default.shape({
    el: _propTypes2.default.any,
    hide: _propTypes2.default.bool,
    draggable: _propTypes2.default.bool,
    snapOnRelease: _propTypes2.default.bool,
    dragSize: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number])
  }),

  // navigation
  navigation: _propTypes2.default.shape({
    nextEl: _propTypes2.default.string,
    prevEl: _propTypes2.default.string,
    hideOnClick: _propTypes2.default.bool,
    disabledClass: _propTypes2.default.string,
    hiddenClass: _propTypes2.default.string
  }),

  // a11y
  a11y: _propTypes2.default.oneOfType([_propTypes2.default.bool, _propTypes2.default.shape({
    prevSlideMessage: _propTypes2.default.string,
    nextSlideMessage: _propTypes2.default.string,
    firstSlideMessage: _propTypes2.default.string,
    lastSlideMessage: _propTypes2.default.string,
    paginationBulletMessage: _propTypes2.default.string,
    notificationClass: _propTypes2.default.string
  })]),

  // zoom
  zoom: _propTypes2.default.oneOfType([_propTypes2.default.bool, _propTypes2.default.shape({
    maxRatio: _propTypes2.default.number,
    minRatio: _propTypes2.default.number,
    toggle: _propTypes2.default.bool,
    containerClass: _propTypes2.default.string,
    zoomedSlideClass: _propTypes2.default.string
  })]),

  // keyboard
  keyboard: _propTypes2.default.bool,

  // mousewheel
  mousewheel: _propTypes2.default.oneOfType([_propTypes2.default.bool, _propTypes2.default.shape({
    forceToAxis: _propTypes2.default.bool,
    releaseOnEdges: _propTypes2.default.bool,
    invert: _propTypes2.default.bool,
    sensitivity: _propTypes2.default.number,
    eventsTarged: _propTypes2.default.string
  })]),

  // hashNavigation
  hashNavigation: _propTypes2.default.oneOfType([_propTypes2.default.bool, _propTypes2.default.shape({
    watchState: _propTypes2.default.bool,
    replaceState: _propTypes2.default.bool
  })]),

  // history
  history: _propTypes2.default.oneOfType([_propTypes2.default.bool, _propTypes2.default.shape({
    key: _propTypes2.default.string,
    replaceState: _propTypes2.default.bool
  })]),

  // lazy
  lazy: _propTypes2.default.oneOfType([_propTypes2.default.bool, _propTypes2.default.shape({
    loadPrevNext: _propTypes2.default.bool,
    loadPrevNextAmount: _propTypes2.default.number,
    loadOnTransitionStart: _propTypes2.default.bool,
    elementClass: _propTypes2.default.string,
    loadingClass: _propTypes2.default.string,
    loadedClass: _propTypes2.default.string,
    preloaderClass: _propTypes2.default.string
  })]),

  // fadeEffect
  fadeEffect: _propTypes2.default.shape({
    crossFade: _propTypes2.default.bool
  }),

  // coverflowEffect
  coverflowEffect: _propTypes2.default.shape({
    slideShadows: _propTypes2.default.bool,
    rotate: _propTypes2.default.number,
    stretch: _propTypes2.default.number,
    depth: _propTypes2.default.number,
    modifier: _propTypes2.default.number
  }),

  // flipEffect
  flipEffect: _propTypes2.default.shape({
    slideShadows: _propTypes2.default.bool,
    limitRotation: _propTypes2.default.bool
  }),

  // cubeEffect
  cubeEffect: _propTypes2.default.shape({
    slideShadows: _propTypes2.default.bool,
    shadow: _propTypes2.default.bool,
    shadowOffset: _propTypes2.default.number,
    shadowScale: _propTypes2.default.number
  }),

  // controller
  controller: _propTypes2.default.oneOfType([_propTypes2.default.bool, _propTypes2.default.shape({
    control: _propTypes2.default.any,
    inverse: _propTypes2.default.bool,
    by: _propTypes2.default.string
  })]),

  // events
  on: _propTypes2.default.shape({
    init: _propTypes2.default.func,
    beforeDestroy: _propTypes2.default.func,
    slideChange: _propTypes2.default.func,
    slideChangeTransitionStart: _propTypes2.default.func,
    slideChangeTransitionEnd: _propTypes2.default.func,
    slideNextTransitionStart: _propTypes2.default.func,
    slideNextTransitionEnd: _propTypes2.default.func,
    slidePrevTransitionStart: _propTypes2.default.func,
    slidePrevTransitionEnd: _propTypes2.default.func,
    transitionStart: _propTypes2.default.func,
    onTransitionEnd: _propTypes2.default.func,
    touchStart: _propTypes2.default.func,
    touchMove: _propTypes2.default.func,
    touchMoveOpposite: _propTypes2.default.func,
    sliderMove: _propTypes2.default.func,
    touchEnd: _propTypes2.default.func,
    click: _propTypes2.default.func,
    tap: _propTypes2.default.func,
    doubleTap: _propTypes2.default.func,
    imagesReady: _propTypes2.default.func,
    progress: _propTypes2.default.func,
    reachBeginning: _propTypes2.default.func,
    reachEnd: _propTypes2.default.func,
    fromEdge: _propTypes2.default.func,
    setTranslate: _propTypes2.default.func,
    setTransition: _propTypes2.default.func,
    resize: _propTypes2.default.func
  })
};
exports.default = ReactIdSwiper;