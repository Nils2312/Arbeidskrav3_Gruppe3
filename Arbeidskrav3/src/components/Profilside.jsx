// src/components/Profilside.jsx

function Profilside({ navn, bilde, epost, interesser, bio }) {
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
           <h2>Arbeidslogg</h2>
         </section>
       </main>
     );
   }
   
   export default Profilside;
   