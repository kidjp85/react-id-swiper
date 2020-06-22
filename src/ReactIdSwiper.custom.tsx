import React, {
  forwardRef,
  Children,
  useEffect,
  useRef,
  cloneElement,
  isValidElement,
  useCallback,
  ReactElement
} from 'react';
import objectAssign from 'object-assign';
import { ReactIdSwiperCustomProps, SwiperInstance, SwiperRefNode } from './types';
import { classNames, validateChildren, isReactElement, isModuleAvailable, setRef } from './utils';
import { useForkRef } from './hooks';

const ReactIdSwiperCustom = forwardRef<HTMLDivElement, ReactIdSwiperCustomProps>(
  (props, externalRef) => {
    const {
      Swiper,
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
      loop,
      modules = []
    } = props;

    // Initialize modules to use with swiper
    if (Swiper) {
      Swiper.use(modules);
    }

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

    // Check modules are loaded before rendering contents
    const shouldRenderParallax = isModuleAvailable(modules, 'parallax') && parallax && parallaxEl;
    const shouldRenderPagination =
      isModuleAvailable(modules, 'pagination') && pagination && pagination.el;
    const shouldRenderScrollbar =
      isModuleAvailable(modules, 'scrollbar') && scrollbar && scrollbar.el;
    const isNavigationModuleAvailable = isModuleAvailable(modules, 'navigation');
    const shouldRenderNextButton = isNavigationModuleAvailable && navigation && navigation.nextEl;
    const shouldRenderPrevButton = isNavigationModuleAvailable && navigation && navigation.prevEl;

    // No render if wrapper elements are not provided or when modules is empty
    if (!Swiper || !children || !ContainerEl || !WrapperEl) {
      return null;
    }

    // Validate children props
    if (!validateChildren(children)) {
      console.warn('Children should be react element or an array of react element!!');

      return null;
    }

    return (
      <ContainerEl className={containerClass} dir={rtl && 'rtl'} ref={ref}>
        {shouldRenderParallax && renderParallax && renderParallax(props)}
        <WrapperEl className={wrapperClass}>{Children.map(children, renderContent)}</WrapperEl>
        {shouldRenderPagination && renderPagination && renderPagination(props)}
        {shouldRenderScrollbar && renderScrollbar && renderScrollbar(props)}
        {shouldRenderNextButton && renderNextButton && renderNextButton(props)}
        {shouldRenderPrevButton && renderPrevButton && renderPrevButton(props)}
      </ContainerEl>
    );
  }
);

// Default props
ReactIdSwiperCustom.defaultProps = {
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
    ) : null,
  modules: []
};

ReactIdSwiperCustom.displayName = 'ReactIdSwiper';

export default ReactIdSwiperCustom;
