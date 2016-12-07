import React from 'react';
import Slider from './common/slider';

export default (props) => {
  const params = {
    pagination: '.swiper-pagination',
    paginationClickable: true
  }

  return(
    <Slider title="Responsive / Fullscreen + Pagination" params={params} />
  )
};

