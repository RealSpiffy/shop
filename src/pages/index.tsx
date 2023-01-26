import type { GetStaticProps } from "next";
import { Homepage } from "@/layouts/Homepage";
import { getCollections } from "@/lib/shopify";

export const getStaticProps: GetStaticProps = async ({ preview = false }) => {
  const collections = await getCollections();
  return { props: { preview, collections } };
};

export default Homepage;
