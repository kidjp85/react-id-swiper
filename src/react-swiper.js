(function (root, factory) {
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = factory(
      require('react'),
      require('react-dom'),
      require('swiper'),
      require('object-assign')
    );
  } else {
    root.ReactIDangerousSwiper = factory(
      root.React,
      root.ReactDOM,
      root.Swiper,
      root.objectAssign
    );
  }
}(this, function (React, ReactDOM, Swiper, objectAssign) {
  'use strict';

  var defaultProps = {
    containerClass: 'swiper-container',
    wrapperClass: 'swiper-wrapper', 
    slideClass: 'swiper-slide'
  }

  var ReactIDangerousSwiper = React.createClass({
    displayName: 'ReactIDangerousSwiper',
    // http://idangero.us/swiper/api/#.VwH7iRJ95hE
    propTypes: {
      initialSlide: React.PropTypes.number,
      direction: React.PropTypes.string,
      speed: React.PropTypes.number,
      setWrapperSize: React.PropTypes.bool,
      virtualTranslate: React.PropTypes.bool,
      width: React.PropTypes.number,
      height: React.PropTypes.number,
      autoHeight: React.PropTypes.bool,
      roundLengths: React.PropTypes.bool,
      nested: React.PropTypes.bool,
      autoplay: React.PropTypes.number,
      autoplayStopOnLast: React.PropTypes.bool,
      autoplayDisableOnInteraction: React.PropTypes.bool,
      watchSlidesProgress: React.PropTypes.bool,
      watchSlidesVisibility: React.PropTypes.bool,
      freeMode: React.PropTypes.bool,
      freeModeMomentum: React.PropTypes.bool,
      freeModeMomentumRatio: React.PropTypes.number,
      freeModeMomentumBounce: React.PropTypes.bool,
      freeModeMomentumBounceRatio: React.PropTypes.number,
      freeModeMinimumVelocity: React.PropTypes.number,
      freeModeSticky: React.PropTypes.bool,
      effect: React.PropTypes.string,
      fade: React.PropTypes.object,
      cube: React.PropTypes.object,
      coverflow: React.PropTypes.object,
      flip: React.PropTypes.object,
      parallax: React.PropTypes.bool,
      spaceBetween: React.PropTypes.number,
      slidesPerColumn: React.PropTypes.number,
      slidesPerColumnFill: React.PropTypes.string,
      slidesPerGroup: React.PropTypes.number,
      centeredSlides: React.PropTypes.bool,
      slidesOffsetBefore: React.PropTypes.number,
      slidesOffsetAfter: React.PropTypes.number,
      grabCursor: React.PropTypes.bool,
      touchEventsTarget: React.PropTypes.string,
      touchRatio: React.PropTypes.number,
      touchAngle: React.PropTypes.number,
      simulateTouch: React.PropTypes.bool,
      shortSwipes: React.PropTypes.bool,
      longSwipes: React.PropTypes.bool,
      longSwipesRatio: React.PropTypes.number,
      longSwipesMs: React.PropTypes.number,
      followFinger: React.PropTypes.bool,
      onlyExternal: React.PropTypes.bool,
      threshold: React.PropTypes.number,
      touchMoveStopPropagation: React.PropTypes.bool,
      iOSEdgeSwipeDetection: React.PropTypes.bool,
      iOSEdgeSwipeThreshold: React.PropTypes.number,
      resistance: React.PropTypes.bool,
      resistanceRatio: React.PropTypes.number,
      preventClicks: React.PropTypes.bool,
      preventClicksPropagation: React.PropTypes.bool,
      slideToClickedSlide: React.PropTypes.bool,
      allowSwipeToPrev: React.PropTypes.bool,
      allowSwipeToNext: React.PropTypes.bool,
      noSwiping: React.PropTypes.bool,
      noSwipingClass: React.PropTypes.string,
      uniqueNavElements: React.PropTypes.bool,
      paginationType: React.PropTypes.string,
      paginationHide: React.PropTypes.bool,
      paginationClickable: React.PropTypes.bool,
      paginationElement: React.PropTypes.string,
      paginationBulletRender: React.PropTypes.func,
      paginationFractionRender: React.PropTypes.func,
      paginationProgressRender: React.PropTypes.func,
      paginationCustomRender: React.PropTypes.func,
      scrollbar: React.PropTypes.string,
      scrollbarHide: React.PropTypes.bool,
      scrollbarDraggable: React.PropTypes.bool,
      scrollbarSnapOnRelease: React.PropTypes.bool,
      prevButton: React.PropTypes.string,
      nextButton: React.PropTypes.string,
      a11y: React.PropTypes.bool,
      prevSlideMessage: React.PropTypes.string,
      nextSlideMessage: React.PropTypes.string,
      firstSlideMessage: React.PropTypes.string,
      lastSlideMessage: React.PropTypes.string,
      paginationBulletMessage: React.PropTypes.string,
      keyboardControl: React.PropTypes.bool,
      mousewheelControl: React.PropTypes.bool,
      mousewheelForceToAxis: React.PropTypes.bool,
      mousewheelReleaseOnEdges: React.PropTypes.bool,
      mousewheelInvert: React.PropTypes.bool,
      mousewheelSensitivity: React.PropTypes.number,
      hashnav: React.PropTypes.bool,
      preloadImages: React.PropTypes.bool,
      updateOnImagesReady: React.PropTypes.bool,
      lazyLoading: React.PropTypes.bool,
      lazyLoadingInPrevNext: React.PropTypes.bool,
      lazyLoadingInPrevNextAmount: React.PropTypes.number,
      lazyLoadingOnTransitionStart: React.PropTypes.bool,
      loop: React.PropTypes.bool,
      loopAdditionalSlides: React.PropTypes.number,
      loopedSlides: React.PropTypes.number,
      controlInverse: React.PropTypes.bool,
      controlBy: React.PropTypes.string,
      observer: React.PropTypes.bool,
      observeParents: React.PropTypes.bool,
      breakpoints: React.PropTypes.object,
      runCallbacksOnInit: React.PropTypes.bool,
      onInit: React.PropTypes.func,
      onSlideChangeStart: React.PropTypes.func,
      onSlideChangeEnd: React.PropTypes.func,
      onSlideNextStart: React.PropTypes.func,
      onSlideNextEnd: React.PropTypes.func,
      onSlidePrevStart: React.PropTypes.func,
      onSlidePrevEnd: React.PropTypes.func,
      onTransitionStart: React.PropTypes.func,
      onTransitionEnd: React.PropTypes.func,
      onTouchStart: React.PropTypes.func,
      onTouchMove: React.PropTypes.func,
      onTouchMoveOpposite: React.PropTypes.func,
      onSliderMove: React.PropTypes.func,
      onTouchEnd: React.PropTypes.func,
      onClick: React.PropTypes.func,
      onTap: React.PropTypes.func,
      onDoubleTap: React.PropTypes.func,
      onImagesReady: React.PropTypes.func,
      onProgress: React.PropTypes.func,
      onReachBeginning: React.PropTypes.func,
      onReachEnd: React.PropTypes.func,
      onDestroy: React.PropTypes.func,
      onSetTranslate: React.PropTypes.func,
      onSetTransition: React.PropTypes.func,
      onAutoplay: React.PropTypes.func,
      onAutoplayStart: React.PropTypes.func,
      onAutoplayStop: React.PropTypes.func,
      onLazyImageLoad: React.PropTypes.func,
      onLazyImageReady: React.PropTypes.func,
      onPaginationRendered: React.PropTypes.func,
      slideClass: React.PropTypes.string,
      slideActiveClass: React.PropTypes.string,
      slideVisibleClass: React.PropTypes.string,
      slideDuplicateClass: React.PropTypes.string,
      slideNextClass: React.PropTypes.string,
      slidePrevClass: React.PropTypes.string,
      bulletClass: React.PropTypes.string,
      bulletActiveClass: React.PropTypes.string,
      paginationHiddenClass: React.PropTypes.string,
      paginationCurrentClass: React.PropTypes.string,
      paginationTotalClass: React.PropTypes.string,
      paginationProgressbarClass: React.PropTypes.string,
      buttonDisabledClass: React.PropTypes.string,
      prevButtonCustomizedClass: React.PropTypes.string,
      nextButtonCustomizedClass: React.PropTypes.string,
      paginationCustomizedClass: React.PropTypes.string,
      scrollbarCustomizedClass: React.PropTypes.string
    },

    getDefaultProps: function() {
      return defaultProps;
    },

    componentDidMount: function () {
      this.swiper = Swiper(ReactDOM.findDOMNode(this), objectAssign({}, this.props));
    },

    componentDidUpdate: function () {
      if(this.props.rebuildOnUpdate && typeof this.swiper !== 'undefined') {
        this.swiper.destroy(true, true);
        this.swiper = Swiper(ReactDOM.findDOMNode(this), objectAssign({}, this.props));
      }
    },

    componentWillUnmount: function () {
      if (typeof this.swiper !== 'undefined') this.swiper.destroy(true, true);
      delete this.swiper;
    },

    shouldComponentUpdate: function (nextProps) {
      return nextProps.children !== this.props.children;
    },

    componentWillReceiveProps: function (nextProps) {
      if (this.props.rebuildOnUpdate  && typeof this.swiper !== 'undefined') {
        this.swiper.destroy(true, true);
        this.swiper = Swiper(ReactDOM.findDOMNode(this), objectAssign({}, nextProps));
      }
    },

    validateClass: function(className) {
      if (typeof className !== 'string') return '';
      return className.replace(/\.|#/g, " ").trim();
    },

    renderScrollBar: function () {
      if (!this.props.scrollbar) return false;
      var scrollbarCustomizedClass = this.validateClass(this.props.scrollbarCustomizedClass);
      var scrollbarClass = this.validateClass(this.props.scrollbar);

      return React.createElement('div', { className: [scrollbarClass, scrollbarCustomizedClass].join(' ') });
    },

    renderPagination: function() {
      if (!this.props.pagination) return false;
      var paginationCustomizedClass = this.validateClass(this.props.paginationCustomizedClass);
      var paginationClass = this.validateClass(this.props.pagination);

      return React.createElement('div', { className: [paginationClass, paginationCustomizedClass].join(' ') });
    },

    renderNextButton: function() {
      if (!this.props.nextButton) return false;
      var nextButtonCustomizedClass = this.validateClass(this.props.nextButtonCustomizedClass);
      var nextButtonClass = this.validateClass(this.props.nextButton);

      return React.createElement('div', { className: [nextButtonClass, nextButtonCustomizedClass].join(' ') });
    },

    renderPrevButton: function() {
      if (!this.props.prevButton) return false;
      var prevButtonCustomizedClass = this.validateClass(this.props.prevButtonCustomizedClass);
      var prevButtonClass = this.validateClass(this.props.prevButton);

      return React.createElement('div', { className: [prevButtonClass, prevButtonCustomizedClass].join(' ') });
    },

    render: function() {
      var self = this;
      var noSwipingClass = this.props.noSwiping ? 'swiper-no-swiping' : ''

      return React.createElement(
        'div',
        { className: self.props.containerClass },
        React.createElement(
          'div',
          { className: self.props.wrapperClass },
          React.Children.map(self.props.children, function (e) {
            return React.cloneElement(e, { className: [self.props.slideClass, e.props.className, noSwipingClass].join(' ') });
          })
        ),
        self.renderPagination(),
        self.renderScrollBar(),
        self.renderNextButton(),
        self.renderPrevButton()
      );
    }
  });

  return ReactIDangerousSwiper;
}));
