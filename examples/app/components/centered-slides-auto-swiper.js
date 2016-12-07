import React from 'react';
import Slider from './common/slider';

export default (props) => {
  const params = {
    pagination: '.swiper-pagination',
    slidesPerView: 'auto',
    centeredSlides: true,
    paginationClickable: true,
    spaceBetween: 30
  }

  return(
    <Slider title="Centered Slides + Auto Slides Per View" params={params} id={props.id} />
  )
};