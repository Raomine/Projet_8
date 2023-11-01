import "./App.css";
import Logox from "./assets/LOGOKasax1.5.svg";
import LogoFooter from "./assets/LOGOFooter.png";
import { Link } from "react-router-dom";

function Error() {
  return (
    <div className="errorContainer">
      <Header />
      <Main />
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

function Main() {
  return (
    <>
      <p className="error">404</p>
      <p className="oups">Oups! La page que vous demandez n'existe pas.</p>
      <Link className="home" to="/">
        Retourner sur la page d’accueil
      </Link>
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

export default Error;
