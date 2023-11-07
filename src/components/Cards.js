import "./styles/Cards.css";
import { Link } from "react-router-dom";

export default function Cards(props) {
  const data = props.data;

  return (
    <main className="cards">
      {data.map(({ id, title, cover }) => (
        <Link key={id} to={`/Logements/${id}`}>
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
