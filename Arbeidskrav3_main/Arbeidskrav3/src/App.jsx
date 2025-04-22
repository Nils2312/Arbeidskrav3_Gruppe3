/*
Her setter vi opp nettsiden med react router.
Browserrouter gjør at vi kan bruke lenker, som f.eks. /lucas.
Inni routes legges route-ene. Hver route har:
path: dette er nettadressen eks /lucas
element: dette er hvilken komponent som skal vises eks profilside
*/

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Profilside from "./components/Profilside";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/nils-kristian"
          element={
            <Profilside
              navn="Nils Kristian"
              bilde="https://i.postimg.cc/T3q5kGR0/New-Project-8.png"
              interesser={["Trening", "Minecraft", "Leve"]}
              bio="Jeg er Nils Kristian og jeg liker å trene og spille spill på fritiden min. Jeg liker også å henge med venner på fritiden. 
              Jeg syntes koding er veldig gøy når man får det til, men veldig frustrerende når det ikke funker."
            />
          }
        />
        <Route
          path="/isak"
          element={
            <Profilside
              navn="Isak"
              bilde="https://i.postimg.cc/Hkr2JrHK/New-Project-8.png"
              interesser={["Spill", "Venner"]}
              bio="Jeg heter Isak og jeg liker å spille spill på fritiden og henge med venner."
            />
          }
        />
        <Route
          path="/oskar"
          element={
            <Profilside
              navn="Oskar"
              bilde="https://i.postimg.cc/cCLcWmmK/bilde2.png"
              interesser={["Koding", "Spill"]}
              bio="Jeg heter Oskar og jeg liker å spille spill på fritiden og koding. Jeg liker å kode, men det er bare morsomt når jeg får det til."
            />
          }
        />
        <Route
          path="/lucas"
          element={
            <Profilside
              navn="Lucas"
              bilde="https://i.postimg.cc/6pW4m3M3/bilde3.png"
              interesser={["Spill", "Venner"]}
              bio="Jeg heter Lucas og jeg liker å spille spill på fritiden. Jeg liker også å henge med venner."
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;



