import type { GetStaticProps } from "next";
import { CollectionListing } from "@/layouts/CollectionListing";
import { fetchAllCollections } from "@/lib/shopify";

export const getStaticProps: GetStaticProps = async ({ preview = false }) => {
  const collections = await fetchAllCollections();
  return { props: { preview, collections } };
};

export default CollectionListing;
