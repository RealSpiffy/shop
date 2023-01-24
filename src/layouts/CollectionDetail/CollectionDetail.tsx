import { ShopifyLink } from "@/components/Link";
import { CollectionType, ProductType } from "@/lib/shopify";

type PageProps = {
  collection: CollectionType;
  products: ProductType[];
};

export const CollectionDetail = ({ collection, products }: PageProps) => {
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
