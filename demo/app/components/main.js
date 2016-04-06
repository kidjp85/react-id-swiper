import React from 'react';
import Slides from "./common/demo-data";
import DefaultSwiper from './default-swiper';
import PaginationSwiper from './pagination-swiper';
import VerticalSwiper from './vertical-swiper';
import SpaceBetweenSwiper from './space-between-swiper';

export default () => {
  return(
    <div className="container">
      <DefaultSwiper slides={Slides} />
      <VerticalSwiper slides={Slides} />
      <PaginationSwiper slides={Slides} />
      <SpaceBetweenSwiper slides={Slides} />
    </div>
  )
};
