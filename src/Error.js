import "./App.css";
import Logox from "./assets/LOGOKasax1.5.svg";
import LogoFooter from "./assets/LOGOFooter.png";

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
        <a href="/">Accueil</a>
        <a href="/About">A Propos</a>
      </nav>
    </header>
  );
}

function Main() {
  return (
    <>
      <p className="error">404</p>
      <p className="oups">Oups! La page que vous demandez n'existe pas.</p>
      <a className="home" href="/">
        Retourner sur la page d’accueil
      </a>
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
