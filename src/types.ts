import { ReactElement } from 'react';

import Swiper, {
  SwiperOptions,
  SelectableElement as SwiperSelectableElement,
  SwiperModule
} from 'swiper';

export type ReactIdSwiperRenderProps = (props: ReactIdSwiperProps) => ReactElement | null;

export type WrappedElementType = 'div' | 'section' | 'span';

export type ReactIdSwiperChildren = ReactElement | ReactElement[];

export type GetSwiper = (swiper: SwiperInstance) => void;

export type SwiperModules = (SwiperModule & { name: string })[];

export interface ReactIdSwiperProps extends SwiperOptions {
  ContainerEl?: WrappedElementType;
  WrapperEl?: WrappedElementType;
  containerClass?: string;
  wrapperClass?: string;
  slideClass?: string;
  rebuildOnUpdate?: boolean;
  shouldSwiperUpdate?: boolean;
  getSwiper?: GetSwiper;
  activeSlideKey?: string;
  renderScrollbar?: ReactIdSwiperRenderProps;
  renderPagination?: ReactIdSwiperRenderProps;
  renderPrevButton?: ReactIdSwiperRenderProps;
  renderNextButton?: ReactIdSwiperRenderProps;
  renderParallax?: ReactIdSwiperRenderProps;
  rtl?: string | undefined;
  children?: ReactIdSwiperChildren;
  parallaxEl?: {
    el: string;
    value: string;
  };
}

export interface ReactIdSwiperCustomProps extends ReactIdSwiperProps {
  modules?: SwiperModules;
  Swiper: typeof Swiper;
}

export type SelectableElement = SwiperSelectableElement | undefined;

export type SwiperInstance = Swiper | null;

export type SwiperModuleName =
  | 'navigation'
  | 'pagination'
  | 'scrollbar'
  | 'autoplay'
  | 'parallax'
  | 'lazy'
  | 'effect-fade'
  | 'effect-coverflow'
  | 'effect-flip'
  | 'effect-cube'
  | 'zoom'
  | 'keyboard'
  | 'mousewheel'
  | 'virtual'
  | 'hash-navigation'
  | 'history'
  | 'controller'
  | 'a11y';
