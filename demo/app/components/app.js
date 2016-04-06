import React from 'react';
import Slides from "./common/demo-data";
import DefaultSwiper from './default-swiper';
import PaginationSwiper from './pagination-swiper';
import VerticalSwiper from './vertical-swiper';
import SpaceBetweenSwiper from './space-between-swiper';
import SlidesPerViewSwiper from './slides-per-view-swiper';
import AutoSlidesPerViewSwiper from './auto-slides-per-view-swiper';
import CenteredSlidesSwiper from './centered-slides-swiper';

export default () => {
  return(
    <div className="container">
      <DefaultSwiper slides={Slides} />
      <VerticalSwiper slides={Slides} />
      <PaginationSwiper slides={Slides} />
      <SpaceBetweenSwiper slides={Slides} />
      <SlidesPerViewSwiper slides={Slides} />
      <AutoSlidesPerViewSwiper slides={Slides} id="auto-slides-per-view"/>
      <CenteredSlidesSwiper slides={Slides} id="centered-slides"/>
    </div>
  )
};
