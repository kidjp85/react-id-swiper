import React from 'react';
import Swiper from 'react-swiper';
import Slides from "./demo-data";

export default (props) => {
  const _renderContent = (slide) => {
    return props.showImage ? '' : slide.title;
  }

  const _divStyle = (slide) => {
    return props.showImage ? {backgroundImage: `url(${require(`images/img_${slide.id}.jpg`)})`} : {}
  }

  return(
    <div className="row" id={props.id}>
      <div className="col-sm-12 col-md-12 col-lg-12 slide-content">
        <h2>{props.title}</h2>
          <Swiper {...props.params}>
            {Slides.map((slide) => {
              return <div className="demo-slide" key={slide.id} style={_divStyle(slide)}>{_renderContent(slide)}</div>
            })}
          </Swiper>
      </div>
    </div>
  )
};