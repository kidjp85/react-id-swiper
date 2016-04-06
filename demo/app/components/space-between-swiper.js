import React from 'react';
import Swiper from 'react-swiper';
import Slide from './common/slide';
import Row from './common/row-container'

export default (props) => {
  const params = {
    pagination: '.swiper-pagination',
    paginationClickable: true,
    spaceBetween: 30
  }

  return(
    <Row>
      <h2>Space Between Slides</h2>
      <Swiper {...params}>
        {props.slides.map((slide) => {
          return <Slide key={slide.id} title={slide.title} className="demo-slide"/>
        })}
      </Swiper>
    </Row>
  )
};