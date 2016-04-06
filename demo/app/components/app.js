import React from 'react';
import Slides from "./common/demo-data";
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



export default () => {
  return(
    <div className="body-container">
      <Header />
      <div className="container">
        <DefaultSwiper slides={Slides} />
        <VerticalSwiper slides={Slides} />
        <PaginationSwiper slides={Slides} />
        <SpaceBetweenSwiper slides={Slides} />
        <SlidesPerViewSwiper slides={Slides} />
        <AutoSlidesPerViewSwiper slides={Slides} id="auto-slides-per-view"/>
        <CenteredSlidesSwiper slides={Slides} id="centered-slides"/>
        <CenteredSlidesAutoSwiper slides={Slides} id="centered-slides-auto"/>
        <FreeModeNoFixedPositionsSwiper slides={Slides} />
        <MultiRowSwiper slides={Slides} id="multi-row" />
        <GrabCursorSwiper slides={Slides} id="grad-cursor" />
        <ScrollbarSwiper slides={Slides} />
        <NavigationButtonSwiper slides={Slides} />
        <LoopModeSwiper slides={Slides} />
        <FadeEffectSwiper slides={Slides} showImage="true" id="fade-effect"/>
        <CubeEffectSwiper slides={Slides} showImage="true" id="cube-effect"/>
        <CoverflowEffectSwiper slides={Slides} showImage="true" id="coverflow-effect"/>
        <FlipEffectSwiper slides={Slides} showImage="true" id="flip-effect"/>
        <MouseWheelSwiper slides={Slides} />
        <AutoplaySwiper slides={Slides} />
        <CustomizedPaginationSwiper slides={Slides} id="customized-pagination" />
      </div>
    </div>
  )
};
