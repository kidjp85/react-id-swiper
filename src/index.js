import React from 'react';
import ReactDOM from 'react-dom';
import Swiper from 'swiper';
import objectAssign from 'object-assign';
import PropTypes from 'prop-types';

export default class ReactIdSwiper extends React.Component {
  static defaultProps = {
    containerClass: 'swiper-container',
    wrapperClass: 'swiper-wrapper',
    slideClass: 'swiper-slide'
  }

  static propTypes = {
    containerClass: PropTypes.string,
    wrapperClass: PropTypes.string,
    children: PropTypes.oneOfType([
      PropTypes.node,
      PropTypes.element
    ]),
    rebuildOnUpdate: PropTypes.bool,
    initialSlide: PropTypes.number,
    direction: PropTypes.string,
    speed: PropTypes.number,
    setWrapperSize: PropTypes.bool,
    virtualTranslate: PropTypes.bool,
    width: PropTypes.number,
    height: PropTypes.number,
    autoHeight: PropTypes.bool,
    roundLengths: PropTypes.bool,
    nested: PropTypes.bool,
    autoplay: PropTypes.number,
    autoplayStopOnLast: PropTypes.bool,
    autoplayDisableOnInteraction: PropTypes.bool,
    watchSlidesProgress: PropTypes.bool,
    watchSlidesVisibility: PropTypes.bool,
    freeMode: PropTypes.bool,
    freeModeMomentum: PropTypes.bool,
    freeModeMomentumRatio: PropTypes.number,
    freeModeMomentumBounce: PropTypes.bool,
    freeModeMomentumBounceRatio: PropTypes.number,
    freeModeMinimumVelocity: PropTypes.number,
    freeModeSticky: PropTypes.bool,
    effect: PropTypes.string,
    fade: PropTypes.object,
    cube: PropTypes.object,
    coverflow: PropTypes.object,
    flip: PropTypes.object,
    parallax: PropTypes.bool,
    spaceBetween: PropTypes.number,
    slidesPerColumn: PropTypes.number,
    slidesPerColumnFill: PropTypes.string,
    slidesPerGroup: PropTypes.number,
    centeredSlides: PropTypes.bool,
    slidesOffsetBefore: PropTypes.number,
    slidesOffsetAfter: PropTypes.number,
    grabCursor: PropTypes.bool,
    touchEventsTarget: PropTypes.string,
    touchRatio: PropTypes.number,
    touchAngle: PropTypes.number,
    simulateTouch: PropTypes.bool,
    shortSwipes: PropTypes.bool,
    longSwipes: PropTypes.bool,
    longSwipesRatio: PropTypes.number,
    longSwipesMs: PropTypes.number,
    followFinger: PropTypes.bool,
    onlyExternal: PropTypes.bool,
    threshold: PropTypes.number,
    touchMoveStopPropagation: PropTypes.bool,
    iOSEdgeSwipeDetection: PropTypes.bool,
    iOSEdgeSwipeThreshold: PropTypes.number,
    resistance: PropTypes.bool,
    resistanceRatio: PropTypes.number,
    preventClicks: PropTypes.bool,
    preventClicksPropagation: PropTypes.bool,
    slideToClickedSlide: PropTypes.bool,
    allowSwipeToPrev: PropTypes.bool,
    allowSwipeToNext: PropTypes.bool,
    noSwiping: PropTypes.bool,
    noSwipingClass: PropTypes.string,
    uniqueNavElements: PropTypes.bool,
    pagination: PropTypes.string,
    paginationType: PropTypes.string,
    paginationHide: PropTypes.bool,
    paginationClickable: PropTypes.bool,
    paginationElement: PropTypes.string,
    paginationBulletRender: PropTypes.func,
    paginationFractionRender: PropTypes.func,
    paginationProgressRender: PropTypes.func,
    paginationCustomRender: PropTypes.func,
    scrollbar: PropTypes.string,
    scrollbarHide: PropTypes.bool,
    scrollbarDraggable: PropTypes.bool,
    scrollbarSnapOnRelease: PropTypes.bool,
    prevButton: PropTypes.string,
    nextButton: PropTypes.string,
    a11y: PropTypes.bool,
    prevSlideMessage: PropTypes.string,
    nextSlideMessage: PropTypes.string,
    firstSlideMessage: PropTypes.string,
    lastSlideMessage: PropTypes.string,
    paginationBulletMessage: PropTypes.string,
    keyboardControl: PropTypes.bool,
    mousewheelControl: PropTypes.bool,
    mousewheelForceToAxis: PropTypes.bool,
    mousewheelReleaseOnEdges: PropTypes.bool,
    mousewheelInvert: PropTypes.bool,
    mousewheelSensitivity: PropTypes.number,
    hashnav: PropTypes.bool,
    preloadImages: PropTypes.bool,
    updateOnImagesReady: PropTypes.bool,
    lazyLoading: PropTypes.bool,
    lazyLoadingInPrevNext: PropTypes.bool,
    lazyLoadingInPrevNextAmount: PropTypes.number,
    lazyLoadingOnTransitionStart: PropTypes.bool,
    loop: PropTypes.bool,
    loopAdditionalSlides: PropTypes.number,
    loopedSlides: PropTypes.number,
    controlInverse: PropTypes.bool,
    controlBy: PropTypes.string,
    observer: PropTypes.bool,
    observeParents: PropTypes.bool,
    breakpoints: PropTypes.object,
    runCallbacksOnInit: PropTypes.bool,
    onInit: PropTypes.func,
    onSlideChangeStart: PropTypes.func,
    onSlideChangeEnd: PropTypes.func,
    onSlideNextStart: PropTypes.func,
    onSlideNextEnd: PropTypes.func,
    onSlidePrevStart: PropTypes.func,
    onSlidePrevEnd: PropTypes.func,
    onTransitionStart: PropTypes.func,
    onTransitionEnd: PropTypes.func,
    onTouchStart: PropTypes.func,
    onTouchMove: PropTypes.func,
    onTouchMoveOpposite: PropTypes.func,
    onSliderMove: PropTypes.func,
    onTouchEnd: PropTypes.func,
    onClick: PropTypes.func,
    onTap: PropTypes.func,
    onDoubleTap: PropTypes.func,
    onImagesReady: PropTypes.func,
    onProgress: PropTypes.func,
    onReachBeginning: PropTypes.func,
    onReachEnd: PropTypes.func,
    onDestroy: PropTypes.func,
    onSetTranslate: PropTypes.func,
    onSetTransition: PropTypes.func,
    onAutoplay: PropTypes.func,
    onAutoplayStart: PropTypes.func,
    onAutoplayStop: PropTypes.func,
    onLazyImageLoad: PropTypes.func,
    onLazyImageReady: PropTypes.func,
    onPaginationRendered: PropTypes.func,
    slideClass: PropTypes.string,
    slideActiveClass: PropTypes.string,
    slideVisibleClass: PropTypes.string,
    slideDuplicateClass: PropTypes.string,
    slideNextClass: PropTypes.string,
    slidePrevClass: PropTypes.string,
    bulletClass: PropTypes.string,
    bulletActiveClass: PropTypes.string,
    paginationHiddenClass: PropTypes.string,
    paginationCurrentClass: PropTypes.string,
    paginationTotalClass: PropTypes.string,
    paginationProgressbarClass: PropTypes.string,
    buttonDisabledClass: PropTypes.string,
    prevButtonCustomizedClass: PropTypes.string,
    nextButtonCustomizedClass: PropTypes.string,
    paginationCustomizedClass: PropTypes.string,
    scrollbarCustomizedClass: PropTypes.string
  }

  constructor(props) {
    super(props);
    this.renderContent = this.renderContent.bind(this);
  }

  componentDidMount() {
    this.swiper = Swiper(ReactDOM.findDOMNode(this), objectAssign({}, this.props));
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.rebuildOnUpdate && typeof this.swiper !== 'undefined') {
      this.swiper.destroy(true, true);
      this.swiper = Swiper(ReactDOM.findDOMNode(this), objectAssign({}, nextProps));
    }
  }

  shouldComponentUpdate(nextProps) {
    return nextProps.children !== this.props.children;
  }

  componentDidUpdate() {
    if (this.props.rebuildOnUpdate && typeof this.swiper !== 'undefined') {
      this.swiper.destroy(true, true);
      this.swiper = Swiper(ReactDOM.findDOMNode(this), objectAssign({}, this.props));
    }
  }

  componentWillUnmount() {
    if (typeof this.swiper !== 'undefined') this.swiper.destroy(true, true);
    delete this.swiper;
  }

  validateClass(className) {
    if (typeof className !== 'string') return '';
    return className.replace(/\.|#/g, ' ').trim();
  }

  renderScrollBar() {
    if (!this.props.scrollbar) return false;
    const scrollbarCustomizedClass = this.validateClass(this.props.scrollbarCustomizedClass);
    const scrollbarClass = this.validateClass(this.props.scrollbar);

    return <div className={[scrollbarClass, scrollbarCustomizedClass].join(' ')} />;
  }

  renderPagination() {
    if (!this.props.pagination) return false;
    const paginationCustomizedClass = this.validateClass(this.props.paginationCustomizedClass);
    const paginationClass = this.validateClass(this.props.pagination);

    return <div className={[paginationClass, paginationCustomizedClass].join(' ')} />;
  }

  renderNextButton() {
    if (!this.props.nextButton) return false;
    const nextButtonCustomizedClass = this.validateClass(this.props.nextButtonCustomizedClass);
    const nextButtonClass = this.validateClass(this.props.nextButton);

    return <div className={[nextButtonClass, nextButtonCustomizedClass].join(' ')} />;
  }

  renderPrevButton() {
    if (!this.props.prevButton) return false;
    const prevButtonCustomizedClass = this.validateClass(this.props.prevButtonCustomizedClass);
    const prevButtonClass = this.validateClass(this.props.prevButton);

    return <div className={[prevButtonClass, prevButtonCustomizedClass].join(' ')} />;
  }

  renderContent(e) {
    const { slideClass, noSwiping } = this.props;
    const noSwipingClass = noSwiping ? 'swiper-no-swiping' : '';

    return React.cloneElement(e, { className: [slideClass, e.props.className, noSwipingClass].join(' ') });
  }

  render() {
    const { containerClass, wrapperClass, children } = this.props;

    return (
      <div className={containerClass}>
        <div className={wrapperClass}>
          {React.Children.map(children, this.renderContent)}
        </div>
        {this.renderPagination()}
        {this.renderScrollBar()}
        {this.renderNextButton()}
        {this.renderPrevButton()}
      </div>
    )
  }
}
