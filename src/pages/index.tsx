import type { GetStaticProps } from "next";
import { ShopifyLink } from "@/components/Link";
import { fetchAllCollections } from "@/lib/shopify";

type PageProps = {
  collections: ShopifyBuy.Collection[];
};

export default function Index({ collections }: PageProps) {
  return (
    <>
      <h1>Real Spiffy Shop</h1>
      <section>
        <h2>Collections</h2>
        <ul>
          {collections.map((collection) => (
            <li key={collection.handle}>
              <ShopifyLink object={collection}>{collection.title}</ShopifyLink>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}

export const getStaticProps: GetStaticProps = async ({ preview = false }) => {
  const collections = await fetchAllCollections();
  return { props: { preview, collections } };
};
