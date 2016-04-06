import React from 'react';
import Slider from './common/slider';

export default (props) => {
  const params = {
    pagination: '.swiper-pagination',
    slidesPerView: 'auto',
    paginationClickable: true,
    spaceBetween: 30
  }

  return(
    <Slider title="Auto Slides Per View / Carousel Mode" params={params} id={props.id} />
  )
};