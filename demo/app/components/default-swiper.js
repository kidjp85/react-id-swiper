import React from 'react';
import Swiper from "./react-swiper";
import Slides from "./data";
import Slide from "./slide";

class Default extends React.Component {
  render() {
    return(
      <div>
        <h2>Default Setup</h2>
        <Swiper>
          {Slides.map((slide) => {
            return <Slide key={slide.id} title={slide.title} className="demo-slide"/>
          })}
        </Swiper>
      </div>
    )
  }
}

export default Default;
