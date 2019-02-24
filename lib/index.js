"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _swiper = _interopRequireDefault(require("swiper/dist/js/swiper"));

var _objectAssign = _interopRequireDefault(require("object-assign"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _utils = require("./utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var ReactIdSwiper =
/*#__PURE__*/
function (_Component) {
  _inherits(ReactIdSwiper, _Component);

  // Default props
  // Proptypes
  function ReactIdSwiper(props) {
    var _this;

    _classCallCheck(this, ReactIdSwiper);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ReactIdSwiper).call(this, props));
    _this.renderContent = _this.renderContent.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(ReactIdSwiper, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.buildSwiper();
      var slideToIndex = this.getActiveSlideIndexFromProps();

      if (slideToIndex !== null) {
        this.swiper.slideTo(slideToIndex);
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      if (typeof this.swiper !== 'undefined') {
        var _this$props = this.props,
            rebuildOnUpdate = _this$props.rebuildOnUpdate,
            shouldSwiperUpdate = _this$props.shouldSwiperUpdate;

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

        var slideToIndex = this.getActiveSlideIndexFromProps();

        if (slideToIndex !== null) {
          this.swiper.slideTo(slideToIndex);
        }
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (typeof this.swiper !== 'undefined') this.swiper.destroy(true, true);
      delete this.swiper;
    }
  }, {
    key: "getActiveSlideIndexFromProps",
    value: function getActiveSlideIndexFromProps() {
      var activeSlideKey = this.props.activeSlideKey;

      if (!activeSlideKey) {
        return null;
      }

      var activeSlideId = null;
      var id = 0;

      _react.default.Children.forEach(this.props.children, function (child) {
        if (child) {
          if (child.key === activeSlideKey) {
            activeSlideId = id;
          }

          id += 1;
        }
      });

      return activeSlideId;
    }
  }, {
    key: "buildSwiper",
    value: function buildSwiper() {
      this.swiper = new _swiper.default(_reactDom.default.findDOMNode(this), (0, _objectAssign.default)({}, this.props));
    }
  }, {
    key: "rebuildSwiper",
    value: function rebuildSwiper() {
      this.swiper.destroy(true, true);
      this.buildSwiper();
    }
  }, {
    key: "updateSwiper",
    value: function updateSwiper() {
      if (typeof this.swiper !== 'undefined') this.swiper.update();
    }
  }, {
    key: "renderContent",
    value: function renderContent(e) {
      if (!e) return false;
      var _this$props2 = this.props,
          slideClass = _this$props2.slideClass,
          noSwiping = _this$props2.noSwiping;
      var slideClassNames = [slideClass, e.props.className];
      if (noSwiping) slideClassNames.push('swiper-no-swiping');
      return _react.default.cloneElement(e, _objectSpread({}, e.props, {
        className: slideClassNames.join(' ').trim()
      }));
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props3 = this.props,
          ContainerEl = _this$props3.ContainerEl,
          WrapperEl = _this$props3.WrapperEl,
          containerClass = _this$props3.containerClass,
          wrapperClass = _this$props3.wrapperClass,
          children = _this$props3.children,
          rtl = _this$props3.rtl,
          scrollbar = _this$props3.scrollbar,
          renderScrollbar = _this$props3.renderScrollbar,
          pagination = _this$props3.pagination,
          renderPagination = _this$props3.renderPagination,
          navigation = _this$props3.navigation,
          renderPrevButton = _this$props3.renderPrevButton,
          renderNextButton = _this$props3.renderNextButton,
          parallax = _this$props3.parallax,
          parallaxEl = _this$props3.parallaxEl,
          renderParallax = _this$props3.renderParallax;
      return _react.default.createElement(ContainerEl, {
        className: containerClass,
        dir: rtl && 'rtl'
      }, parallax && parallaxEl && renderParallax(this.props), _react.default.createElement(WrapperEl, {
        className: wrapperClass
      }, _react.default.Children.map(children, this.renderContent)), pagination && pagination.el && renderPagination(this.props), scrollbar && scrollbar.el && renderScrollbar(this.props), navigation && navigation.nextEl && renderNextButton(this.props), navigation && navigation.prevEl && renderPrevButton(this.props));
    }
  }]);

  return ReactIdSwiper;
}(_react.Component);

exports.default = ReactIdSwiper;

_defineProperty(ReactIdSwiper, "defaultProps", {
  containerClass: 'swiper-container',
  wrapperClass: 'swiper-wrapper',
  slideClass: 'swiper-slide',
  ContainerEl: 'div',
  WrapperEl: 'div',
  renderScrollbar: function renderScrollbar(_ref) {
    var scrollbar = _ref.scrollbar;
    return _react.default.createElement("div", {
      className: (0, _utils.cn)(scrollbar.el)
    });
  },
  renderPagination: function renderPagination(_ref2) {
    var pagination = _ref2.pagination;
    return _react.default.createElement("div", {
      className: (0, _utils.cn)(pagination.el)
    });
  },
  renderPrevButton: function renderPrevButton(_ref3) {
    var navigation = _ref3.navigation;
    return _react.default.createElement("div", {
      className: (0, _utils.cn)(navigation.prevEl)
    });
  },
  renderNextButton: function renderNextButton(_ref4) {
    var navigation = _ref4.navigation;
    return _react.default.createElement("div", {
      className: (0, _utils.cn)(navigation.nextEl)
    });
  },
  renderParallax: function renderParallax(_ref5) {
    var parallaxEl = _ref5.parallaxEl;
    return _react.default.createElement("div", {
      className: (0, _utils.cn)(parallaxEl.el),
      "data-swiper-parallax": parallaxEl.value
    });
  }
});

_defineProperty(ReactIdSwiper, "propTypes", {
  // react-id-swiper original parameters
  ContainerEl: _propTypes.default.string,
  WrapperEl: _propTypes.default.string,
  containerClass: _propTypes.default.string,
  wrapperClass: _propTypes.default.string,
  children: _propTypes.default.any,
  rebuildOnUpdate: _propTypes.default.bool,
  shouldSwiperUpdate: _propTypes.default.bool,
  activeSlideKey: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]),
  renderScrollbar: _propTypes.default.func,
  renderPagination: _propTypes.default.func,
  renderPrevButton: _propTypes.default.func,
  renderNextButton: _propTypes.default.func,
  renderParallax: _propTypes.default.func,
  // parallax
  parallax: _propTypes.default.bool,
  parallaxEl: _propTypes.default.shape({
    el: _propTypes.default.string,
    value: _propTypes.default.string
  }),
  // swiper parameter
  init: _propTypes.default.bool,
  initialSlide: _propTypes.default.number,
  direction: _propTypes.default.string,
  rtl: _propTypes.default.bool,
  speed: _propTypes.default.number,
  setWrapperSize: _propTypes.default.bool,
  virtualTranslate: _propTypes.default.bool,
  width: _propTypes.default.number,
  height: _propTypes.default.number,
  autoHeight: _propTypes.default.bool,
  roundLengths: _propTypes.default.bool,
  nested: _propTypes.default.bool,
  uniqueNavElements: _propTypes.default.bool,
  effect: _propTypes.default.string,
  runCallbacksOnInit: _propTypes.default.bool,
  // slides grid
  spaceBetween: _propTypes.default.number,
  slidesPerView: _propTypes.default.any,
  slidesPerColumn: _propTypes.default.number,
  slidesPerColumnFill: _propTypes.default.string,
  slidesPerGroup: _propTypes.default.number,
  centeredSlides: _propTypes.default.bool,
  slidesOffsetBefore: _propTypes.default.number,
  slidesOffsetAfter: _propTypes.default.number,
  normalizeSlideIndex: _propTypes.default.bool,
  // grab cursor
  grabCursor: _propTypes.default.bool,
  // touches
  touchEventsTarget: _propTypes.default.string,
  touchRatio: _propTypes.default.number,
  touchAngle: _propTypes.default.number,
  simulateTouch: _propTypes.default.bool,
  shortSwipes: _propTypes.default.bool,
  longSwipes: _propTypes.default.bool,
  longSwipesRatio: _propTypes.default.number,
  longSwipesMs: _propTypes.default.number,
  followFinger: _propTypes.default.bool,
  allowTouchMove: _propTypes.default.bool,
  threshold: _propTypes.default.number,
  touchMoveStopPropagation: _propTypes.default.bool,
  iOSEdgeSwipeDetection: _propTypes.default.bool,
  iOSEdgeSwipeThreshold: _propTypes.default.number,
  touchReleaseOnEdges: _propTypes.default.bool,
  passiveListeners: _propTypes.default.bool,
  // touch resistance
  resistance: _propTypes.default.bool,
  resistanceRatio: _propTypes.default.number,
  // swiping / no swiping
  allowSlidePrev: _propTypes.default.bool,
  allowSlideNext: _propTypes.default.bool,
  noSwiping: _propTypes.default.bool,
  noSwipingClass: _propTypes.default.string,
  swipeHandler: _propTypes.default.any,
  // clicks
  preventClicks: _propTypes.default.bool,
  preventClicksPropagation: _propTypes.default.bool,
  slideToClickedSlide: _propTypes.default.bool,
  // freemode
  freeMode: _propTypes.default.bool,
  freeModeMomentum: _propTypes.default.bool,
  freeModeMomentumRatio: _propTypes.default.number,
  freeModeMomentumVelocityRatio: _propTypes.default.number,
  freeModeMomentumBounce: _propTypes.default.bool,
  freeModeMomentumBounceRatio: _propTypes.default.number,
  freeModeMinimumVelocity: _propTypes.default.number,
  freeModeSticky: _propTypes.default.bool,
  // progress
  watchSlidesProgress: _propTypes.default.bool,
  watchSlidesVisibility: _propTypes.default.bool,
  // images
  preloadImages: _propTypes.default.bool,
  updateOnImagesReady: _propTypes.default.bool,
  // loop
  loop: _propTypes.default.bool,
  loopAdditionalSlides: _propTypes.default.number,
  loopedSlides: _propTypes.default.number,
  loopFillGroupWithBlank: _propTypes.default.bool,
  // breakpoints
  breakpoints: _propTypes.default.object,
  // observer
  observer: _propTypes.default.bool,
  observeParents: _propTypes.default.bool,
  // namespace
  containerModifierClass: _propTypes.default.string,
  slideClass: _propTypes.default.string,
  slideActiveClass: _propTypes.default.string,
  slideDuplicatedActiveClass: _propTypes.default.string,
  slideVisibleClass: _propTypes.default.string,
  slideDuplicateClass: _propTypes.default.string,
  slideNextClass: _propTypes.default.string,
  slideDuplicatedNextClass: _propTypes.default.string,
  slidePrevClass: _propTypes.default.string,
  slideDuplicatedPrevClass: _propTypes.default.string,
  // autoplay
  autoplay: _propTypes.default.oneOfType([_propTypes.default.bool, _propTypes.default.shape({
    delay: _propTypes.default.number,
    stopOnLast: _propTypes.default.bool,
    disableOnInteraction: _propTypes.default.bool
  })]),
  // pagination
  pagination: _propTypes.default.shape({
    el: _propTypes.default.string,
    type: _propTypes.default.string,
    bulletElement: _propTypes.default.string,
    dynamicBullets: _propTypes.default.bool,
    hideOnClick: _propTypes.default.bool,
    clickable: _propTypes.default.bool,
    renderBullet: _propTypes.default.func,
    renderFraction: _propTypes.default.func,
    renderProgressbar: _propTypes.default.func,
    renderCustom: _propTypes.default.func,
    bulletClass: _propTypes.default.string,
    bulletActiveClass: _propTypes.default.string,
    modifierClass: _propTypes.default.string,
    currentClass: _propTypes.default.string,
    totalClass: _propTypes.default.string,
    hiddenClass: _propTypes.default.string,
    progressbarFillClass: _propTypes.default.string,
    clickableClass: _propTypes.default.string
  }),
  // scrollbar
  scrollbar: _propTypes.default.shape({
    el: _propTypes.default.any,
    hide: _propTypes.default.bool,
    draggable: _propTypes.default.bool,
    snapOnRelease: _propTypes.default.bool,
    dragSize: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number])
  }),
  // navigation
  navigation: _propTypes.default.shape({
    nextEl: _propTypes.default.string,
    prevEl: _propTypes.default.string,
    hideOnClick: _propTypes.default.bool,
    disabledClass: _propTypes.default.string,
    hiddenClass: _propTypes.default.string
  }),
  // a11y
  a11y: _propTypes.default.oneOfType([_propTypes.default.bool, _propTypes.default.shape({
    prevSlideMessage: _propTypes.default.string,
    nextSlideMessage: _propTypes.default.string,
    firstSlideMessage: _propTypes.default.string,
    lastSlideMessage: _propTypes.default.string,
    paginationBulletMessage: _propTypes.default.string,
    notificationClass: _propTypes.default.string
  })]),
  // zoom
  zoom: _propTypes.default.oneOfType([_propTypes.default.bool, _propTypes.default.shape({
    maxRatio: _propTypes.default.number,
    minRatio: _propTypes.default.number,
    toggle: _propTypes.default.bool,
    containerClass: _propTypes.default.string,
    zoomedSlideClass: _propTypes.default.string
  })]),
  // keyboard
  keyboard: _propTypes.default.bool,
  // mousewheel
  mousewheel: _propTypes.default.oneOfType([_propTypes.default.bool, _propTypes.default.shape({
    forceToAxis: _propTypes.default.bool,
    releaseOnEdges: _propTypes.default.bool,
    invert: _propTypes.default.bool,
    sensitivity: _propTypes.default.number,
    eventsTarged: _propTypes.default.string
  })]),
  // hashNavigation
  hashNavigation: _propTypes.default.oneOfType([_propTypes.default.bool, _propTypes.default.shape({
    watchState: _propTypes.default.bool,
    replaceState: _propTypes.default.bool
  })]),
  // history
  history: _propTypes.default.oneOfType([_propTypes.default.bool, _propTypes.default.shape({
    key: _propTypes.default.string,
    replaceState: _propTypes.default.bool
  })]),
  // lazy
  lazy: _propTypes.default.oneOfType([_propTypes.default.bool, _propTypes.default.shape({
    loadPrevNext: _propTypes.default.bool,
    loadPrevNextAmount: _propTypes.default.number,
    loadOnTransitionStart: _propTypes.default.bool,
    elementClass: _propTypes.default.string,
    loadingClass: _propTypes.default.string,
    loadedClass: _propTypes.default.string,
    preloaderClass: _propTypes.default.string
  })]),
  // fadeEffect
  fadeEffect: _propTypes.default.shape({
    crossFade: _propTypes.default.bool
  }),
  // coverflowEffect
  coverflowEffect: _propTypes.default.shape({
    slideShadows: _propTypes.default.bool,
    rotate: _propTypes.default.number,
    stretch: _propTypes.default.number,
    depth: _propTypes.default.number,
    modifier: _propTypes.default.number
  }),
  // flipEffect
  flipEffect: _propTypes.default.shape({
    slideShadows: _propTypes.default.bool,
    limitRotation: _propTypes.default.bool
  }),
  // cubeEffect
  cubeEffect: _propTypes.default.shape({
    slideShadows: _propTypes.default.bool,
    shadow: _propTypes.default.bool,
    shadowOffset: _propTypes.default.number,
    shadowScale: _propTypes.default.number
  }),
  // controller
  controller: _propTypes.default.oneOfType([_propTypes.default.bool, _propTypes.default.shape({
    control: _propTypes.default.any,
    inverse: _propTypes.default.bool,
    by: _propTypes.default.string
  })]),
  // events
  on: _propTypes.default.shape({
    init: _propTypes.default.func,
    beforeDestroy: _propTypes.default.func,
    slideChange: _propTypes.default.func,
    slideChangeTransitionStart: _propTypes.default.func,
    slideChangeTransitionEnd: _propTypes.default.func,
    slideNextTransitionStart: _propTypes.default.func,
    slideNextTransitionEnd: _propTypes.default.func,
    slidePrevTransitionStart: _propTypes.default.func,
    slidePrevTransitionEnd: _propTypes.default.func,
    transitionStart: _propTypes.default.func,
    onTransitionEnd: _propTypes.default.func,
    touchStart: _propTypes.default.func,
    touchMove: _propTypes.default.func,
    touchMoveOpposite: _propTypes.default.func,
    sliderMove: _propTypes.default.func,
    touchEnd: _propTypes.default.func,
    click: _propTypes.default.func,
    tap: _propTypes.default.func,
    doubleTap: _propTypes.default.func,
    imagesReady: _propTypes.default.func,
    progress: _propTypes.default.func,
    reachBeginning: _propTypes.default.func,
    reachEnd: _propTypes.default.func,
    fromEdge: _propTypes.default.func,
    setTranslate: _propTypes.default.func,
    setTransition: _propTypes.default.func,
    resize: _propTypes.default.func
  })
});