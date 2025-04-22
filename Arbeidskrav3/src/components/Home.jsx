import Profilkort from "./Profilkort";
import "../styles/home.scss"
/* Importerer styling fra home.scss */
/*
Her lages forsiden. Øverst vises et profilkort for hvert gruppemedlem. Under vises alle loggføringer fra Sanity.

usestate lager en tom liste som senere fylles med loggføringer
useEffect henter data fra sanity når siden åpnes
Vi henter navn og logg for alle gruppemedlemmer
Deretter settes alle loggene sammen i en liste og sorteres så de nyeste kommer øverst

Til slutt vises alle kortene i toppen og loggene under.
Hver logg viser dato, navn og selve teksten.
*/
//henter inn persons og samletLogg fra app.jsx
//deretter printer profilkort i main, og så printer loggkonteiner under
export default function Home({persons, samletLogg}) {
  console.log(persons)
  return (
    <main>
      <section className="profilkortboks">
      {persons?.map((person) => (
        <Profilkort person={person} key={person.navn} />
      ))}
      </section>

      <section className="loggcontainer">
      <h2>Arbeidslogg</h2>
        {samletLogg?.length > 0 ? (
          <ul>
            {samletLogg.map((entry, index) => (
              <li key={index}>
                <strong>{new Date(entry.dato).toLocaleDateString()}</strong> –{" "}
                {entry.navn}: {entry.tekst}
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
