import React from 'react';
import Slider from './common/slider';

export default (props) => {
  const params = {
    pagination: '.swiper-pagination',
    slidesPerView: 3,
    paginationClickable: true,
    spaceBetween: 30
  }

  return(
    <Slider title="Slides Per View / Carousel Mode" params={params} />
  )
};
