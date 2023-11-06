import "./styles/Bars.css";
import { FaAngleUp } from "react-icons/fa6";
import React, { useState } from "react";

export default function Bars() {
  const [open, setOpen] = useState(null);
  const [openTwo, setOpenTwo] = useState(false);
  const [openThree, setOpenThree] = useState(false);
  const [openFour, setOpenFour] = useState(false);
  return (
    <div className="bars">
      <div className="bar">
        <p>Fiabilité</p>
        <FaAngleUp
          className={`arrow-down_bar ${open ? `active` : `inactive`}`}
          onClick={() => {
            setOpen(!open);
          }}
        />
      </div>
      <p className={`text ${open ? `active` : `inactive`}`}>
        Les annonces postées sur Kasa garantissent une fiabilité totale. Les
        photos sont conformes aux logements, et toutes les informations sont
        régulièrement vérifiées par nos équipes.
      </p>
      <div className="bar">
        <p>Respect</p>
        <FaAngleUp
          className={`arrow-down_bar ${openTwo ? `active` : `inactive`}`}
          onClick={() => {
            setOpenTwo(!openTwo);
          }}
        />
      </div>
      <p className={`text ${openTwo ? `active` : `inactive`}`}>
        La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
        comportement discriminatoire ou de perturbation du voisinage entraînera
        une exclusion de notre plateforme.
      </p>
      <div className="bar">
        <p>Service</p>
        <FaAngleUp
          className={`arrow-down_bar ${openThree ? `active` : `inactive`}`}
          onClick={() => {
            setOpenThree(!openThree);
          }}
        />
      </div>
      <p className={`text ${openThree ? `active` : `inactive`}`}>
        La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
        comportement discriminatoire ou de perturbation du voisinage entraînera
        une exclusion de notre plateforme.
      </p>
      <div className="bar">
        <p>Sécurité</p>
        <FaAngleUp
          className={`arrow-down_bar ${openFour ? `active` : `inactive`}`}
          onClick={() => {
            setOpenFour(!openFour);
          }}
        />
      </div>
      <p className={`text ${openFour ? `active` : `inactive`}`}>
        La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour
        les voyageurs, chaque logement correspond aux critères de sécurité
        établis par nos services. En laissant une note aussi bien à l'hôte qu'au
        locataire, cela permet à nos équipes de vérifier que les standards sont
        bien respectés. Nous organisons également des ateliers sur la sécurité
        domestique pour nos hôtes.
      </p>
    </div>
  );
}
