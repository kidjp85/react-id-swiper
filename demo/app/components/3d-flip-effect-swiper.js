import React from 'react';
import Slider from './common/slider';

export default (props) => {
  const params = {
    pagination: '.swiper-pagination',
    effect: 'flip',
    grabCursor: true,
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev'
  }

  return(
    <Slider title="3D Flip Effect" params={params} id={props.id} showImage={props.showImage} />
  )
};