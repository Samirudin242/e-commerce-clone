import React, { useState, useEffect } from "react";
import { sliderData } from "../image/sliderData";
import "./style/carousel.css";
//icons
import { AiFillLeftCircle, AiFillRightCircle } from "react-icons/ai";

function Carousel({ slide }) {
  const [current, setcurrent] = useState(0);
  const [color, setColor] = useState(slide[current].background_color);
  const length = slide.length;

  useEffect(() => {
    setTimeout(() => {
      nextSlide();
    }, 7000);
  }, [current]);

  const nextSlide = () => {
    setcurrent(current === length - 1 ? 0 : current + 1);
    setColor(
      slide[current === slide.length - 1 ? 0 : current + 1].background_color
    );
  };

  const prevSlide = () => {
    setcurrent(current === 0 ? length - 1 : current - 1);
    setColor(
      slide[current === 0 ? slide.length - 1 : current - 1].background_color
    );
  };

  if (!Array.isArray(slide) || slide.length <= 0) {
    return null;
  }

  return (
    <div style={{ backgroundColor: color }} className="slider">
      <AiFillLeftCircle className="left-arrow" onClick={prevSlide} />
      <AiFillRightCircle className="right-arrow" onClick={nextSlide} />
      {sliderData.map((slider, index) => {
        return (
          <div
            className={index === current ? "slide-active" : "slide"}
            key={index}
          >
            {index === current && (
              <img
                src={slider.image}
                alt="tokopedia-banner"
                className="image"
              />
            )}
          </div>
        );
      })}
    </div>
  );
}

export default Carousel;
