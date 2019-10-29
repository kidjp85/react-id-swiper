import React, {
  FunctionComponent,
  Children,
  createRef,
  useEffect,
  useRef,
  cloneElement,
  isValidElement,
  ReactElement
} from 'react';
import Swiper from 'swiper';
import objectAssign from 'object-assign';
import { ReactIdSwiperProps, SwiperInstance } from './types';
import { classNames, validateChildren, isReactElement } from './utils';

const ReactIdSwiper: FunctionComponent<ReactIdSwiperProps> = props => {
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
    slideClass,
    loop
  } = props;

  // Define swiper ref
  const swiperNodeRef = createRef<HTMLDivElement>();

  // Define swiper instance ref
  const swiperInstanceRef = useRef<SwiperInstance>(null);

  // Get current active slide key
  const getActiveSlideIndexFromProps = () => {
    if (!activeSlideKey) {
      return null;
    }

    let activeSlideId = 0;
    // In loop mode first slide index should be 1
    let id = loop ? 1 : 0;

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
  const getSwiperInstance = (swiper: SwiperInstance) => {
    if (typeof getSwiper === 'function') {
      getSwiper(swiper);
    }
  };

  // Destroy swiper
  const destroySwiper = () => {
    if (swiperInstanceRef.current !== null) {
      swiperInstanceRef.current.destroy(true, true);
      swiperInstanceRef.current = null;
    }
  };

  // Initialize swiper
  const buildSwiper = () => {
    if (swiperNodeRef.current && swiperInstanceRef.current === null) {
      swiperInstanceRef.current = new Swiper(swiperNodeRef.current, objectAssign({}, props));
    }
  };

  // Rebuild swiper
  const rebuildSwiper = () => {
    destroySwiper();
    buildSwiper();
  };

  // Update swiper
  const updateSwiper = () => {
    if (swiperInstanceRef.current !== null) {
      swiperInstanceRef.current.update();
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

    if (swiperInstanceRef.current !== null && slideToIndex !== null) {
      swiperInstanceRef.current.slideTo(slideToIndex);
    }

    return () => destroySwiper();
  }, []);

  // Execute each time when props are updated
  useEffect(() => {
    if (swiperInstanceRef.current !== null) {
      if (rebuildOnUpdate) {
        rebuildSwiper();
      } else if (shouldSwiperUpdate) {
        updateSwiper();

        const numSlides = swiperInstanceRef.current.slides.length;

        if (numSlides <= swiperInstanceRef.current.activeIndex) {
          const index = Math.max(numSlides - 1, 0);
          swiperInstanceRef.current.slideTo(index);
        }
      }

      const slideToIndex = getActiveSlideIndexFromProps();

      if (slideToIndex !== null) {
        swiperInstanceRef.current.slideTo(slideToIndex);
      }
    }
  });

  useEffect(() => {
    getSwiperInstance(swiperInstanceRef.current);
  }, [swiperInstanceRef]);

  // No render if wrapper elements are not provided
  if (!children || !ContainerEl || !WrapperEl) {
    return null;
  }

  // Validate children props
  if (!validateChildren(children)) {
    console.warn('Children should be react element or an array of react element!!');

    return null;
  }

  return (
    <ContainerEl className={containerClass} dir={rtl && 'rtl'} ref={swiperNodeRef}>
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

ReactIdSwiper.displayName = 'ReactIdSwiper';

export default ReactIdSwiper;
