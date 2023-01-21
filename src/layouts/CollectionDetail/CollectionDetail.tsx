import { ShopifyLink } from "@/components/Link";

type PageProps = {
  collection: ShopifyBuy.Collection;
};

export const CollectionDetail = ({ collection }: PageProps) => {
  return (
    <>
      <h1>PLP: {collection.title}</h1>
      <ul>
        {collection?.products.map((product) => (
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
