import { ReactElement } from 'react';
import Swiper, { SwiperOptions, SelectableElement } from 'swiper';

export type ReactIdSwiperRenderProps = (props: ReactIdSwiperProps) => ReactElement | null;

export type WrappedElementType = 'div' | 'section' | 'span';

export type ReactIdSwiperChildren = ReactElement | ReactElement[];

export interface ReactIdSwiperProps extends SwiperOptions {
  ContainerEl: WrappedElementType;
  WrapperEl: WrappedElementType;
  containerClass?: string;
  wrapperClass?: string;
  rebuildOnUpdate?: boolean;
  shouldSwiperUpdate?: boolean;
  activeSlideKey?: string | number;
  renderScrollbar?: ReactIdSwiperRenderProps;
  renderPagination?: ReactIdSwiperRenderProps;
  renderPrevButton?: ReactIdSwiperRenderProps;
  renderNextButton?: ReactIdSwiperRenderProps;
  renderParallax?: ReactIdSwiperRenderProps;
  rtl?: string | undefined;
  children: ReactIdSwiperChildren;
  parallaxEl?: {
    el: string;
    value: string;
  };
}

export type SelectableElement = SelectableElement | undefined;

export type SwiperInstance = Swiper | null;
