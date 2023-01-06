import type { GetStaticPaths, GetStaticProps } from "next";
import { ProductDetail } from "@/layouts/ProductDetail";
import { fetchAllProducts, fetchProduct } from "@/lib/shopify";
import { fetchProductByHandle } from "@/queries/product";

export const getStaticProps: GetStaticProps = async ({
  params,
  preview = false,
}) => {
  const handle = Array.isArray(params.handle)
    ? params.handle[0]
    : params.handle;
  // Fetch initial data from Shopify
  const product = await fetchProduct(handle);
  // Fetch additional data from Sanity Studio
  const data = await fetchProductByHandle(handle);
  return { props: { preview, data, product } };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const products = await fetchAllProducts();
  const paths = products.map(({ handle }) => ({
    params: { handle },
  }));
  return { paths, fallback: false };
};

export default ProductDetail;
