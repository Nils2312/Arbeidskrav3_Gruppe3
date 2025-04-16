import Profilkort from "./Profilkort";

function Home() {
  return (
    <main>
      <section className="profilkortboks">
        <Profilkort
          navn="Nils Kristian"
          epost="nilskb@hiof.no"
          bilde="https://placehold.co/200"
        />
        <Profilkort
          navn="Isak"
          epost="isak@hiof.no"
          bilde="https://placehold.co/200"
        />
        <Profilkort
          navn="Oskar"
          epost="oskar@hiof.no"
          bilde="https://placehold.co/200"
        />
        <Profilkort
          navn="Lucas"
          epost="lucas@hiof.no"
          bilde="https://placehold.co/200"
        />
      </section>

      <section className="loggcontainer">
        <h2>Arbeidslogg</h2>
      </section>
    </main>
  );
}

export default Home;
