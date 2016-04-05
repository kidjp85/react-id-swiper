import React from 'react';
import Swiper from "./react-swiper";
import Slides from "./data";
import Slide from "./slide";

class Default extends React.Component {
  static get defaultProps() {
    return {
      pagination: '.swiper-pagination',
      paginationClickable: true,
      direction: "vertical"
    };
  }

  render() {
    return(
      <div className="vertical-swiper">
        <h2>Vertical Slides + Responsive / Fullscreen</h2>
        <Swiper {...this.props}>
          {Slides.map((slide) => {
            return <Slide key={slide.id} title={slide.title} className="demo-slide vertical-slide"/>
          })}
        </Swiper>
      </div>
    )
  }
}

export default Default;
