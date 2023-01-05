import { GetStaticProps } from "next";
import { ShopifyLink } from "@/components/Link";
import { fetchAllCollections } from "@/lib/shopify";

type PageProps = {
  collections: ShopifyBuy.Collection[];
};

export default function CollectionListingPage({ collections }: PageProps) {
  return (
    <>
      <h1>All Collections</h1>
      <ul>
        {collections.map((collection) => (
          <li key={collection.handle}>
            <ShopifyLink object={collection}>{collection.title}</ShopifyLink>
          </li>
        ))}
      </ul>
    </>
  );
}

export const getStaticProps: GetStaticProps = async ({ preview = false }) => {
  const collections = await fetchAllCollections();
  return { props: { preview, collections } };
};
