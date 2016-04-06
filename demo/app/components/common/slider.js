import React from 'react';
import Swiper from 'react-swiper';

export default (props) => {
  return(
    <div className="row" id={props.id}>
      <div  className="col-sm-12 col-md-12 col-lg-12">
        <h2>{props.title}</h2>
          <Swiper {...props.params}>
            {props.slides.map((slide) => {
              return <div className="demo-slide" key={slide.id}>{slide.title}</div>
            })}
          </Swiper>
      </div>
    </div>
  )
};