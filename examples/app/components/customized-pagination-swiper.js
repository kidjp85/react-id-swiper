import React from 'react';
import Slider from './common/slider';

export default (props) => {
  const params = {
    pagination: '.swiper-pagination',
    paginationClickable: true,
    paginationBulletRender:(swiper, index, className) => {
      return `<span class="${className}">${index + 1}</span>`
    }
  }

  return(
    <Slider title="Customized Pagination" params={params} id={props.id} />
  )
};