import React from 'react';
import Slider from './common/slider';

export default (props) => {
  const params = {
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    pagination: '.swiper-pagination',
    paginationType: 'progress'
  }

  return(
    <Slider title="Progress Pagination" params={params} id={props.id} />
  )
};