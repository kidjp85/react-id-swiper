import React from 'react';
import Slider from './common/slider';

export default (props) => {
  const params = {
    pagination: '.swiper-pagination',
    paginationClickable: true,
    slidesPerView: 5,
    spaceBetween: 50,
    breakpoints: {
      1024: {
        slidesPerView: 4,
        spaceBetween: 40
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 30
      },
      640: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      320: {
        slidesPerView: 1,
        spaceBetween: 10
      }
    }
  }

  return(
    <Slider title="Responsive Breakpoints" params={params} />
  )
};
