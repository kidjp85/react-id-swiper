import React from 'react';
import Slider from './common/slider';

export default (props) => {
  const params = {
    pagination: '.swiper-pagination',
    direction: 'vertical',
    slidesPerView: 1,
    paginationClickable: true,
    spaceBetween: 30,
    mousewheelControl: true
  }

  return(
    <Slider title="Mousewheel Control" slides={props.slides} params={params} id={props.id} />
  )
};