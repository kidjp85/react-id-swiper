import { ReactElement, MutableRefObject } from 'react';
import Swiper, {
  SwiperOptions,
  SelectableElement as SwiperSelectableElement,
  SwiperModule
} from 'swiper';

type Maybe<T> = T | null;

export type ReactIdSwiperRenderProps = (props: ReactIdSwiperProps) => Maybe<ReactElement>;

export type WrappedElementType = 'div' | 'section' | 'span';

export type ReactIdSwiperChildren = ReactElement | ReactElement[];

export type SwiperModules = (SwiperModule & { name: string })[];

export interface ReactIdSwiperProps extends SwiperOptions {
  ContainerEl?: WrappedElementType;
  WrapperEl?: WrappedElementType;
  containerClass?: string;
  wrapperClass?: string;
  slideClass?: string;
  rebuildOnUpdate?: boolean;
  shouldSwiperUpdate?: boolean;
  activeSlideKey?: string;
  renderScrollbar?: ReactIdSwiperRenderProps;
  renderPagination?: ReactIdSwiperRenderProps;
  renderPrevButton?: ReactIdSwiperRenderProps;
  renderNextButton?: ReactIdSwiperRenderProps;
  renderParallax?: ReactIdSwiperRenderProps;
  rtl?: string;
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

export interface SwiperRefNode extends HTMLDivElement {
  swiper?: SwiperInstance;
}

export type SelectableElement = SwiperSelectableElement | undefined;

export type SwiperInstance = Maybe<Swiper>;

export type RefType<T> = Maybe<((instance: Maybe<T>) => void) | MutableRefObject<Maybe<T>>>;

export type SetRef = <V>(ref: RefType<V>, value: V) => void;

export type UseForkRef = <T>(refA: RefType<T>, refB: RefType<T>) => Maybe<(v: T) => void>;

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
