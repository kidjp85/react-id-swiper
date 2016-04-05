import React from 'react';
import Swiper from "./react-swiper";
import Slides from "./data";
import Slide from "./slide";

class Default extends React.Component {
  static get defaultProps() {
    return {
      pagination: '.swiper-pagination',
      paginationClickable: true,
      spaceBetween: 30
    };
  }

  render() {
    return(
      <div className="pagination-swiper">
        <h2>Space Between Slides</h2>
        <Swiper {...this.props}>
          {Slides.map((slide) => {
            return <Slide key={slide.id} title={slide.title} className="demo-slide"/>
          })}
        </Swiper>
      </div>
    )
  }
}

export default Default;
