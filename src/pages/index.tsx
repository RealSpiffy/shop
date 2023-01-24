import type { GetStaticProps } from "next";
import { Homepage } from "@/layouts/Homepage";
import { fetchCollections } from "@/lib/shopify";

export const getStaticProps: GetStaticProps = async ({ preview = false }) => {
  const collections = await fetchCollections();
  return { props: { preview, collections } };
};

export default Homepage;
