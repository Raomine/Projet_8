import "./App.css";
import Logox from "./assets/LOGOKasax1.5.svg";
import LogoFooter from "./assets/LOGOFooter.png";

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
        <a href="/*">Accueil</a>
        <a href="/About">A Propos</a>
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
  return <div className="bars"></div>;
}

function Footer() {
  return (
    <footer>
      <img src={LogoFooter} alt="Logo Kasa"></img>
      <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  );
}
