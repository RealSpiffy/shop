import { ProductType } from "@/queries/product";

type PageProps = {
  data: ProductType;
  product: ShopifyBuy.Product;
};

export const ProductDetail = ({ data, product }: PageProps) => {
  return (
    <>
      <h1>PDP: {product.title}</h1>
      <pre>{JSON.stringify(product, null, 2)}</pre>
      <h2>Sanity Data</h2>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </>
  );
};
