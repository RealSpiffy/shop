import { ShopifyLink } from "@/components/Link";

type PageProps = {
  collections: ShopifyBuy.Collection[];
};

export const CollectionListing = ({ collections }: PageProps) => {
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
};
