import React from 'react';
import Slider from './common/slider';

export default (props) => {
  const params = {
    pagination: '.swiper-pagination',
    paginationClickable: true,
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    prevButtonCustomizedClass: 'customized-prev',
    nextButtonCustomizedClass: 'customized-next',
    paginationCustomizedClass: 'customized-pagination',
    containerClass: 'swiper-container customized-swiper-container',
    spaceBetween: 30
  }

  return(
    <Slider title="Navigation Buttons" params={params} id={props.id} />
  )
};