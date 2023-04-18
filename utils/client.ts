import sanityClient from "@sanity/client";

export const client = sanityClient({
  projectId: "el3hok59",
  dataset: "production",
  apiVersion: "2022-11-21",
  useCdn: false,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
});
