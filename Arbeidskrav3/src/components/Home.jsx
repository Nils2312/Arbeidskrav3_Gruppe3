import { useEffect, useState } from "react";
import Profilkort from "./Profilkort";
import sanityClient from "../sanityClient";

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

function Home() {
  const [alleLogg, setAlleLogg] = useState([]);

  /*
  Her henter koden data fra sanity når forsiden lastes inn. Den spør om alle dokumenter av typen gruppemedlem 
  og for hvert medlem henter den navnet og loggføringene deres.
  Dette gjør at vi får tak i all logg som skal vises på forsiden.
  */
  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "gruppemedlem"]{
          navn,
          logg[]{
            tekst,
            dato
          }
        }`
      )
/*
Her blir loggene fra alle medlemmene samlet i en liste. Den går gjennom hvert medlem og legger til alle loggføringer med navn, 
tekst og dato. Etterpå sorteres listen slik at de nyeste loggene kommer først. Til slutt lagres alt i allelogg 
som brukes for å vise loggen på siden.
*/
      .then((data) => {
        const samletLogg = data
          .flatMap((medlem) =>
            (medlem.logg || []).map((entry) => ({
              navn: medlem.navn,
              tekst: entry.tekst,
              dato: entry.dato,
            }))
          )
          .sort((a, b) => new Date(b.dato) - new Date(a.dato)); 

        setAlleLogg(samletLogg);
      })
  }, []);

/*
Denne delen viser loggføringen på forsiden.
Hvis allelogg har innhold så vises en liste med loggene. 
Hvis det ikke finnes noen logg, vises bare teksten Test test - placeholder tekst
Alt er plassert inne i en <section> med classname loggcontainer som kan styles med CSS.
  */
  return (
    <main>
      <section className="profilkortboks">
        <Profilkort navn="Nils Kristian" epost="nilskb@hiof.no" bilde="https://i.postimg.cc/T3q5kGR0/New-Project-8.png" />
        <Profilkort navn="Isak" epost="isak@hiof.no" bilde="https://i.postimg.cc/Hkr2JrHK/New-Project-8.png" />
        <Profilkort navn="Oskar" epost="oskar@hiof.no" bilde="https://i.postimg.cc/cCLcWmmK/bilde2.png" />
        <Profilkort navn="Lucas" epost="lucas@hiof.no" bilde="https://i.postimg.cc/6pW4m3M3/bilde3.png" />
      </section>
      <section className="loggcontainer">
        <h2>Arbeidslogg</h2>
        {alleLogg.length > 0 ? (
          <ul>
            {alleLogg.map((entry, index) => (
              <li key={index}>
                <strong>{entry.dato}</strong> – {entry.navn}: {entry.tekst}
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

export default Home;

