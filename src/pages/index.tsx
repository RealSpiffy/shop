import type { GetStaticProps } from "next";
import { ShopifyLink } from "@/components/Link";
import { client } from "@/lib/sanity.client";
import { fetchAllCollections, fetchAllProducts } from "@/lib/shopify";
import { query } from "@/queries/all-articles";

type PageProps = {
  preview: boolean;
  data: any[];
  products: ShopifyBuy.Product[];
  collections: ShopifyBuy.Collection[];
};

export default function Index({
  // preview,
  // data,
  products,
  collections,
}: PageProps) {
  console.log(products, collections);
  return (
    <>
      <h1>Real Spiffy Shop</h1>
      <dl>
        <dt>
          <h2>Collections</h2>
        </dt>
        {collections.map((collection) => {
          return (
            <dd key={collection.handle}>
              <ShopifyLink item={collection}>{collection.title}</ShopifyLink>
            </dd>
          );
        })}
      </dl>
      <dl>
        <dt>
          <h2>Products</h2>
        </dt>
        {products.map((product) => {
          return (
            <dd key={product.handle}>
              <ShopifyLink item={product}>{product.title}</ShopifyLink>
            </dd>
          );
        })}
      </dl>
    </>
  );
}

export const getStaticProps: GetStaticProps = async ({ preview = false }) => {
  const products = await fetchAllProducts();
  const collections = await fetchAllCollections();

  if (preview) {
    return { props: { preview, products, collections } };
  }

  const data = await client.fetch(query);

  return { props: { preview, data, products, collections } };
};
