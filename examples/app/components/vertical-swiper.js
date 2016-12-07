import React from 'react';
import Slider from './common/slider';

export default (props) => {
  const params = {
    pagination: '.swiper-pagination',
    paginationClickable: true,
    direction: "vertical"
  }

  return(
    <Slider title="Vertical Slides + Responsive / Fullscreen" params={params} />
  )
};
