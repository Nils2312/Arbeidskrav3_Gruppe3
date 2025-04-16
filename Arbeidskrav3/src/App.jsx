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
              bilde="https://placehold.co/250x250"
              interesser={["Trening", "Minecraft", "Leve"]}
              bio="Jeg er Nils Kristian og jeg liker å trene og spille spill på fritiden min."
            />
          }
        />
        <Route
          path="/isak"
          element={
            <Profilside
              navn="Isak"
              bilde="https://placehold.co/250x250"
              interesser={["Tekst", "Tekst"]}
              bio="Jeg heter Isak og jeg liker..."
            />
          }
        />
        <Route
          path="/oskar"
          element={
            <Profilside
              navn="Oskar"
              bilde="https://placehold.co/250x250"
              interesser={["Tekst", "Tekst"]}
              bio="Jeg heter Oskar og jeg liker..."
            />
          }
        />
        <Route
          path="/lucas"
          element={
            <Profilside
              navn="Lucas"
              bilde="https://placehold.co/250x250"
              interesser={["Tekst", "Tekst"]}
              bio="Jeg heter Lucas og jeg liker..."
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;



