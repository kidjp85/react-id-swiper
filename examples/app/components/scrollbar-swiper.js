import React from 'react';
import Slider from './common/slider';

export default (props) => {
  const params = {
    scrollbar: '.swiper-scrollbar',
    scrollbarCustomizedClass: 'customized-scrollbar',
    scrollbarHide: true,
    slidesPerView: 'auto',
    centeredSlides: true,
    spaceBetween: 30,
    grabCursor: true
  }

  return(
    <Slider title="Scrollbar" params={params} id={props.id} />
  )
};