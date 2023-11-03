import "./styles/Carousel.css";
import Data from "../data/LogementsData.js";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import React, { useState } from "react";

const ImageSlider = ({ slides }) => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent(current === slides.length - 1 ? 0 : current + 1);
  };

  const previousSlide = () => {
    setCurrent(current === 0 ? slides.length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <div className="pictures">
      <FaAngleLeft className="arrow arrow-left" onClick={previousSlide} />

      <FaAngleRight className="arrow arrow-right" onClick={nextSlide} />
      <span className="bullets">
        {Data.map((id, pictures) => {
          return (
            <button
              key={id}
              onClick={() => setCurrent(pictures[current])}
              className={
                pictures === current ? "bullet" : "bullet bullet-inactive"
              }
            ></button>
          );
        })}
      </span>
    </div>
  );
};

export default ImageSlider;
