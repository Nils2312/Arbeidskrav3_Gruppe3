import sanityClient from '@sanity/client'

export default sanityClient({
  projectId: '5jlnkgql', //IKKE ENDRE DENNEEEE 
  dataset: 'production',
  useCdn: true,
  apiVersion: '2023-01-01',
})
