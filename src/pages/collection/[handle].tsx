import type { GetStaticPaths, GetStaticProps } from "next";
import { CollectionDetail } from "@/layouts/CollectionDetail";
import { getCollection, getCollectionHandles } from "@/lib/shopify";

export const getStaticProps: GetStaticProps = async ({
  params,
  preview = false,
}) => {
  const handle = Array.isArray(params.handle)
    ? params.handle[0]
    : params.handle;
  // Fetch data from Shopify
  const { collection, products } = await getCollection(handle);
  return { props: { preview, collection, products } };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const collectionHandles = await getCollectionHandles();
  const paths = collectionHandles.map((handle) => ({
    params: { handle },
  }));
  return { paths, fallback: false };
};

export default CollectionDetail;
