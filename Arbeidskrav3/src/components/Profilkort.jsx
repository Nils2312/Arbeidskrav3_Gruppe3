import { Link } from "react-router-dom";
import "../styles/profilkort.scss"
/*
Denne koden viser et lite selve profilkortet med navn, bilde og epost.
*/

//endret profilkort til å bruke person fra personServices.js
export default function Profilkort({ person }) {
  return (
    <article>
    <Link to={`/${person.slug?.current}`}>
      <img src={person.image?.asset?.url} alt={person.navn} />
      <h3>{person.navn}</h3>
      </Link>
      <a href={`mailto:${person.epost}`}>{person.epost}</a>
      </article>

  );
}