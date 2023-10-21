import "./App.css";
import Logox from "./assets/LOGOKasax1.5.svg";
import LogoFooter from "./assets/LOGOFooter.png";

export default function Logements() {
  return (
    <div className="container">
      <Header />
      <Logement />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header>
      <img src={Logox} alt="Logo Kasa"></img>
      <nav>
        <a href="/">Accueil</a>
        <a href="/About">A Propos</a>
      </nav>
    </header>
  );
}

function Logement() {
  return (
    <>
      <div className="carrousel">
        <img src="" alt=""></img>
      </div>
      <div className="content">
        <p className="title">
          Cozy loft on the Canal Saint-Martin <span>Paris, Île-de-France</span>
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
        <div className="rating"></div>
      </div>
    </>
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
