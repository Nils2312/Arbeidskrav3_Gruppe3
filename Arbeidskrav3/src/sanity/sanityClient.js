import SanityClientConstructor from "@sanity/client";

export const client = SanityClientConstructor({
  projectId: '5jlnkgql', //IKKE ENDRE DENNEEEE 
  dataset: "production",
  apiVersion: "v2025-03-24",
  useCdn: false,
});
