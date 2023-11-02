import "./styles/Header.css";
import Logox from "../assets/LOGOKasax1.5.svg";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <div className="logo"></div>
      <nav>
        <Link to="/">Accueil</Link>
        <Link to="/About">A Propos</Link>
      </nav>
    </header>
  );
}
