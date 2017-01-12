import React from 'react';
import Slider from './common/slider';

export default (props) => {
  const params = {
    pagination: '.swiper-pagination.customized-pagination',
    paginationClickable: true,
    nextButton: '.swiper-button-next.customized',
    prevButton: '.swiper-button-prev.customized',
    swiperContainerClass: '.swiper-container.customized',
    swiperWrapperClass: '.swiper-wrapper.customized',
    spaceBetween: 30
  }

  return(
    <Slider title="Navigation Buttons" params={params} id={props.id} />
  )
};