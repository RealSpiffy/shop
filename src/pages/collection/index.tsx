import type { GetStaticProps } from "next";
import { CollectionListing } from "@/layouts/CollectionListing";
import { getCollections } from "@/lib/shopify";

export const getStaticProps: GetStaticProps = async ({ preview = false }) => {
  const collections = await getCollections();
  return { props: { preview, collections } };
};

export default CollectionListing;
