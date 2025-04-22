/*
Denne filen henter loggføringene fra sanity og viser dem på nettsiden.
usestate lager en tom liste som heter logg. Den blir fylt med data etterpå.
useeffect kjører når siden åpnes. Den henter loggdata fra sanity.
client.fetch er det som henter loggene. | order(_createdAt desc) betyr at de nyeste kommer først.
setLogg(data) lagrer det som kommer fra sanity i logg.
I return delen vises en overskrift og en liste over alle loggene.
logg.map går gjennom alle loggene og viser navn og tekst for hver.
Dette gjør at nye loggføringer vises automatisk når de blir lagt inn i Sanity.
*/

import { useEffect, useState } from 'react'
import client from '../sanityClient'

export default function Logg() {
  const [logg, setLogg] = useState([])

  useEffect(() => {
    client.fetch(`*[_type == "logg"] | order(_createdAt desc)`)
      .then(data => setLogg(data))
  }, [])

  return (
    <div>
      <h2>Logg</h2>
      <ul>
        {logg.map((item) => (
          <li key={item._id}>
            <strong>{item.navn}</strong>: {item.innhold}
          </li>
        ))}
      </ul>
    </div>
  )
}
