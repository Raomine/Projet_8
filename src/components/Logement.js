import "./styles/Logement.css";
import Carousel from "./Carousel.js";
import Data from "../data/LogementsData.js";
import React, { useState } from "react";
import { FaStar } from "react-icons/fa6";
import { FaAngleUp } from "react-icons/fa6";

export default function Logement() {
  const [open, setOpen] = useState(false);
  const [openTwo, setOpenTwo] = useState(false);

  return (
    <>
      <div className="carousel">
        <Carousel slides={Data} />
      </div>
      <div className="contents">
        <div className="content">
          <p className="title">
            Cozy loft on the Canal Saint-Martin{" "}
            <span>Paris, Île-de-France</span>
          </p>
          <div className="host">
            <p className="name">Alexandre Dumas</p>
            <div className="picture"></div>
          </div>
        </div>
        <div className="infos">
          <div className="tags">
            <p className="tag">Cozy</p>
            <p className="tag">Canal</p>
            <p className="tag">Paris 10</p>
          </div>
          <div className="rating">
            <FaStar className="stars" />
            <FaStar className="stars" />
            <FaStar className="stars" />
            <FaStar className="stars" />
            <FaStar className="star" />
          </div>
        </div>
        <section>
          <div className="d_pull-down">
            <div className="descriptions">
              <p className="description">Description</p>
              <FaAngleUp
                className={`arrow-down ${open ? `active` : `inactive`}`}
                style={{
                  color: "white",
                  fontSize: "32px",
                  alignSelf: "center",
                }}
                onClick={() => {
                  setOpen(!open);
                }}
              />
            </div>
            <p className={`logementText ${open ? `active` : `inactive`}`}>
              Profitez du charme de la vie parisienne dans un magnifique
              appartement. A 3 minutes à pied du Canl Saint Martin, vous serez
              proche des transports, mais également de nombreux commerces.
              L'appartement est tout équipé, et possède également un parking
              pour ceux qui souhaitent se déplacer en voiture.
            </p>
          </div>
          <div className="e_pull-down">
            <div className="equipements">
              <p className="equipement">Équipements</p>
              <FaAngleUp
                className={`arrow-down ${openTwo ? `active` : `inactive`}`}
                style={{
                  color: "white",
                  fontSize: "32px",
                  alignSelf: "center",
                }}
                onClick={() => {
                  setOpenTwo(!openTwo);
                }}
              />
            </div>
            <ul
              className={`logementTextTwo ${openTwo ? `active` : `inactive`}`}
            >
              <li>Parking</li>
              <li>Sèche Cheveux</li>
              <li>Machine à laver</li>
              <li>Wi-fi</li>
              <li>Cuisine équipée</li>
              <li>Télévision</li>
            </ul>
          </div>
        </section>
      </div>
    </>
  );
}
