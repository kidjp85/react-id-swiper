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

var _swiper = require('swiper/dist/js/swiper');

var _swiper2 = _interopRequireDefault(_swiper);

var _objectAssign = require('object-assign');

var _objectAssign2 = _interopRequireDefault(_objectAssign);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _utils = require('./utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ReactIdSwiper = function (_Component) {
  _inherits(ReactIdSwiper, _Component);

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
      this.buildSwiper();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      if (typeof this.swiper !== 'undefined') {
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
      this.swiper = new _swiper2.default(_reactDom2.default.findDOMNode(this), (0, _objectAssign2.default)({}, this.props));
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
          renderNextButton = _props3.renderNextButton,
          parallax = _props3.parallax,
          parallaxEl = _props3.parallaxEl,
          renderParallax = _props3.renderParallax;


      return _react2.default.createElement(
        ContainerEl,
        { className: containerClass, dir: rtl && 'rtl' },
        parallax && parallaxEl && renderParallax(this.props),
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
  },
  renderParallax: function renderParallax(_ref5) {
    var parallaxEl = _ref5.parallaxEl;
    return _react2.default.createElement('div', { className: (0, _utils.cn)(parallaxEl.el), 'data-swiper-parallax': parallaxEl.value });
  }
};
ReactIdSwiper.propTypes = {
  // react-id-swiper original parameters
  ContainerEl: _propTypes2.default.string,
  WrapperEl: _propTypes2.default.string,
  containerClass: _propTypes2.default.string,
  wrapperClass: _propTypes2.default.string,
  children: _propTypes2.default.any,
  rebuildOnUpdate: _propTypes2.default.bool,
  shouldSwiperUpdate: _propTypes2.default.bool,
  activeSlideKey: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
  renderScrollbar: _propTypes2.default.func,
  renderPagination: _propTypes2.default.func,
  renderPrevButton: _propTypes2.default.func,
  renderNextButton: _propTypes2.default.func,
  renderParallax: _propTypes2.default.func,

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