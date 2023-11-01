import "./App.css";
import Logox from "./assets/LOGOKasax1.5.svg";
import LogoFooter from "./assets/LOGOFooter.png";
import { FaAngleUp } from "react-icons/fa6";
import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Error() {
  return (
    <div className="container">
      <Header />
      <Banner />
      <Bars />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header>
      <img src={Logox} alt="Logo Kasa"></img>
      <nav>
        <Link to="/">Accueil</Link>
        <Link to="/About">A Propos</Link>
      </nav>
    </header>
  );
}

function Banner() {
  return (
    <div className="bannerAbout">
      <div className="darken"></div>
    </div>
  );
}

function Bars() {
  const [open, setOpen] = useState(false);
  const [openTwo, setOpenTwo] = useState(false);
  const [openThree, setOpenThree] = useState(false);
  const [openFour, setOpenFour] = useState(false);
  return (
    <div className="bars">
      <div className="bar">
        <p>Fiabilité</p>
        <FaAngleUp
          className={`arrow ${open ? `active` : `inactive`}`}
          style={{ color: "white", fontSize: "32px", alignSelf: "center" }}
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
          className={`arrow ${openTwo ? `active` : `inactive`}`}
          style={{ color: "white", fontSize: "32px", alignSelf: "center" }}
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
          className={`arrow ${openThree ? `active` : `inactive`}`}
          style={{ color: "white", fontSize: "32px", alignSelf: "center" }}
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
          className={`arrow ${openFour ? `active` : `inactive`}`}
          style={{ color: "white", fontSize: "32px", alignSelf: "center" }}
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

function Footer() {
  return (
    <footer>
      <img src={LogoFooter} alt="Logo Kasa"></img>
      <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  );
}
