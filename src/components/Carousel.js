import "./styles/Carousel.css";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import React, { useState } from "react";

export default function Carrousel({ pictures, title }) {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent(current === picturesLength - 1 ? 0 : current + 1);
  };

  const previousSlide = () => {
    setCurrent(current === 0 ? picturesLength - 1 : current - 1);
  };

  const picturesLength = pictures.length;

  return (
    <div className="slider">
      <div>
        <img className="slide" src={pictures[current]} alt={title} />
      </div>
      {pictures.length > 1 && (
        <FaAngleLeft className="arrow arrow-left" onClick={previousSlide} />
      )}
      {pictures.length > 1 && (
        <FaAngleRight className="arrow arrow-right" onClick={nextSlide} />
      )}
      {pictures.length > 1 && (
        <span className="nSlide">
          {current + 1} / {picturesLength}
        </span>
      )}
    </div>
  );
}
