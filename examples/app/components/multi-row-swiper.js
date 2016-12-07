import React from 'react';
import Slider from './common/slider';

export default (props) => {
  const params = {
    pagination: '.swiper-pagination',
    slidesPerView: 3,
    slidesPerColumn: 2,
    paginationClickable: true,
    spaceBetween: 30
  }

  return(
    <Slider title="Multi Row Slides Layout" params={params} id={props.id} />
  )
};