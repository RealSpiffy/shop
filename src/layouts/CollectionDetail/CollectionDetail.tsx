import { ShopifyLink } from "@/components/Link";
import type { CollectionType } from "@/queries/collection";

type PageProps = {
  data: CollectionType;
  collection: ShopifyBuy.Collection;
};

export const CollectionDetail = ({ data, collection }: PageProps) => {
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
      <h2>Sanity Data</h2>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </>
  );
};
