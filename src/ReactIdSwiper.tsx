import React, {
  forwardRef,
  Children,
  useEffect,
  useRef,
  cloneElement,
  isValidElement,
  ReactElement,
  useCallback
} from 'react';
import Swiper from 'swiper';
import objectAssign from 'object-assign';
import { ReactIdSwiperProps, SwiperInstance, SwiperRefNode } from './types';
import { classNames, validateChildren, isReactElement, setRef } from './utils';
import { useForkRef } from './hooks';

const ReactIdSwiper = forwardRef<HTMLDivElement, ReactIdSwiperProps>((props, externalRef) => {
  const {
    activeSlideKey,
    ContainerEl,
    children,
    containerClass,
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

  // Define swiper instance ref
  const swiperInstanceRef = useRef<SwiperInstance>(null);

  // Internal ref
  const swiperNodeRef = useRef<SwiperRefNode>(null);

  // Forked ref
  const ref = useForkRef(swiperNodeRef, externalRef);

  // Get current active slide key
  const getActiveSlideIndexFromProps = useCallback(() => {
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
  }, [activeSlideKey, children, loop]);

  // Destroy swiper
  const destroySwiper = useCallback(() => {
    if (swiperInstanceRef.current !== null) {
      swiperInstanceRef.current.destroy(true, true);

      setRef(swiperInstanceRef, null);
    }
  }, []);

  // Initialize swiper
  const buildSwiper = useCallback(() => {
    if (swiperNodeRef.current && swiperInstanceRef.current === null) {
      setRef(swiperInstanceRef, new Swiper(swiperNodeRef.current, objectAssign({}, props)));
    }
  }, [props]);

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

  // Destroy Swiper instance when component is unmounted
  useEffect(() => {
    return () => destroySwiper();
  }, [destroySwiper]);

  useEffect(() => {
    buildSwiper();

    if (swiperInstanceRef.current !== null) {
      if (rebuildOnUpdate) {
        destroySwiper();

        buildSwiper();
      } else if (shouldSwiperUpdate) {
        swiperInstanceRef.current.update();
      }

      const numSlides = swiperInstanceRef.current.slides.length;

      if (numSlides <= swiperInstanceRef.current.activeIndex) {
        const index = Math.max(numSlides - 1, 0);

        swiperInstanceRef.current.slideTo(index);
      }

      const slideToIndex = getActiveSlideIndexFromProps();

      if (slideToIndex !== null) {
        swiperInstanceRef.current.slideTo(slideToIndex);
      }
    }
  }, [
    destroySwiper,
    getActiveSlideIndexFromProps,
    rebuildOnUpdate,
    shouldSwiperUpdate,
    buildSwiper
  ]);

  // No render if wrapper elements are not provided
  if (!children || !ContainerEl || !WrapperEl) {
    return null;
  }

  // Validate children props
  if (!validateChildren(children)) {
    if (process.env.NODE_ENV !== 'production') {
      console.warn('Children should be react element or an array of react element!!');
    }

    return null;
  }

  return (
    <ContainerEl className={containerClass} dir={rtl && 'rtl'} ref={ref}>
      {parallax && parallaxEl && renderParallax && renderParallax(props)}
      <WrapperEl className={wrapperClass}>{Children.map(children, renderContent)}</WrapperEl>
      {pagination && pagination.el && renderPagination && renderPagination(props)}
      {scrollbar && scrollbar.el && renderScrollbar && renderScrollbar(props)}
      {navigation && navigation.nextEl && renderNextButton && renderNextButton(props)}
      {navigation && navigation.prevEl && renderPrevButton && renderPrevButton(props)}
    </ContainerEl>
  );
});

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
