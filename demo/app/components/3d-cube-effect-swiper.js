import React from 'react';
import Slider from './common/slider';

export default (props) => {
  const params = {
    pagination: '.swiper-pagination',
    effect: 'cube',
    grabCursor: true,
    cube: {
      shadow: true,
      slideShadows: true,
      shadowOffset: 20,
      shadowScale: 0.94
    }
  }

  return(
    <Slider title="3D Cube Effect" params={params} id={props.id} showImage={props.showImage} />
  )
};