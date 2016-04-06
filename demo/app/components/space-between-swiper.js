import React from 'react';
import Slider from './common/slider';

export default (props) => {
  const params = {
    pagination: '.swiper-pagination',
    paginationClickable: true,
    spaceBetween: 30
  }

  return(
    <Slider title="Space Between Slides" params={params} />
  )
};
