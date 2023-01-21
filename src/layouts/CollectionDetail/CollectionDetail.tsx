import { ShopifyLink } from "@/components/Link";
import { CollectionDetailType } from "@/lib/shopify";

type PageProps = {
  collection: CollectionDetailType;
};

export const CollectionDetail = ({ collection }: PageProps) => {
  const products = collection.products.edges.map(({ node }) => node);
  return (
    <>
      <h1>PLP: {collection.title}</h1>
      <ul>
        {products.map((product) => (
          <li key={product.handle}>
            <ShopifyLink type="product" handle={product.handle}>
              {product.title}
            </ShopifyLink>
          </li>
        ))}
      </ul>
    </>
  );
};
