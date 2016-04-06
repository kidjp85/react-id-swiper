import React from 'react';
import Slider from './common/slider';

export default (props) => {
  const params = {
    pagination: '.swiper-pagination',
    slidesPerView: 3,
    paginationClickable: true,
    spaceBetween: 30,
    freeMode: true
  }

  return(
    <Slider title="Free Mode / No Fixed Positions" params={params} id={props.id} />
  )
};