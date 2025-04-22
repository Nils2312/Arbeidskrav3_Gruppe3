import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchPersonBySlug } from "../sanity/personServices";
import "../styles/profilside.scss"

//henter inn samletLogg fra loggServices, deretter bruker slug til å hente gruppemedlem basert på slug. Måtte bruke chatGPT på denne 
//profilside funksjonen siden den ville ikke vise bilde i linje 24. Også sorterer logg
export default function Profilside({samletLogg }) {
  const { slug } = useParams();
  const [person, setPerson] = useState(null);
  const sortertLogg = samletLogg.filter(entry => entry.navn === person?.navn);
  useEffect(() => {
    const getPerson = async () => {
      const data = await fetchPersonBySlug(slug);
      setPerson(data);
    };
    getPerson();
  }, [slug]);
  if (!person) return <p>Laster Inn Gruppemedlem</p>;

  //printer ut profilsiden fra personServices, deretter printer ut sortert log
  return (
        <main className="profilside">
        <section className="profilinfo">
        <img src={person.image?.asset?.url} alt={person.navn} />
          <div>
            <h2>{person.navn}</h2>
            <p>{person.epost}</p>
            <h3>Interesser</h3>
            <ul>
              {person.interesser.map((interesse, i) => (
                <li key={i}>{interesse}</li>
              ))}
            </ul>
          </div>
        </section>
  
        <section className="bio">
          <h3>Biografi</h3>
          <p>{person.bio}</p>
        </section>
  
        <section className="logg">
          <h3>Arbeidslogg</h3>
          {sortertLogg?.length > 0 ? (
              <ul>
                {sortertLogg.map((entry, index) => (
                  <li key={index}>
                    <strong>{entry.dato}</strong> {entry.tekst}
                  </li>
                ))}
              </ul>
            ) : (
              <p>Test test</p>
          )}
        </section>
      </main>
  );
}
