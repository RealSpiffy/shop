import type { GetStaticPaths, GetStaticProps } from "next";
import { ShopifyLink } from "@/components/Link";
import { fetchAllCollections, fetchCollection } from "@/lib/shopify";

type PageProps = {
  collection: ShopifyBuy.Collection;
};

export default function CollectionDetailPage({ collection }: PageProps) {
  return (
    <>
      <h1>PLP: {collection.title}</h1>
      <ul>
        {collection?.products.map((product) => (
          <li key={product.handle}>
            <ShopifyLink object={product}>{product.title}</ShopifyLink>
          </li>
        ))}
      </ul>
    </>
  );
}

export const getStaticProps: GetStaticProps = async ({
  params,
  preview = false,
}) => {
  const handle = Array.isArray(params.handle)
    ? params.handle[0]
    : params.handle;
  const collection = await fetchCollection(handle);
  return { props: { preview, collection } };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const collections = await fetchAllCollections();
  const paths = collections.map(({ handle }) => ({
    params: { handle },
  }));
  return { paths, fallback: false };
};
