import type { GetStaticPaths, GetStaticProps } from "next";
import { ProductDetail } from "@/layouts/ProductDetail";
import { fetchAllProducts, fetchProduct } from "@/lib/shopify";

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

export default ProductDetail;
