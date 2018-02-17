var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Swiper from 'swiper/dist/js/swiper';
import objectAssign from 'object-assign';
import PropTypes from 'prop-types';

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
      this.swiper = new Swiper(ReactDOM.findDOMNode(this), objectAssign({}, this.props));
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps() {
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
        React.Children.forEach(this.props.children, function (child) {
          if (child) {
            if (child.key === _this2.props.activeSlideKey) {
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
    key: 'rebuildSwiper',
    value: function rebuildSwiper() {
      this.swiper.destroy(true, true);
      this.swiper = new Swiper(ReactDOM.findDOMNode(this), objectAssign({}, this.props));
    }
  }, {
    key: 'validateClass',
    value: function validateClass(className) {
      if (typeof className !== 'string') return '';
      return className.replace(/\.|#/g, ' ').trim();
    }

    // Scrollbar

  }, {
    key: 'renderScrollBar',
    value: function renderScrollBar() {
      var _props = this.props,
          scrollbar = _props.scrollbar,
          renderCustomScrolbar = _props.renderCustomScrolbar,
          scrollbarCustomizedClass = _props.scrollbarCustomizedClass;

      // Return false if required param is not existed

      if (!scrollbar || !scrollbar.el) return false;

      // Return customized rendering for scrollbar if existed
      if (typeof renderCustomScrolbar === 'function') return renderCustomScrolbar();

      // Validate classnames
      var customizedClass = this.validateClass(scrollbarCustomizedClass);
      var scrollbarClass = this.validateClass(scrollbar.el);

      return React.createElement('div', { className: [scrollbarClass, customizedClass].join(' ').trim() });
    }

    // Pagination bullets

  }, {
    key: 'renderPagination',
    value: function renderPagination() {
      var _props2 = this.props,
          pagination = _props2.pagination,
          renderCustomPagination = _props2.renderCustomPagination,
          paginationCustomizedClass = _props2.paginationCustomizedClass;

      // Return false if required param is not existed

      if (!pagination || !pagination.el) return false;

      // Return customized rendering for pagination if existed
      if (typeof renderCustomPagination === 'function') return renderCustomPagination();

      var customizedClass = this.validateClass(paginationCustomizedClass);
      var paginationClass = this.validateClass(pagination.el);

      return React.createElement('div', { className: [paginationClass, customizedClass].join(' ').trim() });
    }

    // Next button

  }, {
    key: 'renderNextButton',
    value: function renderNextButton() {
      var _props3 = this.props,
          navigation = _props3.navigation,
          nextButtonCustomizedClass = _props3.nextButtonCustomizedClass,
          renderCustomNextButton = _props3.renderCustomNextButton;

      // Return false if required param is not existed

      if (!navigation || !navigation.nextEl) return false;

      // Return customized rendering for next button if existed
      if (typeof renderCustomNextButton === 'function') return renderCustomNextButton();

      var customizedClass = this.validateClass(nextButtonCustomizedClass);
      var nextButtonClass = this.validateClass(navigation.nextEl);

      return React.createElement('div', { className: [nextButtonClass, customizedClass].join(' ').trim() });
    }

    // Prev button

  }, {
    key: 'renderPrevButton',
    value: function renderPrevButton() {
      var _props4 = this.props,
          navigation = _props4.navigation,
          prevButtonCustomizedClass = _props4.prevButtonCustomizedClass,
          renderCustomPrevButton = _props4.renderCustomPrevButton;

      // Return false if required param is not existed

      if (!navigation || !navigation.prevEl) return false;

      // Return customized rendering for next button if existed
      if (typeof renderCustomPrevButton === 'function') return renderCustomPrevButton();

      var customizedClass = this.validateClass(prevButtonCustomizedClass);
      var prevButtonClass = this.validateClass(navigation.prevEl);

      return React.createElement('div', { className: [prevButtonClass, customizedClass].join(' ').trim() });
    }

    // Parallax

  }, {
    key: 'renderParallax',
    value: function renderParallax() {
      var _props5 = this.props,
          parallax = _props5.parallax,
          renderCustomParallax = _props5.renderCustomParallax,
          parallaxEl = _props5.parallaxEl;

      // Return false if required param is not existed

      if (!parallax || !parallaxEl) return false;

      // Return customized rendering for next button if existed
      if (typeof renderCustomParallax === 'function') return renderCustomParallax();

      var parallaxBgClass = this.validateClass(this.props.parallaxEl.el);

      return React.createElement('div', { className: parallaxBgClass, 'data-swiper-parallax': this.props.parallaxEl.value });
    }
  }, {
    key: 'renderContent',
    value: function renderContent(e) {
      if (!e) return null;

      var _props6 = this.props,
          slideClass = _props6.slideClass,
          noSwiping = _props6.noSwiping;

      var noSwipingClass = noSwiping ? 'swiper-no-swiping' : '';
      var childProps = _extends({}, e.props, {
        className: [slideClass, e.props.className, noSwipingClass].join(' ').trim()
      });

      return React.cloneElement(e, _extends({}, childProps));
    }
  }, {
    key: 'render',
    value: function render() {
      var _props7 = this.props,
          ContainerEl = _props7.ContainerEl,
          WrapperEl = _props7.WrapperEl,
          containerClass = _props7.containerClass,
          wrapperClass = _props7.wrapperClass,
          children = _props7.children,
          rtl = _props7.rtl;

      var rtlProp = rtl ? { dir: 'rtl' } : {};

      return React.createElement(
        ContainerEl,
        _extends({ className: containerClass }, rtlProp),
        this.renderParallax(),
        React.createElement(
          WrapperEl,
          { className: wrapperClass },
          React.Children.map(children, this.renderContent)
        ),
        this.renderPagination(),
        this.renderScrollBar(),
        this.renderNextButton(),
        this.renderPrevButton()
      );
    }
  }]);

  return ReactIdSwiper;
}(Component);

ReactIdSwiper.defaultProps = {
  containerClass: 'swiper-container',
  wrapperClass: 'swiper-wrapper',
  slideClass: 'swiper-slide',
  ContainerEl: 'div',
  WrapperEl: 'div'
};
ReactIdSwiper.propTypes = {
  // react-id-swiper original parameter
  ContainerEl: PropTypes.string,
  WrapperEl: PropTypes.string,
  containerClass: PropTypes.string,
  wrapperClass: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.element]),
  rebuildOnUpdate: PropTypes.bool,
  shouldSwiperUpdate: PropTypes.bool,
  prevButtonCustomizedClass: PropTypes.string,
  nextButtonCustomizedClass: PropTypes.string,
  paginationCustomizedClass: PropTypes.string,
  scrollbarCustomizedClass: PropTypes.string,
  activeSlideKey: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  renderCustomPrevButton: PropTypes.func,
  renderCustomNextButton: PropTypes.func,
  renderCustomScrolbar: PropTypes.func,
  renderCustomPagination: PropTypes.func,
  renderCustomParallax: PropTypes.func,

  // parallax
  parallax: PropTypes.bool,
  parallaxEl: PropTypes.shape({
    el: PropTypes.string,
    value: PropTypes.string
  }),

  // swiper parameter
  init: PropTypes.bool,
  initialSlide: PropTypes.number,
  direction: PropTypes.string,
  rtl: PropTypes.bool,
  speed: PropTypes.number,
  setWrapperSize: PropTypes.bool,
  virtualTranslate: PropTypes.bool,
  width: PropTypes.number,
  height: PropTypes.number,
  autoHeight: PropTypes.bool,
  roundLengths: PropTypes.bool,
  nested: PropTypes.bool,
  uniqueNavElements: PropTypes.bool,
  effect: PropTypes.string,
  runCallbacksOnInit: PropTypes.bool,

  // slides grid
  spaceBetween: PropTypes.number,
  slidesPerView: PropTypes.any,
  slidesPerColumn: PropTypes.number,
  slidesPerColumnFill: PropTypes.string,
  slidesPerGroup: PropTypes.number,
  centeredSlides: PropTypes.bool,
  slidesOffsetBefore: PropTypes.number,
  slidesOffsetAfter: PropTypes.number,
  normalizeSlideIndex: PropTypes.bool,

  // grab cursor
  grabCursor: PropTypes.bool,

  // touches
  touchEventsTarget: PropTypes.string,
  touchRatio: PropTypes.number,
  touchAngle: PropTypes.number,
  simulateTouch: PropTypes.bool,
  shortSwipes: PropTypes.bool,
  longSwipes: PropTypes.bool,
  longSwipesRatio: PropTypes.number,
  longSwipesMs: PropTypes.number,
  followFinger: PropTypes.bool,
  allowTouchMove: PropTypes.bool,
  threshold: PropTypes.number,
  touchMoveStopPropagation: PropTypes.bool,
  iOSEdgeSwipeDetection: PropTypes.bool,
  iOSEdgeSwipeThreshold: PropTypes.number,
  touchReleaseOnEdges: PropTypes.bool,
  passiveListeners: PropTypes.bool,

  // touch resistance
  resistance: PropTypes.bool,
  resistanceRatio: PropTypes.number,

  // swiping / no swiping
  allowSlidePrev: PropTypes.bool,
  allowSlideNext: PropTypes.bool,
  noSwiping: PropTypes.bool,
  noSwipingClass: PropTypes.string,
  swipeHandler: PropTypes.any,

  // clicks
  preventClicks: PropTypes.bool,
  preventClicksPropagation: PropTypes.bool,
  slideToClickedSlide: PropTypes.bool,

  // freemode
  freeMode: PropTypes.bool,
  freeModeMomentum: PropTypes.bool,
  freeModeMomentumRatio: PropTypes.number,
  freeModeMomentumVelocityRatio: PropTypes.number,
  freeModeMomentumBounce: PropTypes.bool,
  freeModeMomentumBounceRatio: PropTypes.number,
  freeModeMinimumVelocity: PropTypes.number,
  freeModeSticky: PropTypes.bool,

  // progress
  watchSlidesProgress: PropTypes.bool,
  watchSlidesVisibility: PropTypes.bool,

  // images
  preloadImages: PropTypes.bool,
  updateOnImagesReady: PropTypes.bool,

  // loop
  loop: PropTypes.bool,
  loopAdditionalSlides: PropTypes.number,
  loopedSlides: PropTypes.number,
  loopFillGroupWithBlank: PropTypes.bool,

  // breakpoints
  breakpoints: PropTypes.object,

  // observer
  observer: PropTypes.bool,
  observeParents: PropTypes.bool,

  // namespace
  containerModifierClass: PropTypes.string,
  slideClass: PropTypes.string,
  slideActiveClass: PropTypes.string,
  slideDuplicatedActiveClass: PropTypes.string,
  slideVisibleClass: PropTypes.string,
  slideDuplicateClass: PropTypes.string,
  slideNextClass: PropTypes.string,
  slideDuplicatedNextClass: PropTypes.string,
  slidePrevClass: PropTypes.string,
  slideDuplicatedPrevClass: PropTypes.string,

  // autoplay
  autoplay: PropTypes.oneOfType([PropTypes.bool, PropTypes.shape({
    delay: PropTypes.number,
    stopOnLast: PropTypes.bool,
    disableOnInteraction: PropTypes.bool
  })]),

  // pagination
  pagination: PropTypes.shape({
    el: PropTypes.string,
    type: PropTypes.string,
    bulletElement: PropTypes.string,
    dynamicBullets: PropTypes.bool,
    hideOnClick: PropTypes.bool,
    clickable: PropTypes.bool,
    renderBullet: PropTypes.func,
    renderFraction: PropTypes.func,
    renderProgressbar: PropTypes.func,
    renderCustom: PropTypes.func,
    bulletClass: PropTypes.string,
    bulletActiveClass: PropTypes.string,
    modifierClass: PropTypes.string,
    currentClass: PropTypes.string,
    totalClass: PropTypes.string,
    hiddenClass: PropTypes.string,
    progressbarFillClass: PropTypes.string,
    clickableClass: PropTypes.string
  }),

  // scrollbar
  scrollbar: PropTypes.shape({
    el: PropTypes.any,
    hide: PropTypes.bool,
    draggable: PropTypes.bool,
    snapOnRelease: PropTypes.bool,
    dragSize: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
  }),

  // navigation
  navigation: PropTypes.shape({
    nextEl: PropTypes.string,
    prevEl: PropTypes.string,
    hideOnClick: PropTypes.bool,
    disabledClass: PropTypes.string,
    hiddenClass: PropTypes.string
  }),

  // a11y
  a11y: PropTypes.oneOfType([PropTypes.bool, PropTypes.shape({
    prevSlideMessage: PropTypes.string,
    nextSlideMessage: PropTypes.string,
    firstSlideMessage: PropTypes.string,
    lastSlideMessage: PropTypes.string,
    paginationBulletMessage: PropTypes.string,
    notificationClass: PropTypes.string
  })]),

  // zoom
  zoom: PropTypes.oneOfType([PropTypes.bool, PropTypes.shape({
    maxRatio: PropTypes.number,
    minRatio: PropTypes.number,
    toggle: PropTypes.bool,
    containerClass: PropTypes.string,
    zoomedSlideClass: PropTypes.string
  })]),

  // keyboard
  keyboard: PropTypes.bool,

  // mousewheel
  mousewheel: PropTypes.oneOfType([PropTypes.bool, PropTypes.shape({
    forceToAxis: PropTypes.bool,
    releaseOnEdges: PropTypes.bool,
    invert: PropTypes.bool,
    sensitivity: PropTypes.number,
    eventsTarged: PropTypes.string
  })]),

  // hashNavigation
  hashNavigation: PropTypes.oneOfType([PropTypes.bool, PropTypes.shape({
    watchState: PropTypes.bool,
    replaceState: PropTypes.bool
  })]),

  // history
  history: PropTypes.oneOfType([PropTypes.bool, PropTypes.shape({
    key: PropTypes.string,
    replaceState: PropTypes.bool
  })]),

  // lazy
  lazy: PropTypes.oneOfType([PropTypes.bool, PropTypes.shape({
    loadPrevNext: PropTypes.bool,
    loadPrevNextAmount: PropTypes.number,
    loadOnTransitionStart: PropTypes.bool,
    elementClass: PropTypes.string,
    loadingClass: PropTypes.string,
    loadedClass: PropTypes.string,
    preloaderClass: PropTypes.string
  })]),

  // fadeEffect
  fadeEffect: PropTypes.shape({
    crossFade: PropTypes.bool
  }),

  // coverflowEffect
  coverflowEffect: PropTypes.shape({
    slideShadows: PropTypes.bool,
    rotate: PropTypes.number,
    stretch: PropTypes.number,
    depth: PropTypes.number,
    modifier: PropTypes.number
  }),

  // flipEffect
  flipEffect: PropTypes.shape({
    slideShadows: PropTypes.bool,
    limitRotation: PropTypes.bool
  }),

  // cubeEffect
  cubeEffect: PropTypes.shape({
    slideShadows: PropTypes.bool,
    shadow: PropTypes.bool,
    shadowOffset: PropTypes.number,
    shadowScale: PropTypes.number
  }),

  // controller
  controller: PropTypes.oneOfType([PropTypes.bool, PropTypes.shape({
    control: PropTypes.any,
    inverse: PropTypes.bool,
    by: PropTypes.string
  })]),

  // events
  on: PropTypes.shape({
    init: PropTypes.func,
    beforeDestroy: PropTypes.func,
    slideChange: PropTypes.func,
    slideChangeTransitionStart: PropTypes.func,
    slideChangeTransitionEnd: PropTypes.func,
    slideNextTransitionStart: PropTypes.func,
    slideNextTransitionEnd: PropTypes.func,
    slidePrevTransitionStart: PropTypes.func,
    slidePrevTransitionEnd: PropTypes.func,
    transitionStart: PropTypes.func,
    onTransitionEnd: PropTypes.func,
    touchStart: PropTypes.func,
    touchMove: PropTypes.func,
    touchMoveOpposite: PropTypes.func,
    sliderMove: PropTypes.func,
    touchEnd: PropTypes.func,
    click: PropTypes.func,
    tap: PropTypes.func,
    doubleTap: PropTypes.func,
    imagesReady: PropTypes.func,
    progress: PropTypes.func,
    reachBeginning: PropTypes.func,
    reachEnd: PropTypes.func,
    fromEdge: PropTypes.func,
    setTranslate: PropTypes.func,
    setTransition: PropTypes.func,
    resize: PropTypes.func
  })
};
export default ReactIdSwiper;