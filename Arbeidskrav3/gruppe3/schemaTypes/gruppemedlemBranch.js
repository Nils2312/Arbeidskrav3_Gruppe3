/*
I denne filen lager vi et skjema for gruppemedlem i sanity. Dette bestemmer hva slags informasjon hvert medlem skal ha. 
Vi har lagt inn to felter, ett for navnet, og ett for loggføringer. Navn er bare en vanlig tekst. 
Loggføringene er en liste med objekter som inneholder selve teksten som er skrevet, og datoen det ble skrevet. 
Dette skjemaet gjør at vi kan legge inn flere loggføringer for hvert medlem, og det brukes senere for å hente ut loggdata i react.
Vi bruker object slik at vi kan legge inn flere ting inni ett element.
*/


//Oppdatering: Lå til flere kategorier til sanity: Slug, Profilbilde, Epost, Bio, Interesser. Ny branch fil for testing

export default {
     name: 'gruppemedlemBranch',
     title: 'GruppemedlemBranch',
     type: 'document',
     fields: [
       {
         name: 'navn',
         title: 'Navn',
         type: 'string',
       },
       //lå til en slug basert på navnet
       {
        name: 'slug',
        type: 'slug',
        options: {
          source: 'navn',
          maxLength: 200, // will be ignored if slugify is set
          slugify: (input) => input.toLowerCase().replace(/\s+/g, '-').slice(0, 200),
        },
      },
      //profilbilde som blir uploaded til sanity
      {
        name: 'image',
        type: 'image',
      },
      //epost
      {
        name: 'epost',
        type: 'string',
      },
      //bio
      {
        name: 'bio',
        type: 'text',
      },
      //array med interesser
      {
        name: 'interesser',
        type: 'array',
        of: [
          {type: 'string' }
        ]
      },
   
       {
         name: 'logg',
         title: 'Loggføringer',
         type: 'array',
         of: [
           {
             type: 'object',
             fields: [
               { name: 'tekst', title: 'Tekst', type: 'string' },
               { name: 'dato', title: 'Dato', type: 'date' },
             ],
           },
         ],
       },
     ],
   };