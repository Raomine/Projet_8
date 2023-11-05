import "./styles/Logement.css";
import Carousel from "./Carousel.js";
import Error from "./MainError.js";
import Data from "../data/LogementsData.js";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { FaStar } from "react-icons/fa6";
import { FaAngleUp } from "react-icons/fa6";

export default function Logement() {
  const [open, setOpen] = useState(false);
  const [openTwo, setOpenTwo] = useState(false);

  const params = useParams();
  const datas = Data.find((datas) => datas.id === params.id);
  if (datas === undefined) {
    return <Error />;
  }

  const {
    pictures,
    title,
    location,
    host,
    tags,
    rating,
    description,
    equipments,
  } = datas;

  const renderTags = (tag) => {
    return tag.map((tag) => <p className="tag">{tag}</p>);
  };

  const stars = [1, 2, 3, 4, 5];

  const renderEquipements = (e) => {
    return e.map((e) => <li>{e}</li>);
  };

  return (
    <>
      <div className="carousel">
        <Carousel pictures={pictures} title={title} />
      </div>
      <div className="contents">
        <div className="content">
          <p className="title">
            {title}
            <span>{location}</span>
          </p>
          <div className="host">
            <p className="name">{host.name}</p>
            <div className="picture">
              <img src={host.picture} alt={host.name} />
            </div>
          </div>
        </div>
        <div className="infos">
          <div className="tags">{renderTags(tags)}</div>
          <div className="rating">
            {stars.map((star, id) => (
              <FaStar
                key={id}
                className={`${rating >= star ? "stars" : "star"}`}
              />
            ))}
          </div>
        </div>
        <section>
          <div className="d_pull-down">
            <div className="descriptions">
              <p className="description">Description</p>
              <FaAngleUp
                className={`arrow-down ${open ? `active` : `inactive`}`}
                onClick={() => {
                  setOpen(!open);
                }}
              />
            </div>
            <p className={`logementText ${open ? `active` : `inactive`}`}>
              {description}
            </p>
          </div>
          <div className="e_pull-down">
            <div className="equipements">
              <p className="equipement">Équipements</p>
              <FaAngleUp
                className={`arrow-down ${openTwo ? `active` : `inactive`}`}
                onClick={() => {
                  setOpenTwo(!openTwo);
                }}
              />
            </div>
            <ul
              className={`logementTextTwo ${openTwo ? `active` : `inactive`}`}
            >
              {renderEquipements(equipments)}
            </ul>
          </div>
        </section>
      </div>
    </>
  );
}
