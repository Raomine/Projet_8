import "./styles/Error.css";
import { Link } from "react-router-dom";

export default function MainError() {
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
