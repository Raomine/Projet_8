import "./styles/Cards.css";
import Data from "../data/LogementsData.js";
import { Link } from "react-router-dom";

export default function Cards() {
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
