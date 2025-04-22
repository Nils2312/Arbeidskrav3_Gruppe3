//enkel logg funksjon flyttet fra home.jsx så vi får gjenbruke den flere steder
export function getSamletLogg(persons) {
    return persons
      .flatMap((medlem) =>
        (medlem.logg || []).map((entry) => ({
          navn: medlem.navn,
          tekst: entry.tekst,
          dato: entry.dato,
        }))
      )
      .sort((a, b) => new Date(b.dato) - new Date(a.dato)); 
  }
  