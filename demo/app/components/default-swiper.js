import React from 'react';
import Swiper from 'react-swiper';
import Slide from './common/slide';
import Row from './common/row-container'

export default (props) => {
  return(
    <Row>
      <h2>Default Setup</h2>
      <Swiper>
        {props.slides.map((slide) => {
          return <Slide key={slide.id} title={slide.title} className="demo-slide"/>
        })}
      </Swiper>
    </Row>
  )
};
