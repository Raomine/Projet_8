import "./styles/Carousel.css";
import Data from "../data/LogementsData.js";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import React, { useState } from "react";

export default function Carousel(pictures) {
  const [slide, setSlide] = useState(0);

  const nextSlide = () => {
    setSlide(slide === Data.length - 1 ? 0 : slide + 1);
  };

  const previousSlide = () => {
    setSlide(slide === 0 ? Data.length - 1 : slide - 1);
  };

  return (
    <div className="carousel">
      <FaAngleLeft className="arrow arrow-left" onClick={previousSlide} />
      {Data.map(({ title, pictures, id }) => (
        <img
          src={pictures[slide]}
          alt={title}
          key={id}
          className={slide === pictures ? "slide" : "slide slide-hidden"}
        />
      ))}
      <FaAngleRight className="arrow arrow-right" onClick={nextSlide} />
      <span className="bullets">
        {Data.map((_, pictures) => {
          return (
            <button
              key={pictures}
              onClick={() => setSlide(pictures[slide])}
              className={
                slide === pictures ? "bullet" : "bullet bullet-inactive"
              }
            ></button>
          );
        })}
      </span>
    </div>
  );
}
