import type { GetStaticProps } from "next";
import { Homepage } from "@/layouts/Homepage";
import { fetchAllCollections } from "@/lib/shopify";

export const getStaticProps: GetStaticProps = async ({ preview = false }) => {
  const collections = await fetchAllCollections();
  return { props: { preview, collections } };
};

export default Homepage;
