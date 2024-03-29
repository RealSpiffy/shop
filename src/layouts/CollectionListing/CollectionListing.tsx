import { ShopifyLink } from "@/components/Link";
import { CollectionType } from "@/lib/shopify";

type PageProps = {
  collections: CollectionType[];
};

export const CollectionListing = ({ collections }: PageProps) => {
  return (
    <>
      <h1>All Collections</h1>
      <ul>
        {collections.map((collection) => (
          <li key={collection.handle}>
            <ShopifyLink type="collection" handle={collection.handle}>
              {collection.title}
            </ShopifyLink>
          </li>
        ))}
      </ul>
    </>
  );
};
