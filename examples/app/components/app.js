import React from 'react';
import Header from './common/header';
import DefaultSwiper from './default-swiper';
import PaginationSwiper from './pagination-swiper';
import VerticalSwiper from './vertical-swiper';
import SpaceBetweenSwiper from './space-between-swiper';
import SlidesPerViewSwiper from './slides-per-view-swiper';
import AutoSlidesPerViewSwiper from './auto-slides-per-view-swiper';
import CenteredSlidesSwiper from './centered-slides-swiper';
import CenteredSlidesAutoSwiper from './centered-slides-auto-swiper';
import FreeModeNoFixedPositionsSwiper from './free-mode-no-fixed-positions-swiper';
import MultiRowSwiper from './multi-row-swiper';
import GrabCursorSwiper from './grab-cursor-swiper';
import ScrollbarSwiper from './scrollbar-swiper';
import NavigationButtonSwiper from './navigation-button-swiper';
import LoopModeSwiper from './loop-mode-infinite-swiper';
import FadeEffectSwiper from './fade-effect-swiper';
import CubeEffectSwiper from './3d-cube-effect-swiper';
import CoverflowEffectSwiper from './3d-coverflow-effect-swiper';
import FlipEffectSwiper from './3d-flip-effect-swiper';
import MouseWheelSwiper from './mouse-wheel-swiper';
import AutoplaySwiper from './autoplay-swiper';
import CustomizedPaginationSwiper from './customized-pagination-swiper';
import FractionPaginationSwiper from './fraction-pagination-swiper';
import ProgressPaginationSwiper from './progress-pagination-swiper';
import ResponsiveBreakpointsSwiper from './responsive-breakpoints-swiper';

export default () => {
  return(
    <div className="body-container">
      <Header />
      <div className="container">
        <DefaultSwiper />
        <VerticalSwiper />
        <PaginationSwiper />
        <SpaceBetweenSwiper />
        <SlidesPerViewSwiper />
        <AutoSlidesPerViewSwiper id="auto-slides-per-view"/>
        <CenteredSlidesSwiper id="centered-slides"/>
        <CenteredSlidesAutoSwiper id="centered-slides-auto"/>
        <FreeModeNoFixedPositionsSwiper />
        <MultiRowSwiper id="multi-row" />
        <GrabCursorSwiper id="grad-cursor" />
        <ScrollbarSwiper />
        <NavigationButtonSwiper />
        <LoopModeSwiper />
        <FadeEffectSwiper showImage="true" id="fade-effect"/>
        <CubeEffectSwiper showImage="true" id="cube-effect"/>
        <CoverflowEffectSwiper showImage="true" id="coverflow-effect"/>
        <FlipEffectSwiper showImage="true" id="flip-effect"/>
        <MouseWheelSwiper />
        <AutoplaySwiper />
        <CustomizedPaginationSwiper id="customized-pagination" />
        <FractionPaginationSwiper id="fraction-pagination" />
        <ProgressPaginationSwiper />
        <ResponsiveBreakpointsSwiper />
      </div>
    </div>
  )
};
