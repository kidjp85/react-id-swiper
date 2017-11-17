import React from 'react';
import ReactDOM from 'react-dom';
import Swiper from 'swiper/dist/js/swiper.js';
import objectAssign from 'object-assign';
import PropTypes from 'prop-types';

export default class ReactIdSwiper extends React.Component {
  // Default props
  static defaultProps = {
    containerClass: 'swiper-container',
    wrapperClass: 'swiper-wrapper',
    slideClass: 'swiper-slide'
  }

  // Proptypes
  static propTypes = {
    // react-id-swiper original parameter
    containerClass: PropTypes.string,
    wrapperClass: PropTypes.string,
    children: PropTypes.oneOfType([
      PropTypes.node,
      PropTypes.element
    ]),
    rebuildOnUpdate: PropTypes.bool,
    shouldSwiperUpdate: PropTypes.bool,
    prevButtonCustomizedClass: PropTypes.string,
    nextButtonCustomizedClass: PropTypes.string,
    paginationCustomizedClass: PropTypes.string,
    scrollbarCustomizedClass: PropTypes.string,
    activeSlideKey: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
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
    autoplay: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.shape({
        delay: PropTypes.number,
        stopOnLast: PropTypes.bool,
        disableOnInteraction: PropTypes.bool,
      })
    ]),

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
      clickableClass: PropTypes.string,
    }),

    // scrollbar
    scrollbar: PropTypes.shape({
      el: PropTypes.any,
      hide: PropTypes.bool,
      draggable: PropTypes.bool,
      snapOnRelease: PropTypes.bool,
      dragSize: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    }),

    // navigation
    navigation: PropTypes.shape({
      nextEl: PropTypes.string,
      prevEl: PropTypes.string,
      hideOnClick: PropTypes.bool,
      disabledClass: PropTypes.string,
      hiddenClass: PropTypes.string,
    }),

    // a11y
    a11y: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.shape({
        prevSlideMessage: PropTypes.string,
        nextSlideMessage: PropTypes.string,
        firstSlideMessage: PropTypes.string,
        lastSlideMessage: PropTypes.string,
        paginationBulletMessage: PropTypes.string,
        notificationClass: PropTypes.string,
      })
    ]),

    // zoom
    zoom: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.shape({
        maxRatio: PropTypes.number,
        minRatio: PropTypes.number,
        toggle: PropTypes.bool,
        containerClass: PropTypes.string,
        zoomedSlideClass: PropTypes.string,
      })
    ]),

    // keyboard
    keyboard: PropTypes.bool,

    // mousewheel
    mousewheel: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.shape({
        forceToAxis: PropTypes.bool,
        releaseOnEdges: PropTypes.bool,
        invert: PropTypes.bool,
        sensitivity: PropTypes.number,
        eventsTarged: PropTypes.string,
      })
    ]),

    // hashNavigation
    hashNavigation: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.shape({
        watchState: PropTypes.bool,
        replaceState: PropTypes.bool,
      })
    ]),

    // history
    history: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.shape({
        key: PropTypes.string,
        replaceState: PropTypes.bool,
      })
    ]),

    // lazy
    lazy: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.shape({
        loadPrevNext: PropTypes.bool,
        loadPrevNextAmount: PropTypes.number,
        loadOnTransitionStart: PropTypes.bool,
        elementClass: PropTypes.string,
        loadingClass: PropTypes.string,
        loadedClass: PropTypes.string,
        preloaderClass: PropTypes.string,
      })
    ]),

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
      modifier: PropTypes.number,
    }),

    // flipEffect
    flipEffect: PropTypes.shape({
      slideShadows: PropTypes.bool,
      limitRotation: PropTypes.bool,
    }),

    // cubeEffect
    cubeEffect: PropTypes.shape({
      slideShadows: PropTypes.bool,
      shadow: PropTypes.bool,
      shadowOffset: PropTypes.number,
      shadowScale: PropTypes.number,
    }),

    // controller
    controller: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.shape({
        control: PropTypes.any,
        inverse: PropTypes.bool,
        by: PropTypes.string,
      })
    ]),

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
      resize: PropTypes.func,
    })
  }

  constructor(props) {
    super(props);
    this.renderContent = this.renderContent.bind(this);
  }

  componentDidMount() {
    this.swiper = new Swiper(ReactDOM.findDOMNode(this), objectAssign({}, this.props));
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.rebuildOnUpdate && typeof this.swiper !== 'undefined') {
      this.rebuildSwiper();
    }
  }

  shouldComponentUpdate(nextProps) {
    return nextProps.children !== this.props.children;
  }

  componentDidUpdate() {
    if (this.props.rebuildOnUpdate && typeof this.swiper !== 'undefined') {
      this.rebuildSwiper();
    } else if (this.props.shouldSwiperUpdate && typeof this.swiper !== 'undefined') {
      this.swiper.update();

      const numSlides = this.swiper.slides.length;
      if (numSlides <= this.swiper.activeIndex) {
        const index = Math.max(numSlides - 1, 0);
        this.swiper.slideTo(index);
      }
    }

    if (this.props.activeSlideKey) {
      let activeSlideId = null;
      let id = 0;
      React.Children.forEach(this.props.children, child => {
        if (child) {
          if (child.key === this.props.activeSlideKey) {
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

  componentWillUnmount() {
    if (typeof this.swiper !== 'undefined') this.swiper.destroy(true, true);
    delete this.swiper;
  }

  rebuildSwiper() {
    this.swiper.destroy(true, true);
    this.swiper = new Swiper(ReactDOM.findDOMNode(this), objectAssign({}, this.props));
  }

  validateClass(className) {
    if (typeof className !== 'string') return '';
    return className.replace(/\.|#/g, ' ').trim();
  }

  renderScrollBar() {
    if (!this.props.scrollbar || !this.props.scrollbar.el) return false;
    const scrollbarCustomizedClass = this.validateClass(this.props.scrollbarCustomizedClass);
    const scrollbarClass = this.validateClass(this.props.scrollbar.el);

    return <div className={[scrollbarClass, scrollbarCustomizedClass].join(' ')} />;
  }

  renderPagination() {
    if (!this.props.pagination || !this.props.pagination.el) return false;
    const paginationCustomizedClass = this.validateClass(this.props.paginationCustomizedClass);
    const paginationClass = this.validateClass(this.props.pagination.el);

    return <div className={[paginationClass, paginationCustomizedClass].join(' ')} />;
  }

  renderNextButton() {
    if (!this.props.navigation || !this.props.navigation.nextEl) return false;
    const nextButtonCustomizedClass = this.validateClass(this.props.nextButtonCustomizedClass);
    const nextButtonClass = this.validateClass(this.props.navigation.nextEl);

    return <div className={[nextButtonClass, nextButtonCustomizedClass].join(' ')} />;
  }

  renderPrevButton() {
    if (!this.props.navigation || !this.props.navigation.prevEl) return false;
    const prevButtonCustomizedClass = this.validateClass(this.props.prevButtonCustomizedClass);
    const prevButtonClass = this.validateClass(this.props.navigation.prevEl);

    return <div className={[prevButtonClass, prevButtonCustomizedClass].join(' ')} />;
  }

  renderParallax() {
    if (!this.props.parallax || !this.props.parallaxEl) return false;

    const parallaxBgClass = this.validateClass(this.props.parallaxEl.el);
    return <div className={parallaxBgClass} data-swiper-parallax={this.props.parallaxEl.value} />;
  }

  renderContent(e) {
    if (!e) return null;

    const { slideClass, noSwiping } = this.props;
    const noSwipingClass = noSwiping ? 'swiper-no-swiping' : '';
    const childProps = {
      ...e.props,
      className: [slideClass, e.props.className, noSwipingClass].join(' ')
    };

    return React.cloneElement(e, { ...childProps });
  }

  render() {
    const { containerClass, wrapperClass, children, rtl } = this.props;
    const rtlProp = rtl ? { dir: 'rtl' } : {};

    return (
      <div className={containerClass} {...rtlProp}>
        {this.renderParallax()}
        <div className={wrapperClass}>
          {React.Children.map(children, this.renderContent)}
        </div>
        {this.renderPagination()}
        {this.renderScrollBar()}
        {this.renderNextButton()}
        {this.renderPrevButton()}
      </div>
    );
  }
}
