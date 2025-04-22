/*
Her setter vi opp nettsiden med react router.
Browserrouter gjør at vi kan bruke lenker, som f.eks. /lucas.
Inni routes legges route-ene. Hver route har:
path: dette er nettadressen eks /lucas
element: dette er hvilken komponent som skal vises eks profilside
*/

import { useEffect, useState } from "react";
import { fetchAllPersons } from "./sanity/personServices";
import { getSamletLogg } from "./sanity/loggServices";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Profilside from "./components/Profilside";
import Header from "./components/Header";


//Endret de hardkoda routes over til dynamiske routes som er basert på current slug. 
//sender personServices vidre i prosjektet som persons. sender også loggen
function App(){
  const [persons, setPersons] = useState([]);
  const samletLogg = getSamletLogg(persons);


  const getAllPersons = async () => {
    const data = await fetchAllPersons();
    setPersons(data);
  };

  useEffect(() => {
    getAllPersons();
  }, []);
  
return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home 
            persons={persons}
            samletLogg={samletLogg}
        />} />
        <Route path="/:slug" element={<Profilside persons={persons} samletLogg={samletLogg} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;



