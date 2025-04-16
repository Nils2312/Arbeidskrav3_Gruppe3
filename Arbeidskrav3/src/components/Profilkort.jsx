import { Link } from "react-router-dom";

function Profilkort({ navn, epost, bilde }) {
  return (
    <Link to={`/${navn.toLowerCase().replace(" ", "-")}`} className="profilkort">
      <img src={bilde} alt={navn} />
      <h3>{navn}</h3>
      <a href={`mailto:${epost}`}>{epost}</a>
    </Link>
  );
}

export default Profilkort;

