import { ShopifyLink } from "@/components/Link";
import { CollectionListingType } from "@/lib/shopify";

type PageProps = {
  collections: CollectionListingType;
};

export const Homepage = ({ collections }: PageProps) => {
  return (
    <>
      <h1>Real Spiffy Shop</h1>
      <section>
        <h2>Collections</h2>
        <ul>
          {collections.map((collection) => (
            <li key={collection.handle}>
              <ShopifyLink type="collection" handle={collection.handle}>
                {collection.title}
              </ShopifyLink>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};
