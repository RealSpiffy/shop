import type { GetStaticProps } from "next";
import { CollectionListing } from "@/layouts/CollectionListing";
import { fetchCollections } from "@/lib/shopify";

export const getStaticProps: GetStaticProps = async ({ preview = false }) => {
  const collections = await fetchCollections();
  return { props: { preview, collections } };
};

export default CollectionListing;
