import React, {
  FunctionComponent,
  Children,
  createRef,
  useEffect,
  cloneElement,
  isValidElement,
  ReactElement
} from 'react';
import Swiper from 'swiper';
import objectAssign from 'object-assign';
import { ReactIdSwiperProps, SwiperInstance } from './types';
import { classNames, validateChildren, isReactElement } from './utils';

const ReactIdSwiper: FunctionComponent<ReactIdSwiperProps> = props => {
  const swiperRef = createRef<HTMLDivElement>();
  let swiper: SwiperInstance = null;

  const {
    activeSlideKey,
    ContainerEl,
    children,
    containerClass,
    getSwiper,
    navigation,
    noSwiping,
    pagination,
    parallax,
    parallaxEl,
    WrapperEl,
    wrapperClass,
    rebuildOnUpdate,
    renderScrollbar,
    renderPagination,
    renderPrevButton,
    renderNextButton,
    renderParallax,
    rtl,
    scrollbar,
    shouldSwiperUpdate,
    slideClass
  } = props;

  // No render if wrapper elements are not provided
  if (!children || !ContainerEl || !WrapperEl) {
    return null;
  }

  // Validate children props
  if (!validateChildren(children)) {
    console.warn('Children should be react element or an array of react element!!');
    return null;
  }

  // Get current active slide key
  const getActiveSlideIndexFromProps = () => {
    if (!activeSlideKey) {
      return null;
    }

    let activeSlideId = null;
    let id = 0;

    Children.forEach(children, child => {
      if (isValidElement(child)) {
        if (child.key === activeSlideKey) {
          activeSlideId = id;
        }
        id += 1;
      }
    });

    return activeSlideId;
  };

  // Get swiper instance
  const getSwiperInstance = (swiperInstance: SwiperInstance) => {
    if (typeof getSwiper === 'function') {
      getSwiper(swiperInstance);
    }
  };

  // Initialize swiper
  const buildSwiper = () => {
    if (swiperRef.current && swiper === null) {
      swiper = new Swiper(swiperRef.current, objectAssign({}, props));
      getSwiperInstance(swiper);
    }
  };

  // Rebuild swiper
  const rebuildSwiper = () => {
    if (swiper !== null) {
      swiper.destroy(true, true);
      swiper = null;
      getSwiperInstance(swiper);
    }

    buildSwiper();
  };

  // Update swiper
  const updateSwiper = () => {
    if (swiper !== null) {
      swiper.update();
      getSwiperInstance(swiper);
    }
  };

  // Render slides
  const renderContent = (e: ReactElement) => {
    if (!isReactElement(e)) {
      return null;
    }

    const slideClassNames = [slideClass, e.props.className];

    if (noSwiping) {
      slideClassNames.push('swiper-no-swiping');
    }

    return cloneElement(e, {
      ...e.props,
      className: slideClassNames.join(' ').trim()
    });
  };

  // Only execute when component is mounted or unmounted
  useEffect(() => {
    buildSwiper();

    const slideToIndex = getActiveSlideIndexFromProps();

    if (swiper !== null && slideToIndex !== null) {
      swiper.slideTo(slideToIndex);
    }

    return () => {
      if (swiper !== null) {
        swiper.destroy(true, true);
      }

      swiper = null;
    };
  }, []);

  // Execute each time when props are updated
  useEffect(() => {
    if (swiper !== null) {
      if (rebuildOnUpdate) {
        rebuildSwiper();
      } else if (shouldSwiperUpdate) {
        updateSwiper();

        const numSlides = swiper.slides.length;

        if (numSlides <= swiper.activeIndex) {
          const index = Math.max(numSlides - 1, 0);
          swiper.slideTo(index);
        }
      }

      const slideToIndex = getActiveSlideIndexFromProps();

      if (slideToIndex !== null) {
        swiper.slideTo(slideToIndex);
      }
    }
  });

  return (
    <ContainerEl className={containerClass} dir={rtl && 'rtl'} ref={swiperRef}>
      {parallax && parallaxEl && renderParallax && renderParallax(props)}
      <WrapperEl className={wrapperClass}>{Children.map(children, renderContent)}</WrapperEl>
      {pagination && pagination.el && renderPagination && renderPagination(props)}
      {scrollbar && scrollbar.el && renderScrollbar && renderScrollbar(props)}
      {navigation && navigation.nextEl && renderNextButton && renderNextButton(props)}
      {navigation && navigation.prevEl && renderPrevButton && renderPrevButton(props)}
    </ContainerEl>
  );
};

// Default props
ReactIdSwiper.defaultProps = {
  containerClass: 'swiper-container',
  wrapperClass: 'swiper-wrapper',
  slideClass: 'swiper-slide',
  ContainerEl: 'div',
  WrapperEl: 'div',
  renderScrollbar: ({ scrollbar }) =>
    scrollbar ? <div className={classNames(scrollbar.el)} /> : null,
  renderPagination: ({ pagination }) =>
    pagination ? <div className={classNames(pagination.el)} /> : null,
  renderPrevButton: ({ navigation }) =>
    navigation ? <div className={classNames(navigation.prevEl)} /> : null,
  renderNextButton: ({ navigation }) =>
    navigation ? <div className={classNames(navigation.nextEl)} /> : null,
  renderParallax: ({ parallaxEl }) =>
    parallaxEl ? (
      <div className={classNames(parallaxEl.el)} data-swiper-parallax={parallaxEl.value} />
    ) : null
};

export default ReactIdSwiper;
