/*
I denne filen lager vi et skjema for gruppemedlem i sanity. Dette bestemmer hva slags informasjon hvert medlem skal ha. 
Vi har lagt inn to felter, ett for navnet, og ett for loggføringer. Navn er bare en vanlig tekst. 
Loggføringene er en liste med objekter som inneholder selve teksten som er skrevet, og datoen det ble skrevet. 
Dette skjemaet gjør at vi kan legge inn flere loggføringer for hvert medlem, og det brukes senere for å hente ut loggdata i react.
Vi bruker object slik at vi kan legge inn flere ting inni ett element.
*/

export default {
     name: 'gruppemedlem',
     title: 'Gruppemedlem',
     type: 'document',
     fields: [
       {
         name: 'navn',
         title: 'Navn',
         type: 'string',
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
   