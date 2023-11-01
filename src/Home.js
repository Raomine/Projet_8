import "./App.css";
import Logox from "./assets/LOGOKasax1.5.svg";
import LogoFooter from "./assets/LOGOFooter.png";
import Data from "./LogementsData.js";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="container">
      <Header />
      <Banner />
      <Cards />
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
    <div className="banner">
      <div className="darken"></div>
      <p>Chez vous, partout et ailleurs</p>
    </div>
  );
}

function Cards() {
  return (
    <main className="cards">
      {Data.map(({ id, title, cover }) => (
        <Link key={id} to="/Logements">
          <div className="card">
            <div className="gradient"></div>
            <img src={cover} alt={title} />
            <h3>{title}</h3>
          </div>
        </Link>
      ))}
    </main>
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
