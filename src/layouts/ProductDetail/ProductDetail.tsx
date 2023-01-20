type PageProps = {
  product: ShopifyBuy.Product;
};

export const ProductDetail = ({ product }: PageProps) => {
  return (
    <>
      <h1>PDP: {product.title}</h1>
      <pre>{JSON.stringify(product, null, 2)}</pre>
    </>
  );
};
