import "./styles/Footer.css";
import LogoFooter from "../assets/LOGOFooter.png";

export default function Footer() {
  return (
    <footer>
      <img src={LogoFooter} alt="Logo Kasa"></img>
      <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  );
}
