import type { GetStaticPaths, GetStaticProps } from "next";
import { fetchAllProducts, fetchProduct } from "@/lib/shopify";

type PageProps = {
  product: ShopifyBuy.Product;
};

export default function ProductDetailPage({ product }: PageProps) {
  return (
    <>
      <h1>PDP: {product.title}</h1>
      <pre>{JSON.stringify(product, null, 2)}</pre>
    </>
  );
}

export const getStaticProps: GetStaticProps = async ({
  params,
  preview = false,
}) => {
  const handle = Array.isArray(params.handle)
    ? params.handle[0]
    : params.handle;
  const product = await fetchProduct(handle);
  return { props: { preview, product } };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const products = await fetchAllProducts();
  const paths = products.map(({ handle }) => ({
    params: { handle },
  }));
  return { paths, fallback: false };
};
