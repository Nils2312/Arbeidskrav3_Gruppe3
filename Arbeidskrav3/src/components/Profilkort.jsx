import { Link } from "react-router-dom";

import "../styles/profilkort.scss"
/* Importerer styling fra profilkort.scss */


/*
Denne koden viser et lite selve profilkortet med navn, bilde og epost.
*/

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

