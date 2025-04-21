import { useEffect, useState } from "react";
import sanityClient from "../sanityClient";
import "../styles/profilside.scss"

/*
Denne koden viser en egen side for hver person. Den tar imot navn, bilde, epost, interesser og bio som props
Loggføringen hentes fra sanity akkurat som i Home.jsx men kun for en person basert på navnet
Loggene sorteres slik at de nyeste vises øverst
Øverst vises bilde, navn, epost og interesser. Under vises bio og loggføringen
*/

function Profilside({ navn, bilde, epost, interesser, bio }) {
  const [logg, setLogg] = useState([]);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "gruppemedlem" && navn == $navn][0]{
          logg[]{
            tekst,
            dato
          }
        }`,
        { navn }
      )
      .then((data) => {
        if (data?.logg) {
          const sortertLogg = [...data.logg].sort(
            (a, b) => new Date(b.dato) - new Date(a.dato)
          );
          setLogg(sortertLogg);
        }
      })
  }, [navn]);
  return (
    <main className="profilside">
      <section className="profilinfo">
        <img src={bilde} alt={navn} />
        <div>
          <h2>{navn}</h2>
          <p>{epost}</p>
          <h3>Interesser</h3>
          <ul>
            {interesser.map((interesse, i) => (
              <li key={i}>{interesse}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bio">
        <h3>Biografi</h3>
        <p>{bio}</p>
      </section>

      <section className="logg">
        <h3>Arbeidslogg</h3>
        {logg.length > 0 ? (
          <ul>
            {logg.map((entry, i) => (
              <li key={i}>
                <strong>{entry.dato}:</strong> {entry.tekst}
              </li>
            ))}
          </ul>
        ) : (
          <p>Teeest</p>
        )}
      </section>
    </main>
  );
}

export default Profilside;

   