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
    slideClassContainer: 'swiper-container',
    slideClass: 'swiper-slide',
    slideActiveClass: 'swiper-slide-active',
    slideVisibleClass: 'swiper-slide-visible',
    slideDuplicateClass: 'swiper-slide-duplicate',
    slideNextClass: 'swiper-slide-next',
    slidePrevClass: 'swiper-slide-prev',
    bulletClass: 'swiper-pagination-bullet',
    bulletActiveClass: 'swiper-pagination-bullet-active',
    paginationHiddenClass: 'swiper-pagination-hidden',
    paginationCurrentClass: 'swiper-pagination-current',
    paginationTotalClass: 'swiper-pagination-total',
    paginationProgressbarClass: 'swiper-pagination-progressbar',
    buttonDisabledClass: 'swiper-button-disabled'
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
      scrollbarHide: React.PropTypes.bool,
      scrollbarDraggable: React.PropTypes.bool,
      scrollbarSnapOnRelease: React.PropTypes.bool,
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
      buttonDisabledClass: React.PropTypes.string
    },

    getDefaultProps() {
      return defaultProps;
    },

    componentDidMount: function () {
      this.swiper = Swiper(ReactDOM.findDOMNode(this), objectAssign({}, this.props));
    },

    componentDidUpdate: function () {
      if(this.props.rebuildOnUpdate) {
        this.swiper.destroy(true, true);
        this.swiper = Swiper(ReactDOM.findDOMNode(this), objectAssign({}, this.props));
      }
    },

    componentWillUnmount: function () {
      this.swiper.destroy(true, true);
      delete this.swiper;
    },

    shouldComponentUpdate: function (nextProps) {
      return nextProps.children !== this.props.children;
    },

    componentWillReceiveProps: function () {
      if (this.swiper != null) {
        this.swiper.destroy(true, true);
      }
      this.swiper = Swiper(ReactDOM.findDOMNode(this), objectAssign({}, this.props));
    },

    _renderScrollBar: function() {
      if(!this.props.scrollbar) return false;
      return <div className={this.props.scrollbar}></div>
    },

    render: function () {
      var slideClass = this.props.slideClass;
      return(
        <div className={this.props.slideClassContainer}>
          <div className="swiper-wrapper">
            {React.Children.map(this.props.children, function(e){
              return React.cloneElement(e, {className: [slideClass, e.props.className].join(' ')});
            })}
          </div>
          {this._renderScrollBar()}
        </div>
      )
    }
  });

  return ReactIDangerousSwiper;
}));