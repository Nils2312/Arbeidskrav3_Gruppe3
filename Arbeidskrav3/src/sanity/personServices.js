import { client } from "./sanityClient";

//Denne funksjonen henter gruppemedlemer fra sanity
export async function fetchAllPersons() {
  const data = await client.fetch(`*[_type == "gruppemedlemBranch"]{
    navn,
    image{asset->{url}},
    epost,
    logg[]{ tekst, dato },
    slug,
    bio,
    interesser
  }`);
  return data;
}

//Denne henter gruppemedlemer basert på slug
export async function fetchPersonBySlug(slug) {
  const data = await client.fetch(
    `*[_type == "gruppemedlemBranch" && slug.current == $slug][0]{
      navn,
      image{asset->{url}},
      epost,
      logg[]{ tekst, dato },
      slug,
      bio,
      interesser
    }`, 
    { slug }
  );
  return data;
}