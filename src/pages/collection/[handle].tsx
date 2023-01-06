import type { GetStaticPaths, GetStaticProps } from "next";
import { CollectionDetail } from "@/layouts/CollectionDetail";
import { fetchAllCollections, fetchCollection } from "@/lib/shopify";
import { fetchCollectionByHandle } from "@/queries/collection";

export const getStaticProps: GetStaticProps = async ({
  params,
  preview = false,
}) => {
  const handle = Array.isArray(params.handle)
    ? params.handle[0]
    : params.handle;
  // Fetch initial data from Shopify
  const collection = await fetchCollection(handle);
  // Fetch additional data from Sanity Studio
  const data = await fetchCollectionByHandle(handle);
  return { props: { preview, data, collection } };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const collections = await fetchAllCollections();
  const paths = collections.map(({ handle }) => ({
    params: { handle },
  }));
  return { paths, fallback: false };
};

export default CollectionDetail;
